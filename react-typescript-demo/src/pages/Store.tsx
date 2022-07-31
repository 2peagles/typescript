import React from 'react';
import { Row , Col} from 'react-bootstrap';
import  StoreItem  from '../components/StoreItem';
import PropTypes from 'prop-types';

const Store = ({ products })=>{
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
    </Row>
    </>
  );
};

Store.propTypes = {
  products: PropTypes.array
};

export default Store;
