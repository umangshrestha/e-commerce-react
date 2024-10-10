import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenModule } from './access-token/access-token.module';
import { AuthController } from './auth.controller';
import { GoogleService } from './google/google.service';
import { GuestTokenModule } from './guest-token/guest-token.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';

@Module({
  imports: [
    AccessTokenModule,
    RefreshTokenModule,
    GuestTokenModule,
    ConfigModule,
    PassportModule.register({
      session: true,
      defaultStrategy: 'jwt',
      property: 'user',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [GoogleService],
  controllers: [AuthController],
})
export class AuthModule {}
