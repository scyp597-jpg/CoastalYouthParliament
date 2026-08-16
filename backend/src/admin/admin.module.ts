import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ResultsGateway } from '../results/results.gateway';

@Module({
  controllers: [AdminController],
  providers: [AdminService, ResultsGateway],
  exports: [ResultsGateway],
})
export class AdminModule {}
