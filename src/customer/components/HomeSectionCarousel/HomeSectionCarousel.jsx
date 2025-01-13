import React, {useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

function HomeSectionCarousel({data,sectionName}) {


    const items = data.slice(0, 20).map((item) => (
        <HomeSectionCard product={item}/>
    ));

    const responsive = {
        0: {items: 1}, // 0 to 568 show 1
        568: {items: 4}, // 568 to 1024 show 4 and so on
        1024: {items: 5},
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl font-extrabold p-5 text-left">{sectionName}</h1>
            </div>
            <AliceCarousel
                items={items}
                responsive={responsive}
                disableDotsControls

            />

        </div>
    );
}

export default HomeSectionCarousel;