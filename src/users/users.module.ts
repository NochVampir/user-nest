import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserHistory } from './user-history.entity';
import { UserHistoryService } from './user-history.service';
import { UserSubscriber } from './user.subscriber';
import { UserHistoryController } from './user-history.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserHistory])],
  providers: [UsersService, UserHistoryService, UserSubscriber],
  controllers: [UsersController, UserHistoryController],
})
export class UsersModule {}
