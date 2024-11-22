import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Badge from '../../Badge';
import type { CartItemReadOnlyType as CartItemReadOnlyProps } from '../CartItemReadOnly';

export const CartItemReadOnly = ({
  quantity,
  product,
}: CartItemReadOnlyProps) => {
  const { name, unit, price, imageUrl, availableQuantity, description } =
    product || {
      price: 0,
      imageUrl: '',
      availableQuantity: 0,
      name: '',
      description: '',
      unit: '',
    };
  let badgeText = product?.badgeText || '';
  const totalPrice = price * quantity;
  if (availableQuantity <= 0) badgeText = 'Out of Stock';
  else if (availableQuantity < 10) badgeText = 'Limited Stock';
  return (
    <Card className="flex flex-col justify-between max-w-xl w-full">
      <Badge badgeText={badgeText} />
      <CardHeader
        avatar={
          <Avatar
            alt={name}
            src={imageUrl}
            variant="square"
            sx={{ width: 80, height: 80 }}
          />
        }
        title={<Typography variant="h6">{name}</Typography>}
        subheader={
          <Typography variant="subtitle2" color="textSecondary">
            {description}
            <br />
            Rs. {price} / {unit}
          </Typography>
        }
        action={
          <Typography sx={{ mt: 1 }} variant="h6" color="textSecondary">
            Rs. {totalPrice}
          </Typography>
        }
      />
    </Card>
  );
};
