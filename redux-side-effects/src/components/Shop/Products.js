import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id:1, price:50, title: 'test1', description: 'the first item'},
  {id:2, price:60, title: 'test2', description: 'the second item'},
  {id:3, price:70, title: 'test3', description: 'the third item'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) =>
          <ProductItem key={product.id}
          title={product.title}
          price={product.price}
          description={product.price}
          id={product.id}
        />
        )}
        
      </ul>
    </section>
  );
};

export default Products;
