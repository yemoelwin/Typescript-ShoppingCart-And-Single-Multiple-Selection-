import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
};

export function StoreItems({ id, title, price, images }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  let truncatedTitle = title;
  if (title.length > 20) {
    truncatedTitle = title.slice(0, 30);
    const lastSpaceIndex = truncatedTitle.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      truncatedTitle = truncatedTitle.slice(0, lastSpaceIndex); // Trim to the last space
    }
    truncatedTitle += '...'; // Add ellipsis
  }

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={images}
          alt={title}
          className="img-fluid"
          style={{ objectFit: 'contain', height: '200px' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title
            className="d-flex justify-content-between align-items-baseline mb-4"
            style={{ fontSize: '16px' }}
          >
            <span title={title}>{truncatedTitle}</span>
            <span>
              <small className="text-muted">{formatCurrency(price)}</small>
            </span>
          </Card.Title>

          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(id)}
              >
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '.5rem' }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <strong style={{ fontSize: '20px' }}>{quantity}</strong> in
                    cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
