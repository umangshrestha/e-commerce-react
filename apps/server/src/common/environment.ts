import { plainToInstance } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  validateSync,
} from 'class-validator';

const daysToMilliseconds = (days: number) => days * 24 * 60 * 60 * 1000;

export class EnvironmentVariables {
  @IsEnum(['development', 'production', 'test'])
  NODE_ENV: 'development' | 'production' | 'test' = 'development';

  @IsNumber()
  PORT: number = 3000;

  @IsString()
  AWS_REGION: string = 'ap-south-1';

  @IsString()
  AWS_ACCESS_KEY_ID: string = 'test';

  @IsString()
  AWS_SECRET_ACCESS_KEY: string = 'test';

  @IsString()
  @IsNotEmpty()
  GOOGLE_CLIENT_ID: string;

  @IsString()
  @IsNotEmpty()
  ACCESS_TOKEN_SECRET: string = 'secret';

  @IsString()
  @IsNotEmpty()
  ACCESS_TOKEN_COOKIE_NAME: string = 'access_token';

  @IsNumber()
  @IsNotEmpty()
  ACCESS_TOKEN_EXPIRATION_TIME: number = daysToMilliseconds(7);

  @IsString()
  @IsNotEmpty()
  REFRESH_TOKEN_SECRET: string = 'refresh_secret';

  @IsString()
  @IsNotEmpty()
  REFRESH_TOKEN_COOKIE_NAME: string = 'refresh_token';

  @IsNumber()
  @IsNotEmpty()
  REFRESH_TOKEN_EXPIRATION_TIME: number = daysToMilliseconds(14);

  @IsString()
  @IsNotEmpty()
  COOKIE_DOMAIN: string = 'localhost';

  @IsBoolean()
  @IsNotEmpty()
  COOKIE_HTTP_ONLY: boolean = true;

  @IsString()
  @IsNotEmpty()
  GUEST_TOKEN_SECRET: string = 'guest_secret';

  @IsString()
  @IsNotEmpty()
  GUEST_TOKEN_COOKIE_NAME: string = 'guest_token';

  @IsNumber()
  @IsNotEmpty()
  GUEST_TOKEN_EXPIRATION_TIME: number = daysToMilliseconds(7);

  @IsString()
  @IsNotEmpty()
  CONTENTFUL_SPACE_ID: string;

  @IsString()
  @IsNotEmpty()
  CONTENTFUL_DELIVERY_ACCESS_TOKEN: string;

  @IsString()
  CONTENTFUL_ENVIRONMENT: string = 'master';

  @IsNumber()
  @IsPositive()
  TAX_RATE: number = 0.05; //https://cleartax.in/s/chapter-2-meat-edible-meat-offal-gst-rate-hsn-code

  @IsNumber()
  @IsPositive()
  DELIVERY_PRICE: number = 15;

  @IsNumber()
  @IsPositive()
  CACHE_TTL: number = 60 * 60 * 24; // 24 hours

  @IsNumber()
  @IsPositive()
  CART_TTL: number = 60 * 60 * 24 * 7; // 15 days

  @IsString()
  @IsOptional() // Only needed in development
  DYNAMODB_ENDPOINT: string = 'http://localhost:4566';
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
