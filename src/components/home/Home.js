import React from "react";
import Fake_footer from "../layouts/Fake_footer";
import Footer from "../layouts/Footer";
import Countries from "./Countries";
import Deliver from "./Deliver";
import Header from "./Header";

const Home = ()=>{
    return(
        <>
            <Header />
            <Deliver />
            <Countries />
            <Fake_footer />
            <Footer />
        </>
    )
}

export default Home