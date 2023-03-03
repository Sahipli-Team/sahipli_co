import { useContext, useState } from "react";
import ProductEdit from "./ProductEdit/ProductEdit";
import ProductContext from "../../../context/products";
import DeleteImageButton from "../../../Image/deleteImage.png";
import EditImageButton from "../../../Image/EditImage.png";

const ProductShow = ({ product }) => {
  const { title, category, price, image, description, date } = product;
  const [showEdit, setShowEdit] = useState(false);
  const { deleteProductById } = useContext(ProductContext);

  const handleEditClick = () => {
    setShowEdit((p) => !p);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  const handleDeleteClick = () => {
    deleteProductById(product.id);
  };

  let content = (
    <div className="wrapper">
      <p>
        <h3 className="title_style">Category:</h3> <span>{category}</span>
      </p>
      <p>
        <h3 className="title_style">Title:</h3> <span>{title}</span>
      </p>
      <img className="banner-image" src={image} alt={title} />
      <div>
        <p>
          <h3 className="title_style"> Price: </h3> <span>${price}</span>
        </p>
        <p>
          <h3 className="title_style">Advert Date:</h3> <span>{date}</span>
        </p>
      </div>
      <h3 className="title_style">Description:</h3>
      <p className="desc"> {description}</p>
    </div>
  );
  if (showEdit) {
    content = <ProductEdit onSubmit={handleSubmit} product={product} />;
  }
  return (
    <div className="container">
      <div className="button-wrapper">
        <button className="btn fill">
          <img
            className="buttonImg"
            src={EditImageButton}
            alt="Edit Image Button"
            onClick={handleEditClick}
          />
        </button>
        <button className="btn outline" onClick={handleDeleteClick}>
          <img
            className="buttonImg"
            src={DeleteImageButton}
            alt="Delete Image Button"
          />
        </button>
      </div>
      {content}
    </div>
  );
};
export default ProductShow;
