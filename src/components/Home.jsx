import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Header from "./Header";
import MainLayout from "./MainLayout";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Home = () => {
    return (
        <div className="w-11/12 mx-auto mt-4">
           <header>
            <Header></Header>
           </header> 
           <section><Brands></Brands></section>
           <section className="mt-5"><Banner></Banner></section>
           <nav><Navbar></Navbar></nav>
           <main>
            <Outlet></Outlet>
            <MainLayout></MainLayout>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default Home;