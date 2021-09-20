 
import './shop.css'

const ShopCart=( props)=> {
	const {description,src,price}=props.product
	return (
		<>
			<div className="card-category-item mt-0 mb-0">
				{console.log(description)}
				<a>
					<img className="img-fluid" src={src} alt="" />
					
				    <h5> { description} </h5>
					<h6>
					{ price}
					</h6>
					<button className="btn btn-sm btn-success">Add to Cart</button>
				</a>
			</div>
		</>
	);
}
export default ShopCart;
