import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

 

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
     
          <div className="card-category-items mt-0 mb-0">
            <a>
              <img className="img-fluid" src="img/product.png" alt="" />

              <h5> iPhone-12 </h5>
              <h6>12000000</h6>
            </a>
          </div>
         
          
         
    </>
  );
};

export default ProductCard;
