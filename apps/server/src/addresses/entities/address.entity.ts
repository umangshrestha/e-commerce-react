import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ObjectType()
export class Address {
  @Field(() => String)
  addressId: string;
  userId: string;

  @Field(() => String, { nullable: true })
  apt?: string;

  @Field(() => String)
  street: string;

  @Field(() => String)
  city: string;

  @IsString()
  @Field(() => String)
  state: string;

  @IsString()
  @Field(() => String)
  zip: string;

  @IsString()
  @Field(() => String)
  country: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  additionalInfo?: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;
}
