import { useEffect, useState, useContext } from "react";
import ProductContext from "../../context/products";

const AddProduct = () => {
  const { createProduct } = useContext(ProductContext);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [click, setClick] = useState(false);
  const [vis, setVis] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const todayDate = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;
    setDate(todayDate);
    setClick(false);
    createProduct(date, title, category, price, description, image);
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  useEffect(() => {
    if (click) {
      setVis("block");
      console.log("block");
    } else {
      setVis("none");
      console.log("none");
    }
  }, [click]);

  function handleClick() {
    setClick(!click);
    console.log(click);
  }

  return (
    <div>
      <form
        className="addForm"
        style={{ display: vis }}
        onSubmit={handleSubmit}
      >
        <label className="addLabel">
          Title:
          <input
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <br />
        <br />

        <label>
          Category:
          <input
            placeholder="Add Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Price:
          <input
            placeholder="Add Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Image URL:
          <input
            placeholder="Add Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
        </label>
        <br />
        <br />

        <label>
          Description:
          <textarea
            placeholder="Add Description"
            value={description}
            name={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <br />
        <div>
          <br />
          <button>Save</button>
        </div>
      </form>
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
};
export default AddProduct;
