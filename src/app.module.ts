import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneModule } from './one/one.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OneModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
