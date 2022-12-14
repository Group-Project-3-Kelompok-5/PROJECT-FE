import { useState } from "react";
import Head from "next/head";
import Navbar from "../../../Components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function History() {
  const [feedback, setFeedback] = useState({
    stars: 0,
    comments: "",
  });

  const [stars, setStars] = useState();
  const [comment, setComments] = useState();
  const [homestayData, setHomestayData] = useState();
  const name = Cookies.get("name");
  const token = Cookies.get("token");
  const router = useRouter();

  const getAllHomestay = async () => {
    axios
      .get("https://limagroup.my.id/homestays", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHomestayData(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const sendFeedback = async (id_homestay) => {
    await axios
      .post(
        `https://limagroup.my.id/comments`,
        {
          homestay_id: id_homestay,
          ratings: parseInt(stars),
          notes: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  console.log(feedback);
  console.log(homestayData);

  useEffect(() => {
    getAllHomestay();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Hyrule Travel - Find A New Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Navbar
          host={() => router.push(`/${name}/become-host`)}
          history={() => router.push(`/${name}/history`)}
          dashboard={() => router.push(`/dashboard`)}
        />
        <div className="px-48 pb-48 pt-20">
          <h1 className="text-6xl border-b-2 pb-5">Trip Log</h1>
          {homestayData?.map((data) => {
            return (
              <div
                key={data.id_homestay}
                className="flex flex-col w-full rounded-lg border-2 p-3 mt-5"
              >
                <div>
                  <p>{data.title}</p>
                </div>
                <div className="flex flex-row pt-3">
                  <p className="font-bold pr-2">
                    Checkin date:{" "}
                    <span className="font-normal">{data.checkin}</span>
                  </p>
                  <p className="font-bold pr-2">
                    Checkout date:{" "}
                    <span className="font-normal">{data.checkout}</span>
                  </p>
                </div>
                <div className="pt-2">
                  <p>
                    Total Price: <span>{data.total_price}</span>
                  </p>
                  {/* <p>
                    Status: <span>{data.status}</span>
                  </p> */}
                  <label htmlFor="my-modal" className="btn mt-5 text-white">
                    FEEDBACK
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal text-black">
                    <div className="modal-box bg-white shadow-xl">
                      <h3 className="font-bold text-lg">Feedback</h3>
                      <p className="py-4">Add feedback</p>
                      <input
                        type="text"
                        placeholder="Beri masukan"
                        id="comments"
                        className="input input-bordered w-full bg-white"
                        onChange={(e) => setComments(e.target.value)}
                      />
                      <input
                        type="number"
                        placeholder="Stars"
                        id="stars"
                        max={5}
                        min={1}
                        className="input input-ghost w-full"
                        onChange={(e) => setStars(e.target.value)}
                      />
                      <div className="modal-action">
                        <label
                          htmlFor="my-modal"
                          className="btn"
                          onClick={() => sendFeedback(data.id)}
                        >
                          Feedback
                        </label>
                        <label htmlFor="my-modal" className="btn">
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
