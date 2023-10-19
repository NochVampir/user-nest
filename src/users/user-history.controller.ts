import { Controller, Get, Param} from "@nestjs/common";
import { UserHistoryService } from './user-history.service';

@Controller('user-history')
export class UserHistoryController {
  constructor(private readonly userHistoryService: UserHistoryService) {}
  @Get(`:id`)
  findOne(@Param('id') id: number) {
    return this.userHistoryService.find(id);
  }

  @Get()
  findAll() {
    return this.userHistoryService.findAll();
  }
}
