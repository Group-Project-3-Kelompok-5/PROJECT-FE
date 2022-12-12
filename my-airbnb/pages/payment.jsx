import Head from "next/head";

export default function Reservation() {
  return (
    <div>
      <Head>
        <title>Hyrule Travel - Find A New Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen min-w-screen bg-white text-black">
          <div>
            <p>Navbar</p>
          </div>
          <div className="py-32 px-80">
            <h1 className="text-5xl pb-5">Payment Confirmation</h1>
            <h1 className="text-2xl pb-5">Credit Card</h1>
            <div className="flex flex-row">
              {/* Credit Card Information */}
              <div className="w-2/4 h-max">
                <div className="pt-10 flex flex-col">
                  <select
                    name="cars"
                    id="cars"
                    className="bg-white w-64 border-b-2 pb-3"
                  >
                    <option value="volvo">Visa</option>
                    <option value="saab">Mastercard</option>
                    <option value="mercedes">Paypal</option>
                    <option value="audi">Kidney</option>
                  </select>
                  <label for="cardholder" className="pt-5">
                    Cardholder's Name:
                  </label>
                  <input
                    type="text"
                    id="cardholder"
                    name="cardholder"
                    className="w-full bg-white border-b-2"
                    style={{ outlineStyle: "none" }}
                  ></input>
                  <div className="flex flex-row pt-5">
                    <div className="basis-3/4 pr-5">
                      <label for="cardholder" className="pt-5">
                        Card Number:
                      </label>
                      <input
                        type="text"
                        id="cardholder"
                        name="cardholder"
                        className="w-full bg-white border-b-2 "
                        style={{ outlineStyle: "none" }}
                      ></input>
                    </div>
                    <div className="basis-1/4">
                      <label for="cardholder" className="pt-5">
                        CVV2 Number:
                      </label>
                      <input
                        type="text"
                        id="cardholder"
                        name="cardholder"
                        className="w-full bg-white border-b-2"
                        style={{ outlineStyle: "none" }}
                        maxLength="3"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-row pt-5">
                    <div className="w-2/4">
                      <p>Expiration Date (MM/YY) : </p>
                      <input
                        type="text"
                        id="cardholder"
                        name="cardholder"
                        className="w-full bg-white"
                        style={{ outlineStyle: "none" }}
                        maxLength="2"
                      ></input>
                    </div>
                    <div className="w-1/4">
                      <select name="cars" id="cars" className="bg-white w-full">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                    <div className="w-1/4">
                      <select name="cars" id="cars" className="bg-white w-full">
                        <option value="27">2027</option>
                        <option value="26">2026</option>
                        <option value="25">2025</option>
                        <option value="24">2024</option>
                        <option value="23">2023</option>
                        <option value="22">2022</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn bg-white border-2 text-black w-full mt-5 hover:text-white hover:bg-black">
                    Confirm Payment
                  </button>
                </div>
              </div>
              {/* Request detail */}
              <div className="w-2/4 h-max ml-5 border-2 rounded-lg">
                <div className="m-5">
                  <p>Your request to book:</p>
                  <p className="font-bold">
                    Check-in date:{" "}
                    <span className="font-normal">11-1-2023</span>
                  </p>
                  <p className="font-bold">
                    Check-out date:{" "}
                    <span className="font-normal">12-1-2023</span>
                  </p>
                  <div className="flex flex-row mr-5 mt-5">
                    <div className="bg-black h-24 w-36">
                      <p className="text-white">Image</p>
                    </div>
                    <p className="ml-5">Description</p>
                  </div>
                  <div className="mt-5">
                    <p>Total Price:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
