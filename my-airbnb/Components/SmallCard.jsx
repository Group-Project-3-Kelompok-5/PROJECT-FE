import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating/Rating";
import { useState } from "react";
import Router from "next/router";

const SmallCard = ({
  title,
  deskripsi,
  address,
  images,
  price,
  ids,
  rating,
}) => {
  const orig = "https://storage.googleapis.com/project-3/";
  const [ratingValue, setRatingValue] = useState(undefined);

  const handleRatingAction = (value) => {
    setRatingValue(value);
  };

  const getDetail = () => {
    Router.push({
      pathname: "/reserve-page",
      query: {
        ids: ids,
      },
    });
  };

  const angkaRating = rating * 2 * 10;

  return (
    <div>
      <div className="w-[98%] mb-5 flex pr-5 bg-gray-100 rounded-2xl">
        <div className="relative h-24 w-40 md:h-52 md:w-80 px-6 flex-shrink-0">
          <Image
            src={images}
            className="rounded-xl"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div>
            <h4 className="text-black font-semibold text-2xl ">{title}</h4>
            <p className="text-black text-xl">{deskripsi}</p>
            <p className="text-black text-xl">{address}</p>
            <div className="flex items-end justify-end justify-bottom lg:mt-[120px] pb-6">
              <Rating
                ratingInPercent={angkaRating}
                iconSize="l"
                showOutOf={true}
                enableUserInteraction={false}
              />
              <p className="text-black pl-2 text-xl">Rp.{price} / Night</p>
              <button
                className="bg-black px-3 py-2 rounded-xl ml-5 cursor-pointer hover:shadow-xl active:bg-black transition transform duration-100 ease-out active:scale-95"
                onClick={getDetail}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
