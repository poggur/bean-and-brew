import { Typography } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { useState } from 'react';
import Card from '../components/card';
import Slider from '../components/Slider';

function CustomMap() {
    const coordinates1 = [53.800779016661664, -1.5653234930554385];
    const coordinates2 = [53.791634678093864, -1.5339056516824792];
    const coordinates3 = [53.99319710629154, -1.5428450704261958];
    const coordinates4 = [53.9772565224383, -1.5284257441563223];
    const center = [53.898966258644506, -1.5186313255056725];
    return <Map height={400} defaultCenter={center} defaultZoom={10}>
        <Marker width={50} anchor={coordinates1} />
        <Marker width={50} anchor={coordinates2} />
        <Marker width={50} anchor={coordinates3} />
        <Marker width={50} anchor={coordinates4} />
    </Map>
}

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
                        <Card image="./coffee_images/latte.jpg" title="Latte" text="Our signature blend espresso with steamed milk for a smooth and creamy coffee." price="£2.99" />
                        <Card image="./coffee_images/mocha.jpg" title="Mocha" text="Expertly steamed chocolate milk blended with espresso for a caffeinated chocolate treat." price="£4.99" />
                        <Card image="./coffee_images/frappe.jpg" title="Frappe" text="Get your coffee fix in the form of a creamy, milky, ice-cold frappé, with a fluffy light topping and a sprinkle of chocolate dusting." price="£4.99" />
                        <Card image="./coffee_images/iced-coffee.jpg" title="Iced Espresso" text="Chilled milk over ice, capped with freshly shaken espresso." price="£4.99" />
                        <Card image="./coffee_images/pumpkin-spice.jpg" title="Pumpkin spice latte" text="espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices." price="£4.99" />
                    </Slider>

                    <Typography color="white" variant="h5" align='center'>Our Food selection</Typography>
                    <Slider setIndex={setIndex}>
                        <Card image="./food_images/cinnamon-swirl.jpg" title="Cinnamon Swirl" text="All butter pastry swirled with a cinnamon butter filling. " price="£5.99" />
                        <Card image="./food_images/cookie.jpg" title="Chocolate chip Cookie" text="An all-butter cookie with Belgian milk chocolate chunks." price="£2.99" />
                        <Card image="./food_images/croissant.jpg" title="Croissant" text="All butter croissant. Perfect for the morning." price="£1.99" />
                        <Card image="./food_images/chocolate-brownie.jpg" title="Belgian chocolate Brownie" text="Made with Belgian chocolate, this indulgent gluten-free recipe uses ground almond for a rich chocolate brownie treat." price="£7.99" />
                        <Card image="./food_images/victoria-sponge-muffin.jpg" title="Victoria sponge muffin" text="Victoria sponge muffin topped with an icing and sugar nibs." price="£4.99" />
                        <Card image="./food_images/chicken-pressed-sandwich.jpg" title="Chicken and Bacon pressed sandwich" text="Roast British chicken with béchamel sauce, mature Cheddar cheese, mozzarella cheese and sweetcure bacon on cheese topped white bread." price="£3.99" />
                        <Card image="./food_images/ham-pressed-sandwich.jpeg" title="Ham and Cheese pressed sandwich" text="British ham, mature Cheddar cheese and béchamel sauce on barmarked white bread." price="£3.99" />
                        <Card image="./food_images/porridge.jpg" title="Blueberry Poridge" text="Fresh Porridge topped with blueberries and nuts." price="£2.99" />
                    </Slider>
                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" align='center'>Where can you find us?</Typography>
                        <Typography color="white" variant="h6" align='center'>You can find us at one of many locations, use the map below to find your nearest location.</Typography>
                    </div>
                    <div className="w-[65.5rem] h-[26rem] bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <CustomMap/>
                    </div>
                </div>
            </div>
        </div>
    );
}