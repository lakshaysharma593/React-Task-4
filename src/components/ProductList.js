import '../App.css';

function ProductList({ product, addToCart }){
    return(
       <div className = 'flex'>
        {
            product.map((productItem, productIndex)=>{
               return(
                <div style ={{ width:'25%' }}>
                    <div className = 'product-item'>
                        <img src={productItem.url} width="100%"   />
                        <p> {product.name} | {productItem.category} </p>
                        <p> {productItem.seller} </p>
                        <p> Rs. {productItem.price}/- </p>
                        <button onClick={()=> addToCart(productItem)}> Add to Cart </button>
                    </div>
                </div>
               )})
        }
       </div>
    );
}

export default ProductList;