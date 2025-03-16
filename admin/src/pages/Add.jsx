import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom"; // Import de useNavigate
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
 // const navigate = useNavigate(); // Initialisation de la navigation
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("MAN");
  const [subcategory, setSubcategory] = useState("TOPWEAR");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false); // Ajout de l'état loading

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Active le chargement
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("price", price);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      // Ajout des images si elles existent
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setPrice("");
        setSizes([]);
        setBestSeller(false);
       // navigate("/products"); // Redirige vers la liste des produits
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
      toast.error(error.message);
    } finally {
      setLoading(false); // Désactive le chargement
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3" id="addForm">
      <div>
        <p className="mb-2">Upload image</p>
        <div className="flex gap-2">
          {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => (
            <label key={index} htmlFor={`image${index + 1}`} className="hover:cursor-pointer">
              <img
                className="w-20"
                src={!eval(`image${index + 1}`) ? assets.upload_area : URL.createObjectURL(eval(`image${index + 1}`))}
                alt=""
              />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id={`image${index + 1}`} hidden />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 capitalize">Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required />
      </div>

      <div className="w-full">
        <p className="mb-2 capitalize">Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" placeholder="Write description" required />
      </div>

      <div className="flex items-center flex-col sm:flex-row w-full gap-2 sm:gap-8">
        <div>
          <p className="mb-2 capitalize">Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full px-3 py-2">
            <option value="MAN">MAN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
        </div>

        <div>
          <p className="mb-2 capitalize">Subcategory</p>
          <select onChange={(e) => setSubcategory(e.target.value)} value={subcategory} className="w-full px-3 py-2">
            <option value="TOPWEAR">TOPWEAR</option>
            <option value="BOTTOMWEAR">BOTTOMWEAR</option>
            <option value="WINTERWEAR">WINTERWEAR</option>
          </select>
        </div>

        <div>
          <p className="mb-2 capitalize">Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" min={1} />
        </div>
      </div>

      <div>
        <p className="mb-2 capitalize">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => setSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))}>
              <p className={`${sizes.includes(size) ? "bg-slate-900 text-white" : "bg-slate-300"} px-3 py-1 cursor-pointer select-none`}>{size}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2 items-center">
        <input onChange={() => setBestSeller((prev) => !prev)} checked={bestSeller} type="checkbox" id="bestSeller" />
        <label htmlFor="bestSeller" className="cursor-pointer select-none">
          Add to Best Seller
        </label>
      </div>

      <button type="submit" className={`${!loading ? 'w-32 py-3 mt-4 bg-primary text-white font-bold rounded-md hover:bg-black/30 transition-all duration-100' : 'w-28 py-3 mt-4 bg-gray-700 text-white font-bold rounded-md'}`} disabled={loading}>
        {loading ? "Adding..." : "ADD"}
      </button>
    </form>
  );
};

export default Add;
