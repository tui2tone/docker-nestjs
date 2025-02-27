import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  checkHealth(): any {
    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
    };
  }
}
