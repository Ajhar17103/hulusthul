import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ThinFooter from "../Footer/ThinFooter";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import ShopCart from './ShopCard'
import Paginate from "../Atomics/Paginate/Paginate";

const products=[
	{
	id:"01",
	description:"iPhone-12",
	price:"BTD-180000",
	src:"/img/product.png"
},
{ 
	id:"02",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"03",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"04",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"05",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"06",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"07",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"08",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"09",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"10",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"/img/product.png",
},
{
	id:"12",
	description:"iPhone-12 ",
	price:"BDT-180000",
	src:"/img/product.png",
},
]
const productLink="http://localhost:3000/hulusthul/Shop"

const Shop = () => {
	
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block section-padding">
						<Row>
                        <Col md={12}>
								<SectionHeader heading="Shop" />
							</Col>
                            
								

								  {
								 
								 products.map((product)=>(

									<Col xl={3} sm={6} className="mb-3" 	key={product.id} >
									
									<ShopCart
								
								product={product}
									/>
									  </Col>

								  ))} 
								
						</Row>
					</div>
					<Paginate />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Shop;
