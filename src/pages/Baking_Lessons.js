import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Card from '../components/card';
import Slider from '../components/Slider2';
import { useState } from 'react';

export default function Lessons() {
    const [index, setIndex] = useState(0);

    return (
        <div className='w-full h-screen bg-coffee-background bg-cover bg-fixed p-5 flex justify-center'>
            <div className='w-3/5'>
                <Slider setIndex={setIndex}>
                    <Card image="./grangmother-teaching-her-granddaughter-make-homemade-sweets.jpg" title="Beginner Cake Baking class" text="Learn how to make cakes with this baking class lead by a professional." price="Only £80 / Lesson" />
                    <Card image="./bingu.jpg" title="Beginner Bingus Baking class" text="Learn how to make cakes with this baking class lead by a professional. In this class, you'll learn how to different sweet treats such as cakes and muffins" price="Only £60 / Lesson" />
                    <Card image="./wooden-table-with-cup-coffee.jpg" title="Beginner Cake Baking class" text="Learn how to make cakes with this baking class lead by a professional." price="Only £75 / Lesson" />
                    <Card image="./wooden-table-with-cup-coffee.jpg" title="Beginner Cake Baking class" text="Learn how to make cakes with this baking class lead by a professional." price="Only £75 / Lesson" />
                </Slider>
            </div>
        </div>
    );
}