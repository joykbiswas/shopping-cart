import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
// import { ContextProduct } from "../Context/ContextProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  const handleAddCart = (product) => {
    setCartItems([...cartItems, product]);
    // You can perform other actions related to adding to the cart here
  };
  console.log(cartItems);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
