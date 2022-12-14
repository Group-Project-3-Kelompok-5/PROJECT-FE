import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useRouter } from "next/router";
import axios from "axios";
import HomeDetail from "../../Components/HomeDetail";
import Cookies from "js-cookie";

const detailhomestay = () => {
  const [homestayDetail, setHomestayDetails] = useState();
  const name = Cookies.get("name");

  const router = useRouter();
  const details = router.query;
  console.log(details);

  const get_Details = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/HERIBUDIYANA/Air-Bnb/1.0.0/homestays/${details}`
      )
      .then((response) => {
        console.log(response.data.data);
        setHomestayDetails(response.data.data);
        console.log(get_Details);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get_Details();
  }, []);

  return (
    <div className="bg-white h-screen">
      <Navbar
        profile={() => router.push(`/${name}/edit-user`)}
        host={() => router.push(`/${name}/become-host`)}
        history={() => router.push(`/${name}/history`)}
      />

      {homestayDetail && (
        <HomeDetail
          title={homestayDetail.title}
          deskripsi={homestayDetail.description}
          lokasi={homestayDetail.address}
          harga={homestayDetail.price}
          komentar={homestayDetail.comments}
          gambar={homestayDetail.images}
        />
      )}
    </div>
  );
};

export default detailhomestay;
