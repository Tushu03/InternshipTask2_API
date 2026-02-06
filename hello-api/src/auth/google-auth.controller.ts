import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {GoogleAuthService} from './google-auth.service';
import { UserRole } from 'src/user/user.entity';

@Controller('auth')
export class GoogleAuthController {
    constructor(private googleAuthService:GoogleAuthService){}

    @Post('google')
    async googleLogin(@Body() body:{
        idToken:string,
        role:UserRole
    })
    {
        return this.googleAuthService.googleLogin(body.idToken,body.role);
    }
      
}