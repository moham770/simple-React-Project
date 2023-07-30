import { Link } from "react-router-dom";

export const Product = (props) => {
  const { product, showButton } = props;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>price: {product.price}$</p>
          {showButton &&  <Link href="#" className="btn btn-primary" to={`product/${product.id}`}> Details</Link>
           
             
            
          }
        </div>
      </div>
    </>
  );
};
