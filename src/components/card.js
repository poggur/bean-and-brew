import { Typography } from '@mui/material';

export default function Card(text, image) {
    return (
        <div className="w-[300px] h-[500px] bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
            <img src={'./grangmother-teaching-her-granddaughter-make-homemade-sweets.jpg'} className="w-[300px] h-[150px]"></img>
            <Typography color="white" variant="h5">Basic Pastry making lesson</Typography>
            <Typography color="white" variant="h6">This class teaches you how to make and handle pastries Perfect for beginners</Typography>
        </div>
    );
}