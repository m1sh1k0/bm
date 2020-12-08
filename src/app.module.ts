import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PointModule } from './point/point.module';
import { EnterpriseModule } from './enterprise/enterprise.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    SharedModule,
    UserModule,
    AuthModule,
    EnterpriseModule,
    PointModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
