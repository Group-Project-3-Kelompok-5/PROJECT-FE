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
  const token = Cookies.get("token")
  const router = useRouter();
  const details = router?.query?.ids;
  console.log(router?.query?.ids);
  console.log(details)

  const config = {
    headers: {Authorization: `Bearer ${token}`}
  }

  const get_Details = async () => {
    await axios
      .get(
        `https://limagroup.my.id/homestays/${details}`, config
      )
      .then((response) => {
        console.log(response.data.data);
        setHomestayDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get_Details();
  }, []);

  console.log(get_Details)

  return (
    <div className="bg-white h-screen">
      <Navbar
        profile={() => router.push(`/${name}/edit-user`)}
        host={() => router.push(`/${name}/become-host`)}
        history={() => router.push(`/${name}/history`)}
      />

      {homestayDetail && (
        <HomeDetail
          title={homestayDetail.Title}
          deskripsi={homestayDetail.Description}
          lokasi={homestayDetail.Address}
          harga={homestayDetail.Price}
          komentar={homestayDetail.Comments}
          gambar={homestayDetail.Images}
        />
      )}
    </div>
  );
};

export default detailhomestay;
