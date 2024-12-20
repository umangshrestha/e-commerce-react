import { registerEnumType } from '@nestjs/graphql';

export enum DeliveryStatus {
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
}

registerEnumType(DeliveryStatus, {
  name: 'DeliveryStatus',
  description: 'The status of the order',
});
