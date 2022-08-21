import { Typography } from '@mui/material';
import Card from '../components/card';
import Slider from '../components/Slider';
import { useState } from 'react';

export default function CoffeeShop() {
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full h-[100%] bg-coffee-background bg-cover bg-fixed p-5 flex justify-center">
            <div className='flex flex-col'>
                <div className='w-[68rem]'>
                    <Typography color="white" variant="h1" className="p-10" align='center'>Coffee Shops</Typography>
                    <Typography color="white" variant="h5" align='center'>Our coffee selection</Typography>
                    <Slider setIndex={setIndex}>
                        <Card image="./coffee_images/espresso.jpg" title="Espresso" text="Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans." price="£3.49" />
                        <Card image="./coffee_images/cappuccino.jpg" title="Cappuccino" text="Made with our aromatic Espresso, frothy milk and decadent chocolate dusting." price="£4.99" />
                        <Card image="./coffee_images/latte.jpg" title="Lattee" text="Our signature blend espresso with steamed milk for a smooth and creamy coffee." price="£2.99" />
                        <Card image="./coffee_images/mocha.jpg" title="Mocha" text="Expertly steamed chocolate milk blended with espresso for a caffeinated chocolate treat." price="£4.99" />
                        <Card image="./coffee_images/iced-coffee.jpg" title="Iced Espresso" text="Chilled milk over ice, capped with freshly shaken espresso." price="£4.99" />
                    </Slider>

                    <Typography color="white" variant="h5" align='center'>Our Sweet treat and pastry selection</Typography>
                    <Slider setIndex={setIndex}>
                        <Card image="./food_images/cinnamon-swirl.jpg" title="Cinnamon Swirl" text="All butter pastry swirled with a cinnamon butter filling. " price="£5.99" />
                        <Card image="./food_images/cookie.jpg" title="Chocolate chip Cookie" text="An all-butter cookie with Belgian milk chocolate chunks." price="£2.99" />
                        <Card image="./food_images/croissant.jpg" title="Croissant" text="All butter croissant. Perfect for the morning." price="£1.99" />
                        <Card image="./food_images/chocolate-brownie.jpg" title="Belgian chocolate Brownie" text="Made with Belgian chocolate, this indulgent gluten-free recipe uses ground almond for a rich chocolate brownie treat." price="£7.99" />
                        <Card image="./food_images/victoria-sponge-muffin.jpg" title="Victoria sponge muffin" text="Victoria sponge muffin topped with an icing and sugar nibs." price="£4.99" />
                    </Slider>
                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" align='center'>Where can you find us?</Typography>
                        <Typography color="white" variant="h6" align='center'>You can find us at one of many locations, use the map below to find your nearest location.</Typography>
                    </div>
                    <div className="w-[65.5rem] h-[26rem] bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" align='center'>Insert map</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}