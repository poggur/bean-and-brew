import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function NavbarButton({ route, text }) {
    const [hovered, setHovered] = useState(false);

    return <Link to={route}>
        <Typography 
            color="white" 
            variant="h4" 
            sx={{ textDecoration: hovered ? 'underline' : '' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >{text}</Typography>
    </Link>
}

export default function Navbar() {



    return (
        <div className="bg-coffee bg-opacity-70 backdrop-blur-md rounded drop-shadow-lg w-full flex flex-col flex items-center pl-5 pr-5">
            <div className="flex flex-row">
                <Typography color="white" variant="h2" align="center" className="p-4">Bean {'&'} Brew</Typography>
                <img src="./other_images/logo.png" className='h-[110px] w-[90px]'/>
            </div>
            <div className=" h-30  w-full flex flex-row flex items-center flex justify-between pl-5 pr-5">
                <NavbarButton route='/' text='Home' />
                <NavbarButton route='/coffee' text='Coffee Shops' />
                <NavbarButton route='/lessons' text='Baking Lessons' />
                <NavbarButton route='/takeaway' text='Takeaway' />
            </div>
        </div>
    );
}