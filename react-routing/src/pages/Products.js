import {Link} from 'react-router-dom';

const Products = [
  {id: 'product-1', name: 'Product 1'},
  {id: 'product-2', name: 'Product 2'},
  {id: 'product-3', name: 'Product 3'},
];

const ProductsPage = () => {
    return (
      <>
      <h1>Products Page</h1>
      <ul>
        {Products.map((product) => 
          <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
        )}
      </ul>
      </>  
    )

}

export default ProductsPage;