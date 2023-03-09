import { useContext, useState } from "react";
import ProductEdit from "./ProductEdit/ProductEdit";
import ProductContext from "../../../context/products";
import DeleteImageButton from "../../../Image/deleteImage.png";
import EditImageButton from "../../../Image/EditImage.png";

const ProductShow = ({ product }) => {
  //products' properties parsed
  const { title, category, price, image, description, date } = product;
  //showEdit's status defined
  const [showEdit, setShowEdit] = useState(false);
  //context's delete function pulled here to be used
  const { deleteProductById } = useContext(ProductContext);
  //It'll set the visibility of edit card
  const handleEditClick = () => {
    setShowEdit((p) => !p);
  };
  //It'll  change the content back to the normal card structure when it's saved
  const handleSubmit = () => {
    setShowEdit(false);
  };
  //delete product according to the product id
  const handleDeleteClick = () => {
    deleteProductById(product.id);
  };
  //product card will be created according to the related product's specs.
  let content = (
    <div className="wrapper">
      <p>
        <h3 className="title_style">Title:</h3> <span>{title}</span>
      </p>
      <img className="banner-image" src={image} alt={title} />
      <div>
        <p>
          <h3 className="title_style">Category:</h3> <span>{category}</span>
        </p>
        <p>
          <h3 className="title_style"> Price: </h3> <span>${price}</span>
        </p>
        <p>
          <h3 className="title_style">Advert Date:</h3> <span>{date}</span>
        </p>
      </div>
      <p className="desc">
        <h3 className="title_style">Description: </h3> <br />
        {description}
      </p>
    </div>
  );
  // It'll change the card's image to the edit format according to ProductEdit component
  if (showEdit) {
    content = <ProductEdit onSubmit={handleSubmit} product={product} />;
  }
  //html format of each card will be created through db
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
