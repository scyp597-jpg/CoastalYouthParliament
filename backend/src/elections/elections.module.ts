import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ElectionsService } from './elections.service';
import { ElectionsController } from './elections.controller';
import { ElectionOrchestratorService } from './election-orchestrator.service';
import { ElectionOrchestratorController } from './election-orchestrator.controller';
import { PrismaModule } from '../prisma.module';
import { ResultsGateway } from '../results/results.gateway';
import { ElectionSchedulerService } from '../common/tasks/election-scheduler.service';

@Module({
  imports: [PrismaModule, ScheduleModule.forRoot()],
  controllers: [ElectionsController, ElectionOrchestratorController],
  providers: [
    ElectionsService,
    ElectionOrchestratorService,
    ResultsGateway,
    ElectionSchedulerService,
  ],
  exports: [
    ElectionsService,
    ElectionOrchestratorService,
    ResultsGateway,
  ],
})
export class ElectionsModule {}
