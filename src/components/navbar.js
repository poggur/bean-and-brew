import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


export default function Navbar() {
    return (
        <div className="bg-coffee bg-opacity-70 backdrop-blur-md rounded drop-shadow-lg w-full flex flex-col flex items-center pl-5 pr-5">
            <div className="flex flex-row">
                <Typography color="white" variant="h2" align="center" className="p-4">Bean And Brew</Typography>
                <img src="./logo.png" className='h-[110px] w-[90px]'/>
            </div>
            <div className=" h-30  w-full flex flex-row flex items-center flex justify-between pl-5 pr-5">
                <Link to='/'>
                    <Typography color="white" variant="h3">Home</Typography>
                </Link>
                <Link to='/coffee'>
                    <Typography color="white" variant="h3">Coffee Shops</Typography>
                </Link>
                <Link to='/lessons'>
                    <Typography color="white" variant="h3">Baking Lessons</Typography>
                </Link>
                <Link to='/takeaway'>
                    <Typography color="white" variant="h3">Takeaway</Typography>
                </Link>
            </div>
        </div>
    );
}