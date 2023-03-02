import { createContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const valueToShare = {};
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
