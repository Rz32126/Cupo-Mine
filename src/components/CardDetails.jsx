import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import Details from "./Details";

// import Details from "./Details";


const CardDetails = () => {
    
    const data = useLoaderData();
    // const detail = data[0];
    // console.log(data, detail);
    // const { _id } = useParams()
    // const [details, setDetails] = useState({})
    // useEffect( () => {
    //     const data = data.find(details => details._id == _id)
    //     setDetails(data)
    // }, [data,_id])

    return (
        <div>
            <header><Header></Header></header>
            <div>
            {
              data.map((singleData) => (<Details key={singleData._id} data={singleData}></Details>))
            }
            
            </div>
        </div>
    );
};

export default CardDetails;