import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

export const GraphQlConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  driver: ApolloDriver,

  useFactory: (config: ConfigService) => ({
    debug: config.getOrThrow('NODE_ENV') !== 'production',
    playground: config.getOrThrow('NODE_ENV') !== 'production',
    autoSchemaFile: join(process.cwd(), 'schema/schema.graphql'),
  }),
};