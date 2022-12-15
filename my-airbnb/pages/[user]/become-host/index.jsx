import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function BecomeHost() {
  const [previewImage, setPreviewImage] = useState();
  const [title, setTitle] = useState("");
  const [descripton, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const [status, setStatus] = useState("Available");
  const [yourHomestay, setYourHomestay] = useState();
  const name = Cookies.get("name");
  const token = Cookies.get("token");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("images", image);
    formData.append("description", descripton);
    formData.append("price", price);
    formData.append("address", address);
    formData.append("status", status);
    console.log([...formData]);

    axios
      .post("https://limagroup.my.id/homestays", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getListHomestayForUser = async () => {
    axios
      .get("https://limagroup.my.id/homestays/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setYourHomestay(response.data.data);
        console.log(yourHomestay);
      })
      .catch((err) => console.log(err));
  };

  const deleteHomestay = async (id, e) => {
    await axios.delete(`https://limagroup.my.id/homestays/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  };

  const handleFile = (file) => {
    console.log(file);
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    getListHomestayForUser();
  }, []);

  return (
    <div className="h-fit min-h-screen bg-white text-black">
      <Navbar
        host={() => router.push(`/${name}/become-host`)}
        history={() => router.push(`/${name}/history`)}
        dashboard={() => router.push(`/dashboard`)}
      />
      <div className="p-24 bg-white h-full">
        <p className="font-semibold text-4xl">Become a host</p>
        <div className="flex flex-row mt-2">
          <div className="basis-2/3 ">
            <form id="form" className="flex flex-col w-3/4">
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
              <label htmlfor="address">Address</label>
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
                style={{ display: "none" }}
                onChange={(e) => {
                  handleFile(e.target.files[0]);
                }}
              ></input>
              <button className="btn mt-5" onClick={(e) => handleSubmit(e)}>
                UPLOAD
              </button>
            </form>
          </div>
          <div className="pl-10">
            <p>Preview Image</p>
            <img src={previewImage} className="w-96 h-96" />
          </div>
        </div>
        <div className="w-full mt-5">
          <h1 className="text-2xl font-semibold pt-10">Your list homestay</h1>
          <ul>
            {yourHomestay ? (
              yourHomestay.map((homestay) => {
                return (
                  <li className="my-5 border-2 p-5 flex flex-row">
                    <div className="basis-1/2">
                      <p className="font-bold">{homestay.title}</p>
                      <p>
                        <span className="font-bold">Address:</span>{" "}
                        {homestay.address}
                      </p>
                      <p>
                        <span className="font-bold">Description: </span>
                        {homestay.description}
                      </p>
                      <p>
                        <span className="font-bold">Price: </span>
                        {homestay.price}
                      </p>
                    </div>
                    <div className="basis-1/2 justify-end align-middle grid justify-items-end">
                      <button className="btn w-20 m-2 text-white">Edit</button>
                      <label
                        htmlFor="my-modal"
                        className="btn m-2 text-white"
                        onClick={(e) => deleteHomestay(homestay.id, e)}
                      >
                        Delete
                      </label>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>You dont own any homestay, add one?</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
