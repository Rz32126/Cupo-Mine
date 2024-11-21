

import { useState } from "react";
import { Link } from "react-router-dom";

const CouponCard = ({ data }) => {
    // console.log(data)
  const [isSaleOn] = useState(true);
  const isLoggedIn = false;


  return (
    <div className="card w-10/12 mx-auto bg-yellow-100 shadow-xl rounded-lg p-4 relative mb-3">
      <div className="flex items-center justify-between">
        <img
          src={data.brand_logo}
          alt=""
          className="w-16 h-16 rounded-md lg:ml-20"
        />
        <div className="lg:mr-44">
          <h1 className="font-bold text-red-600 mt-5">{data.brand_name}</h1>
          <h2 className="font-semibold mt-2 mr-7">{data.description}</h2>
         <Link to={`/details/${data._id}`}
            className="mt-6 btn bg-orange-600">
          View Coupons
        </Link>
        </div>
      </div>

      <p className="lg:ml-20 font-bold text-xl text-red-700">
      {data.brand_name}
      </p>
      <div className=" text-black ml-20">
            <span className="text-yellow-500 mr-1">&#9733; &#9733;</span>
            {data.rating}
     </div>
    

      {isSaleOn && (
        <div className="absolute top-10 right-6 bg-sky-600 text-white px-4 py-2 rounded-full animate-bounce">
          Sale is On!
        </div>
      )}
    </div>
  );
};

export default CouponCard;

