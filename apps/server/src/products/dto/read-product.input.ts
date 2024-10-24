import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class ReadProductInput {
  @IsUUID()
  @Field(() => String)
  productId: string;
}
