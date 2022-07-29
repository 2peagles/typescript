import React from 'react';
// import storeItems from '../data/items.json';
import { Row , Col} from 'react-bootstrap';
import  StoreItem  from '../components/StoreItem';
// import Commerce from '@chec/commerce.js';
import PropTypes from 'prop-types';


export const Store = ({ products})=>{
  // const commerce = new Commerce('{your_public_key}');

  // commerce.products.list().then((product) => console.log(product));
  return (
    <>
    <h1> Store </h1>
    <Row md={2} xs={1} lg={3} className='g-3' id={products}>
        {products.map((product) => (
          <Col>
            <StoreItem
            key={product.id}
            product={product}
          />
          </Col>
        ))}
      {/* {StoreItem.map(items => (
        <Col key={item.id}>
          <StoreItem{...item} />
        </Col>
      ))} */}
    </Row>
    </>
  )
}

Store.propTypes = {
  products: PropTypes.array,
};
