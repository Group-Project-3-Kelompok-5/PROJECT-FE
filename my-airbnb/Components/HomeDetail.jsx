import React from "react";
import Image from "next/image";

const homeDetail = ({
  harga,
  lokasi,
  title,
  deskripsi,
  komentar,
  gambar,
  order,
  checkin,
  checkout,
}) => {
  const bookingRoom = async () => {
    await axios
      .post(
        `https://limagroup.my.id/users/${id}`,
        { checkin, checkout },
        config
      )
      .then((response) => {
        alert("Yey");
        getInfoUsers();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-[1000px] h-full mx-auto pt-[100px]">
        <h2 className="text-6xl text-black font-medium">{title}</h2>
        <div className="flex my-10">
          <div>
            <Image
              className="mr-4 rounded-xl"
              src={gambar}
              width={615}
              height={300}
            />
          </div>
          <div>
            <Image
              className="mb-2 rounded-xl"
              src={gambar}
              width={300}
              height={100}
            />
            <Image
              className="mt-2 rounded-xl"
              src={gambar}
              width={300}
              height={100}
            />
          </div>
        </div>
        <h3 className="text-black font-semibold text-2xl capitalize w-[350px]">
          {deskripsi}
        </h3>
        <h4 className="text-black font-medium text-xl">{komentar}</h4>
        <h4 className="text-black font-medium text-xl">{lokasi}</h4>
        <div className="w-[450px] h-[200px] border-2 ml-auto">
          <h3 className="text-black font-medium text-2xl pl-10">
            Rp.{harga} / Night
          </h3>
          <div className="flex mt-10 px-10">
            <div className="w-1/2">
              <label for="start" className="text-black">
                Checkin:
              </label>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
                className=" text-black"
                onChange={checkin}
              ></input>
            </div>
            <div className="w-1/2 ml-2">
              <label for="start" className="text-black">
                Checkout:
              </label>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
                className=" text-black"
                onChange={checkout}
              ></input>
            </div>
            <button
              className="bg-black p-3 rounded-xl font-bold mt-10 w-36"
              onClick={order}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeDetail;
