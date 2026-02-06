import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User,UserRole } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    createUser(data: Partial<User>)
    {
        const user=this.userRepository.create(data);
        return this.userRepository.save(user);


    } 
     async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

}