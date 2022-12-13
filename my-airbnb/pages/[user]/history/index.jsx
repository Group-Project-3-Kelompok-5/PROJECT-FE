import Head from "next/head";
import Navbar from "../../../components/Navbar";

export default function History() {
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
          <div className="flex flex-col w-full rounded-lg border-2 p-3 mt-5">
            <div>
              <p>Villa Premium A3</p>
            </div>
            <div className="flex flex-row pt-3">
              <p className="font-bold pr-2">
                Checkin date: <span className="font-normal">Date</span>
              </p>
              <p className="font-bold pr-2">
                Checkout date: <span className="font-normal">Date</span>
              </p>
            </div>
            <div className="pt-2">
              <p>$25 x 2 night</p>
              <p>Total Price : $50</p>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-lg border-2 p-3 mt-5">
            <div>
              <p>Villa Premium A3</p>
            </div>
            <div className="flex flex-row pt-3">
              <p className="font-bold pr-2">
                Checkin date: <span className="font-normal">Date</span>
              </p>
              <p className="font-bold pr-2">
                Checkout date: <span className="font-normal">Date</span>
              </p>
            </div>
            <div className="pt-2">
              <p>$25 x 2 night</p>
              <p>Total Price : $50</p>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-lg border-2 p-3 mt-5">
            <div>
              <p>Villa Premium A3</p>
            </div>
            <div className="flex flex-row pt-3">
              <p className="font-bold pr-2">
                Checkin date: <span className="font-normal">Date</span>
              </p>
              <p className="font-bold pr-2">
                Checkout date: <span className="font-normal">Date</span>
              </p>
            </div>
            <div className="pt-2">
              <p>$25 x 2 night</p>
              <p>Total Price : $50</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
