
import ProductList from './ProductList';

function ProductsGrid({ products, cartData }) {
  

  return (
      <div className="products-grid">
          {/* convert each product into Html */}
          {products.map((product) => {
            return (
              <ProductList key={product.id} product={product} cartData={cartData} />
            );
          })}
        </div>
  )
}

export default ProductsGrid