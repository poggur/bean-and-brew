import { Typography } from '@mui/material';

export default function Card({text, title, price, image}) {
    return (
        <div className="w-[300px] h-[500px] bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
            <img src={image} className="w-[300px] h-[150px] m-3"></img>
            <Typography color="white" variant="h5">{title}</Typography>
            <Typography color="white" variant="h6">{text}</Typography>
            <Typography color="white" variant="h5" className="mt-7">{price}</Typography>
        </div>
    );
}