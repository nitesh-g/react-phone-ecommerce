import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, price, company, info, inCart } = value.detailProduct
          return (
            <div className="container py-5">
              {/* Title  */}
              <div className="row">
                <div className="text-blue text-slanted col-10 mx-auto text-center my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End of Title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                  <img src={img} className="img-fluid" alt={title} />
                </div>
                {/* Product Text */}
                <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mt-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                    </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'in cart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
