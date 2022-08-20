import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


export default function Navbar() {
    return (
        <div className="bg-coffee bg-opacity-60 backdrop-blur-md rounded drop-shadow-lg h-30  w-full flex flex-row flex items-center flex justify-evenly pl-5 pr-5">
            <img src="./logo.png" className='h-[110px] w-[90px]'/> 
            <Link to='/'>
                <Typography color="white" variant="h3">Home</Typography>
            </Link>
            <Link to='/coffee'>
                <Typography color="white" variant="h3">Coffee Shops</Typography>
            </Link>
            <Link to='/lessons'>
                <Typography color="white" variant="h3">Baking Lessons</Typography>
            </Link>
            <Link to='/test'>
                <Typography color="white" variant="h3">Baking Takeaway</Typography>
            </Link>
        </div>
    );
}