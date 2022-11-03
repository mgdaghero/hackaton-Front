import React, { useState, useEffect } from "react";
import Item from "../../components/Item/Item";
import getProducts from "../../utils/getProducts";

const ListItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Item
          key={product.product.id}
          title={product.product.title}
          image={product.product.picture}
          description={product.product.description}
        />
      ))}
    </div>
  );
};

export default ListItem;
