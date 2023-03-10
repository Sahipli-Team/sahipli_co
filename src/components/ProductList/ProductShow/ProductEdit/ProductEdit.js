import { useState, useContext } from "react";
import ProductContext from "../../../../context/products";
const ProductEdit = ({ product, onSubmit }) => {
  //context's edit function pulled here
  const { editProductById } = useContext(ProductContext);
  //product's properties and set methods parsed here from context
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
    editProductById(
      product.id,
      product.date,
      title,
      category,
      price,
      description,
      image
    );
  }
  //html format of Edit Card
  return (
    <form onSubmit={handleSubmit} className="form-edit">
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          placeholder="Add Description"
          value={description}
          name={description}
          onChange={(e) => setDescription(e.target.value)}
          className="edit-textArea"
        ></textarea>
      </label>
      <button className="edit-button">Save</button>
    </form>
  );
};
//ProductEdit exported here
export default ProductEdit;
