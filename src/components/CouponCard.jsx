

// {
//     "_id": "1",
//     "brand_name": "GadgetHub",
//     "rating": 4.6,
//     "description": "GadgetHub offers cutting-edge gadgets and accessories for tech enthusiasts.",
//     "brand_logo": "https://example.com/logos/gadgethub.png",
//     "coupons": [
//         {
//             "coupon-code": "GADGET20",
//             "description": "Save 20% on select gadgets",
//             "expiry-date": "2024-12-15",
//             "condition": "Valid on selected items only",
//             "coupon_type": "Percentage"
//         },
//         {
//             "coupon-code": "FREESHIPGADGET",
//             "description": "Free shipping on all orders over $75",
//             "expiry-date": "2024-11-30",
//             "condition": "No minimum required",
//             "coupon_type": "Free Shipping"
//         }
//     ],
//     "shop-Link": "https://gadgethub.com",
//     "category": "Electronics",
//     "isSaleOn": true
// }

// import { useState } from "react";
import { Link } from "react-router-dom";

const CouponCard = ({ data }) => {
    console.log(data)
  // const [isSaleOn] = useState(true); // Sale status, assuming it's true
  // const isLoggedIn = false; // Simulated login status, set it based on your authentication logic
  // const navigate = useNavigate();

  // Handle coupon click (redirects user based on login status)
  // const handleCouponClick = () => {
  //   if (isLoggedIn) {
  //     navigate("/brand-details"); // Redirect to brand details page if logged in
  //   } else {
  //     navigate("/login"); // Redirect to login page if not logged in
  //   }
  // };

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
    

      {/* {isSaleOn && (
        <div className="absolute top-10 right-6 bg-sky-600 text-white px-4 py-2 rounded-full animate-bounce">
          Sale is On!
        </div>
      )} */}
    </div>
  );
};

export default CouponCard;

