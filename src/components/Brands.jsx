import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Brands = () => {
    return (
        <div className="flex mt-5 gap-5 items-center bg-yellow-200">
            <p className="text-white bg-green-500 px-4 py-2">Brands</p>
            <Marquee pauseOnHover className="text-sky-800 font-semibold"> 
                <Link>
                <img
                src="https://i.ibb.co.com/x3D7Htp/Screenshot-2024-11-19-141346.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Aarong</p></Link>
                <Link><img
                src="https://i.ibb.co.com/10drM0B/Screenshot-2024-11-19-141146.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Yellow</p></Link>
                <Link><img
                src="https://i.ibb.co.com/BrTRxFV/Screenshot-2024-11-19-141029.png"
                alt=""
               className="w-16 h-16 rounded-md mr-7 mr-9"
              /><p className="mr-7">Richman</p></Link>
                <Link> <img
                src="https://i.ibb.co.com/2Y5V6m8/Screenshot-2024-11-19-141005.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Le Reve</p></Link>
                <Link><img
                src="https://i.ibb.co.com/vsY2RwG/Screenshot-2024-11-19-141247.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Daraz</p></Link>
                <Link><img
                src="https://i.ibb.co.com/7NL98xh/Screenshot-2024-11-19-141752.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Ecstasy</p></Link>
                <Link><img
                src="https://i.ibb.co.com/ZBMRYMy/Screenshot-2024-11-19-141545.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">CatsEye</p></Link>
                <Link> <img
                src="https://i.ibb.co.com/1sdX6Zh/Screenshot-2024-11-19-141641.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Anjas</p></Link>
                <Link><img
                src="https://i.ibb.co.com/xhZR0GK/Screenshot-2024-11-19-141611.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Loto</p></Link>
                <Link><img
                src="https://i.ibb.co.com/dB5b2gF/Screenshot-2024-11-19-141448.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Kay Craf</p></Link>
                <Link><img
                src="https://i.ibb.co.com/R3V9rvK/Screenshot-2024-11-19-141407.png"
                alt=""
               className="w-16 h-16 rounded-md mr-9"
              /><p className="mr-9">Sailor</p></Link>
            </Marquee>
        </div>
    );
};

export default Brands;