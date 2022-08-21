import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Card from '../components/card';
import Slider from '../components/Slider';
import { useState } from 'react';

export default function Lessons() {
    const [index, setIndex] = useState(0);

    return (
        <div className='w-full h-[100%] bg-coffee-background bg-cover bg-fixed p-5 flex justify-center'>
            <div className='w-[68rem]'>
                <div className='flex justify-center'>
                    <Typography color="white" variant="h1" className="p-10 flex self-center">Baking Lessons</Typography>
                </div>
                <Slider setIndex={setIndex}>
                    <Card image="./grangmother-teaching-her-granddaughter-make-homemade-sweets.jpg" title="Beginner Cake Baking class" text="Learn how to make cakes with this baking class lead by a professional." price="Only £80 / Lesson" />
                    <Card image="./wooden-table-with-cup-coffee.jpg" title="Beginner Coffee Brewing class" text="Learn how to make excellent coffee using locally sourced coffee beans lead by a professional." price="Only £40 / Lesson" />
                    <Card image="./takeaway.jpg" title="Beginner Cake Baking class" text="Learn how to make cakes with this baking class lead by a professional." price="Only £75 / Lesson" />
                    <Card image="./bingu.jpg" title="Beginner Bingus Baking class" text="Learn how to make cakes with this baking class lead by a professional. In this class, you'll learn how to different sweet treats such as cakes and muffins" price="Only £60 / Lesson" />
                    <Card image="./young-woman-eating-croissants-cafe.jpg" title="Beginner Pastry Baking class" text="Learn how to make delectable pastries with this pastry baking class lead by a professional." price="Only £80 / Lesson" />
                </Slider>
                <div className='m-5 bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg'>
                    <Typography color="white" variant="h5" align='center' className="pt-3">What Payment options are accepted?</Typography>
                    <Typography color="white" variant="h6" align='center'>We accept many different payment types</Typography>
                    <Typography color="white" variant="h6" align='center' className="pb-3">
                        Different payment options we accept are:
                        <Typography>Cash</Typography>
                        <Typography>Debit and Credit cards</Typography>
                        <Typography>Paypal</Typography>
                        <Typography>Direct debit</Typography>
                    </Typography>
                </div>

                <div className='m-5 bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg'>
                    <Typography color="white" variant="h5" align='center' className="pt-3">How can i pay for a class?</Typography>
                    <Typography color="white" variant="h6" align='center' className="pb-3">You can either order the class online or book a class in person.</Typography>
                </div>

                <div className='m-5 bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg'>
                    <Typography color="white" variant="h5" align='center' className="pt-3">Where do the lessons take place?</Typography>
                    <Typography color="white" variant="h6" align='center'>The lessons take place at our "learning studio".</Typography>
                    <Typography color="white" variant="h6" align='center' className="pb-3">You can find one of our learning studio by using the map below.</Typography>
                </div>
                <div className="w-[65.5rem] h-[26rem] bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                    <Typography color="white" variant="h5" align='center'>Insert map</Typography>
                </div>
            </div>
        </div>
    );
}