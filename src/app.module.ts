import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    HealthCheckModule,
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
