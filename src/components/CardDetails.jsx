import { useLoaderData } from "react-router-dom";
import Header from "./Header";


const CardDetails = () => {
    const data = useLoaderData();
    const details = data[0]
    console.log(data,details);
    return (
        <div>
            <header><Header></Header></header>
            <main className="w-9/12 mx-auto bg-yellow-200 mt-6">
            <div className="card">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/x3D7Htp/Screenshot-2024-11-19-141346.png"
      alt=""
      className="rounded-xl w-2/4" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">RichMan</h2>
    <p>FitTech offers smart fitness devices, wearable trackers.{data.brand_name}</p>
    <div className="card-actions">
        <div>
            <p>"coupon-code": "FITTECH20"</p>

        </div>
      <button className="btn bg-sky-500">Buy Now</button>
    </div>
  </div>
</div>
            </main>
        </div>
    );
};

export default CardDetails;