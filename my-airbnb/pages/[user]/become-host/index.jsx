import Navbar from "../../../components/Navbar";
import { useState } from "react";
import axios from "axios";

export default function BecomeHost() {
  const [previewImage, setPreviewImage] = useState();
  const [title, setTitle] = useState("");
  const [descripton, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const [status, setStatus] = useState("Available");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", descripton);
    formData.append("price", price);
    formData.append("address", address);
    formData.append("status", status);
    console.log([...formData]);

    axios
      .post("https://limagroup.my.id/homestays", formData, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzEwMTk3MzUsInJvbGUiOiJVc2VyIiwidXNlcklkIjo1fQ.oco-ZzcIQbO1CZCPNHrt4pT-7gXuPF4q3mG6t-WP7iA`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="p-24 m-10 bg-white h-96">
        <p className="font-semibold text-4xl">Become a host</p>
        <div className="flex flex-row mt-2">
          <div className="basis-1/2">
            <form id="form" className="flex flex-col">
              <label for="title">Title</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="desc">Description</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="desc"
                name="desc"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label for="price">Price</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="price"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label for="address">Address</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="address"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label
                htmlFor="image"
                className="p-4 mt-5 border-dashed border-4 border-gray-600 block cursor-pointer w-1/2"
              >
                Upload Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  if (e?.target.files[0]) {
                    const file = e.target.files[0];
                    setImage(file);
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreviewImage(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              ></input>
              <button className="btn mt-5" onClick={(e) => handleSubmit(e)}>
                UPLOAD
              </button>
            </form>
          </div>
          <div className="pl-10">
            <p>Preview Image</p>
            <img src={previewImage} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
