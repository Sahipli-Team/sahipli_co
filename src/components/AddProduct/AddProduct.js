import { useEffect, useState, useContext } from "react";
import ProductContext from "../../context/products";

const AddProduct = () => {
  const { createProduct } = useContext(ProductContext)
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [click, setClick] = useState(false);
  const [vis, setVis] = useState("none");

  const handleSubmit = (e) => {

    e.preventDefault()
    const today = new Date();
    const todayDate = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    setDate(todayDate)
    setClick(false)
    createProduct(
      date,
      title,
      category,
      price,
      description,
      image
    ) 
    setTitle('')
    setDescription('') 
    setPrice('')  
    setCategory('')
    setImage('')
}

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
      <form style={{ display: vis }} onSubmit={handleSubmit}>
        <label>
          İlan Başlığı:
          <input placeholder="İlan Başlığı" type="text"></input>
        </label>
        <label>
          Kategori:
          <input placeholder="Kategori Giriniz"></input>
        </label>
        <label>
          Fiyat:
          <input placeholder="Fiyat Giriniz"></input>
        </label>
        <label>
          Açıklama:
          <input placeholder="Açıklama Giriniz"></input>
        </label>
        <label>
          Görsel URL:
          <input placeholder="Resim URL'i Giriniz"></input>
        </label>
        <div>
          <button>Kaydet</button>
        </div>
      </form>
      <button onClick={handleClick}>İlan Ekle</button>
    </div>
  );
};
export default AddProduct;
