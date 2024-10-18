import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNotification } from '../../Notification';
import CartList from '../CartList';
import { useAddItemToCart } from '../hooks/AddItemToCart/AddItemToCart.hooks';
import { CARTS_QUERY } from './CartPage.queries';

export const CartPage = () => {
  const { setNotification } = useNotification();
  const { data, loading, error } = useQuery(CARTS_QUERY);
  const { addItemToCart } = useAddItemToCart();

  useEffect(() => {
    if (error) {
      setNotification({
        message: error.message,
        severity: 'error',
      });
    }
  }, [error, setNotification]);

  return (
    <CartList
      data={data?.cart?.items?.map((item: any) => ({
        ...item.product,
        quantity: item.quantity,
      }))}
      loading={loading}
      onAddItemToCart={addItemToCart}
    />
  );
};
