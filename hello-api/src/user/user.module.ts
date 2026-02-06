// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

import { GoogleAuthController } from 'src/auth/google-auth.controller';
import { GoogleAuthService } from 'src/auth/google-auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService,GoogleAuthService,JwtService],
  controllers: [GoogleAuthController],
})
export class UserModule {}
