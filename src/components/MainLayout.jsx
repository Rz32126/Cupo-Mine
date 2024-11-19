import Cards from "./Cards";


const MainLayout = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5 text-sky-500">Deal Our Latest Coupon Code</h1>
            <Cards></Cards>
        </div>
    );
};

export default MainLayout;

// loader: () => fetch('../main.json'),