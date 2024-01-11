import { Col, Row } from 'react-bootstrap';
import products from '../data/product.json';
import { StoreItems } from '../components/StoreItems';

export function Store() {
  const items = products?.products;

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
