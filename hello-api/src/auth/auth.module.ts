import {JwtModule} from '@nestjs/jwt';

JwtModule.register({
    secret: 'SECRET_KEY',
    signOptions: { expiresIn: '1h' },
})