import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Brands = () => {
    return (
        <div className="flex mt-5 gap-5 items-center bg-yellow-200">
            <p className="text-white bg-green-500 px-4 py-2">Brands</p>
            <Marquee pauseOnHover className="text-sky-400"> 
                <Link className="mr-4">Aarong</Link>
                <Link className="mr-4">Yellow</Link>
                <Link className="mr-4">RichMan</Link>
                <Link className="mr-4">Le Reve</Link>
                <Link className="mr-4">Daraz</Link>
                <Link className="mr-4">Ecstasy</Link>
                <Link className="mr-4">Cats Eye</Link>
                <Link className="mr-4">Anjans</Link>
                <Link className="mr-4">Loto</Link>
                <Link className="mr-4">Kay Kraft</Link>
                <Link className="mr-4">Sailor</Link>
                <Link className="mr-4">Aarong</Link>
                <Link className="mr-4">Yellow</Link>
                <Link className="mr-4">RichMan</Link>
                <Link className="mr-4">Le Reve</Link>
                <Link className="mr-4">Daraz</Link>
                <Link className="mr-4">Ecstasy</Link>
            </Marquee>
        </div>
    );
};

export default Brands;