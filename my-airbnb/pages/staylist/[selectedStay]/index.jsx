import Navbar from "../../../Components/Navbar";
import { IoStarSharp } from "react-icons/io5";

export default function ReservePage() {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Navbar />
      <div className="w-full h-full">
        <div className="mx-64 mt-32">
          <h1 className="text-4xl">Villa Premium</h1>
          <IoStarSharp color="yellow" className="mb-5" />
          <div className="flex flex-row h-96">
            <div className="bg-gray-500 w-96 h-full basis-1/2">
              <p>image</p>
            </div>
            <div className="basis-1/2 border-2 ml-5">
              <p>$25/night</p>
              <label for="start">Start date:</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              ></input>
              <label for="end">End date:</label>

              <input
                type="date"
                id="end"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              ></input>
              <button>check availibity</button>
              <div className="mt-5">
                <p>$25 x 2 night</p>
                <p>Total $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
