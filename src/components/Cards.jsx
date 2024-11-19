import { useLoaderData } from "react-router-dom";
import CouponCard from "./CouponCard";


const Cards = () => {
    const data = useLoaderData()
    
    return (
        <div className="mt-3">
          
          <div>
            {
              data.map((singleData) => (<CouponCard key={singleData._id} data={singleData}></CouponCard>))
            }
          </div>
        </div>
    );
};

export default Cards;