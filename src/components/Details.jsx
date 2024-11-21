import { NavLink } from "react-router-dom";



const Details = ({ data }) => {
    // const detail = data[0];
    return (
        <div>
            <main className="w-9/12 mx-auto bg-yellow-200 mt-6">
            <div className="card">
  <figure className="px-10 pt-10">
    <img
      src={data.brand_logo}
      alt=""
      className="rounded-xl w-2/4 h-44 object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.brand_name}</h2>
    <p>{data.description}</p>
    <div className="card-actions">
        <div>
            <p></p>

        </div>
      
      <button className="btn bg-sky-500">Buy Now</button>
      <NavLink className="btn bg-red-500" to="/">Back to Home</NavLink>
    </div>
  </div>
</div>
            </main>
        </div>
    );
};

export default Details;