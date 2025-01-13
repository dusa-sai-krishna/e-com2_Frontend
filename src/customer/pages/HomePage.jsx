import React from 'react';
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import {mens_kurta} from "../../Data/Men/Men_Kurta";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return (
        <div className="h-screen w-full lg:mt-5">
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
            </div>
            <Footer/>
        </div>

    );
};

export default HomePage;