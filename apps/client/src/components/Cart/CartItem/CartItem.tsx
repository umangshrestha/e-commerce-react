import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '../../Badge';
import ProductAddItem from '../../Product/ProductAddItem';
import { CartItemProps } from './CartItem.types';

export const CartItem = ({
  productId,
  name,
  price,
  imageUrl,
  availableQuantity,
  limitPerTransaction,
  description,
  onAddItemToCart,
  getProductCount,
}: CartItemProps) => {
  const totalPrice = price * availableQuantity;
  const isProductAvailable = availableQuantity > 0;
  const badgeText = !isProductAvailable ? 'Out of Stock' : null;
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
          </Typography>
        }
        action={
          <IconButton
            color="error"
            onClick={() => onAddItemToCart(productId, 0)}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <Divider />
      <CardActions className="flex justify-between">
        <Typography variant="h6" color="textSecondary">
          Rs. {price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <ClearIcon />
        </Typography>
        <ProductAddItem
          {...{
            productId,
            availableQuantity,
            limitPerTransaction,
            onAddItemToCart,
            getProductCount,
          }}
        />
        <Typography variant="body2" color="textSecondary">
          =
        </Typography>
        <Typography variant="h6" color="error">
          Rs. {totalPrice}
        </Typography>
      </CardActions>
    </Card>
  );
};
