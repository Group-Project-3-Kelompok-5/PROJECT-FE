import { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar";
import axios from "axios";

export async function getServerSideProps() {
  const result = await axios.get(
    "https://virtserver.swaggerhub.com/HERIBUDIYANA/Air-Bnb/1.0.0/trips"
  );
  const data = result.data;
  return {
    props: {
      data: data,
    },
  };
}

export default function History({ data }) {
  const [feedback, setFeedback] = useState({
    id_homestay: 0,
    stars: 0,
    comments: "",
  });

  const sendFeedback = async (id_homestay) => {
    await axios
      .post(
        `https://virtserver.swaggerhub.com/HERIBUDIYANA/Air-Bnb/1.0.0/rattings/${id_homestay}`,
        feedback
      )
      .then((response) => {
        console.log(response);
      });
  };

  const handleChange = (e) => {
    const newData = { ...feedback };
    newData[e.target.id] = e.target.value;
    setFeedback(newData);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Hyrule Travel - Find A New Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Navbar />
        <div className="px-48 pb-48 pt-20">
          <h1 className="text-6xl border-b-2 pb-5">Trip Log</h1>
          {data.data.map((data) => {
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
                  <p>
                    Status: <span>{data.status}</span>
                  </p>
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
                      <p className="py-4">Tiada kesan tanpa kehadiranmu</p>
                      <input
                        type="text"
                        placeholder="How do you feel?"
                        id="comments"
                        className="input input-bordered w-full max-w-xs bg-white"
                        onChange={(e) => handleChange(e)}
                      />
                      <input
                        type="number"
                        placeholder="Stars"
                        id="stars"
                        className="input input-ghost w-full max-w-xs"
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="modal-action">
                        <label
                          htmlFor="my-modal"
                          className="btn"
                          onClick={() => sendFeedback(data.id_homestay)}
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
