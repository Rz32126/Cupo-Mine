import Banner from "./Banner";
import Brands from "./Brands";
import Header from "./Header";



const Home = () => {
    return (
        <div className="w-11/12 mx-auto mt-4">
           <header>
            <Header></Header>
           </header> 
           <section><Brands></Brands></section>
           <section className="mt-5"><Banner></Banner></section>
           <nav></nav>
           <main></main>
        </div>
    );
};

export default Home;