



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData, NavLink } from 'react-router-dom';

const CardDetails = () => {
    const allData = useLoaderData(); 
    const { id } = useParams(); 
    const [singleData, setSingleData] = useState(null);  

    useEffect(() => {
        if (Array.isArray(allData)) {
            const data = allData.find(item => item._id === id);  
            if (data) {
                setSingleData(data);  
            } else {
                setSingleData(null); 
            }
        }
    }, [allData, id]);  

    if (singleData === null) {
        return <div>Loading or No data found...</div>;  
    }

    return (
        <main className="w-9/12 mx-auto bg-yellow-200 mt-6">
            <div className="card">
                <figure className="px-10 pt-10">
                    <img
                        src={singleData.brand_logo}  
                        alt={singleData.brand_name} 
                        className="rounded-xl w-2/4 h-44 object-cover"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{singleData.brand_name}</h2> 
                    <p>{singleData.description}</p> 
                    <div className="card-actions">
                        <p className='btn'>Code 1: GADGET20</p>
                        <p className='btn'>Code 2: REESHIpGADGET</p>
                        <button className="btn bg-sky-500">Get Code</button>
                        <NavLink className="btn bg-red-500" to="/">Back to Home</NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CardDetails;
