import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ShopCart from "../Shop/ShopCard";

const products=[
	{
	id:"01",
	description:"iPhone-12",
	price:"BTD-180000",
	src:"./img/product.png"
},
{ 
	id:"02",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"03",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"04",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"05",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"06",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"07",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"08",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"09",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:" img/product.png",
},
{
	id:"10",
	description:"iPhone-11 ",
	price:"BDT-160000",
	src:"img/product.png",
},
{
	id:"12",
	description:"iPhone-12 ",
	price:"BDT-180000",
	src:"img/product.png",
},
]

export default function HomeShop() {
	return (
		<>
			<div className="video-block section-padding ">
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
		</>
	);
}
