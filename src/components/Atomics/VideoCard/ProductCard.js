import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../Card/Card";

const products = [
  {
    id: "01",
    description: "iPhone-12",
    price: "BTD-180000",
    src: "./img/product.png",
  },
  {
    id: "02",
    description: "iPhone-11 ",
    price: "BDT-160000",
    src: "img/product.png",
  },
];

const ProductCard = () => {
  return (
    <>
      <Row>
        <Col xl={6} sm={6} md={6} lg={6} className="mb-3">
          <div className="card-category-items mt-0 mb-0">
            <a>
              <img className="img-fluid" src="img/product.png" alt="" />

              <h5> iPhone-12 </h5>
              <h6>12000000</h6>
            </a>
          </div>
        </Col>
        
        <Col xl={6} sm={6} md={6} lg={6} className="mb-3">
          <div className="card-category-items mt-0 mb-0">
            <a>
              <img className="img-fluid" src="img/product.png" alt="" />

              <h5> iPhone-12 </h5>
              <h6>12000000</h6>
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductCard;
