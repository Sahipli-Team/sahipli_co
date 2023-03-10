import { useEffect, useState, useContext } from "react";
import ProductContext from "../../context/products";
import addButton from "../../Image/add-product.png";

const AddProduct = () => {
  // It'll automatically save the date which the new product saved.
  const today = new Date();
  //context's create method called at this line
  const { createProduct } = useContext(ProductContext);
  //useState's used for storing and setting new datas for the variables
  const [title, setTitle] = useState();
  const [date, setDate] = useState(
    `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
  );
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  // click will save the status of the mouse click which will render the page eveytime it changed with useEffect method
  const [click, setClick] = useState(false);
  // vis will save the status of the display's type. It'll be none or block according to the click's status
  const [vis, setVis] = useState("none");
  // when save button clicked, a new card will be saved and store in to db.json.
  const handleSubmit = (e) => {
    e.preventDefault();
    //It'll restore the mouse click status to false
    setClick(false);
    //Card's input datas and also the date data which is automatically created, will be sent here to the useContext's createProduct method.
    createProduct(date, title, category, price, description, image);
    //After the save process, it'll clear the user input interfaces.
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage("");
  };
  // It will render the page eveytime when "click" changed,
  //block will set to save screen to be seen
  //none will set to save screen to be hidden
  useEffect(() => {
    if (click) {
      setVis("block");
    } else {
      setVis("none");
    }
  }, [click]);

  // It's the function of the close button
  function handleClick(e) {
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage("");
    e.preventDefault();
    setClick(!click);
  }
  //html format of the addScreen
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
          <button className="save_button">Save</button>
          <button className="close_button" onClick={handleClick}>
            Close
          </button>
        </div>
      </form>
      <button className="addProduct" onClick={handleClick}>
        <img src={addButton} alt="add button" />
        SELL
      </button>
    </div>
  );
};
//AddProduct exported here
export default AddProduct;
