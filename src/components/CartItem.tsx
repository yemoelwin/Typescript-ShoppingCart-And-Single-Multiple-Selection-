import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/product.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const prods = storeItems.products;
  const { removeFromCart } = useShoppingCart();

  const item = prods.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          style={{ width: '100px', height: '100px', objectFit: 'contain' }}
          src={item.images}
        />

        <div className="me-auto">
          <div>
            {item.title}{' '}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: '.7rem' }}>
                x{quantity}
              </span>
            )}
          </div>

          <div className="text-muted" style={{ fontSize: '.8rem' }}>
            {formatCurrency(item.price)}
          </div>
        </div>

        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}
