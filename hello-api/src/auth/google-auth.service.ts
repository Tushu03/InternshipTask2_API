import {Injectable,UnauthorizedException} from '@nestjs/common';;
import {UserService} from '../user/user.service';
import { OAuth2Client } from 'google-auth-library';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '../user/user.entity';

@Injectable()
export class GoogleAuthService 
{
    private client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    constructor(
        private userService:UserService,
        private jwtService:JwtService
    ){}


    async googleLogin(idToken:string,role:UserRole){
        
        const ticket=await this.client.verifyIdToken({
            idToken,
            audience:process.env.GOOGLE_CLIENT_ID
        });

        const payload=ticket.getPayload();
        if(!payload){
            throw new UnauthorizedException('Invalid Google token');
        }

        const {sub, email, name, picture}=payload;

        let user=await this.userService.findByEmail(new String(email).toString());

        if(!user){
            user=await this.userService.createUser({
                name,
                email,
                googleId:sub,
                picture,
                role, //patient or doctor
                password:'',
            });
        }

        const jwt=this.jwtService.sign({
            userId:user.id,
            role:user.role
        });

        return {jwt,user};

    }


}