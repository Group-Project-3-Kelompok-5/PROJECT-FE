import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Image from "next/image";

export default function BecomeHost() {
  const [previewImage, setPreviewImage] = useState();
  const [title, setTitle] = useState("");
  const [descripton, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const [status, setStatus] = useState("Available");
  const [yourHomestay, setYourHomestay] = useState();
  const [selectedHomestay, setSelectedHomestay] = useState({});
  const [newImage, setNewImage] = useState();
  const name = Cookies.get("name");
  const token = Cookies.get("token");
  const router = useRouter();

  //sweetalert
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

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
        Toast.fire({
          icon: "success",
          title: "Berhasil menambahkan homestay",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      })
      .catch((err) => {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "Gagal menambahkan homestay",
        });
      });
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
    await axios
      .delete(`https://limagroup.my.id/homestays/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Berhasil menghapus homestay",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handle image upload
  const handleFile = (file) => {
    console.log(file);
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  //edit homestay disini
  const editHandle = (e) => {
    const newData = { ...selectedHomestay };
    newData[e.target.id] = e.target.value;
    setSelectedHomestay(newData);

    console.log(newData);
  };

  const sendEditHomestay = async (id) => {
    const formData = new FormData();
    formData.append("title", selectedHomestay.title);
    formData.append("images", newImage);
    formData.append("description", selectedHomestay.description);
    formData.append("price", selectedHomestay.price);
    formData.append("address", selectedHomestay.address);
    await axios
      .put(`https://limagroup.my.id/homestays/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
        <p className="font-semibold text-4xl">Mau jadi host?</p>
        <div className="flex flex-row mt-2">
          <div className="basis-2/3 ">
            <form id="form" className="flex flex-col w-3/4">
              <label for="title">Judul:</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="title"
                name="title"
                placeholder="Rumah Mewah"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="desc">Deskripsi:</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="desc"
                name="desc"
                placeholder="3 kamar tidur, 2 kamar mandi dalam, wifi 24 jam tanpa henti, lingkungan asri"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label for="price">Price</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="price"
                name="price"
                placeholder="999999"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlfor="address">Address</label>
              <input
                className="bg-white border-b-2"
                type="text"
                id="address"
                name="address"
                placeholder="Jln. Angsa No.20B, Kalimantan Utara"
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
          <div className="pl-10 basis-1/3">
            <p>Preview Image</p>
            <img src={previewImage} className="w-full h-96" />
          </div>
        </div>
        <div className="w-full mt-5">
          <h1 className="text-2xl font-semibold pt-10">
            Daftar hunian yang kamu punya:
          </h1>
          <ul>
            {yourHomestay ? (
              yourHomestay.map((homestay) => {
                return (
                  <li className="my-5 border-2 p-5 flex flex-row w-100 h-100">
                    <div className="basis-1/4 w-60 h-60 relative mr-5">
                      <Image src={homestay.images} fill />
                    </div>
                    <div className="basis-2/4">
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
                    <div className="basis-1/2 grid justify-items-end">
                      <a
                        href={`#${selectedHomestay.title}`}
                        className="btn m-2 w-40"
                        onClick={() => {
                          setSelectedHomestay(homestay);
                          console.log(selectedHomestay);
                        }}
                      >
                        EDIT HOMESTAY
                      </a>
                      <div className="modal" id={selectedHomestay.title}>
                        <div className="modal-box bg-white flex flex-col">
                          <h3 className="font-bold text-3xl">
                            Ubah data dari homestay
                          </h3>
                          <label htmlfor="title" className="font-bold">
                            Title
                          </label>
                          <input
                            className="bg-white border-b-2"
                            type="text"
                            id="title"
                            name="title"
                            value={selectedHomestay.title}
                            onChange={(e) => editHandle(e)}
                          />
                          <label htmlfor="address" className="font-bold">
                            Address
                          </label>
                          <input
                            className="bg-white border-b-2"
                            type="text"
                            id="address"
                            name="title"
                            value={selectedHomestay.address}
                            onChange={(e) => editHandle(e)}
                          />
                          <label htmlfor="description" className="font-bold">
                            Description
                          </label>
                          <input
                            className="bg-white border-b-2"
                            type="text"
                            id="description"
                            name="description"
                            value={selectedHomestay.description}
                            onChange={(e) => editHandle(e)}
                          />
                          <label htmlfor="price" className="font-bold">
                            Price
                          </label>
                          <input
                            className="bg-white border-b-2"
                            type="text"
                            id="price"
                            name="price"
                            value={selectedHomestay.price}
                            onChange={(e) => editHandle(e)}
                          />

                          <div className="modal-action">
                            <a
                              href="#"
                              className="btn"
                              onClick={() =>
                                sendEditHomestay(selectedHomestay.id)
                              }
                            >
                              Update
                            </a>
                            <a href="#" className="btn">
                              Cancel
                            </a>
                          </div>
                        </div>
                      </div>
                      <label
                        htmlFor="my-modal"
                        className="btn m-2 w-40 text-white"
                        onClick={(e) => deleteHomestay(homestay.id, e)}
                      >
                        Delete Homestay
                      </label>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>Maaf, sayangnya kamu belum jadi host, nih</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
