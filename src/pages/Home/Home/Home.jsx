import { Helmet } from "react-helmet-async";
import CallUs from "../CallUs/CallUs";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import Bannner from "../banner/Bannner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Bannner></Bannner>
            <Catagory></Catagory>
            <Hero></Hero>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;