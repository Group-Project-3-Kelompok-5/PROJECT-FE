import Navbar from "../components/Navbar";
import { useState } from "react";

export default function BecomeHost() {
  const [previewImage, setPreviewImage] = useState();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="p-24 m-10 bg-white h-96">
        <p className="font-semibold text-4xl">Become a host</p>
        <div className="flex flex-row mt-2">
          <div>
            <label
              htmlFor="image"
              className="p-4 border-dashed border-4 border-gray-600 block cursor-pointer"
            >
              Click to add image
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
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPreviewImage(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            ></input>
            <img src={previewImage} width={200}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
