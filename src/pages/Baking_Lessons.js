import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Card from '../components/card';

export default function Lessons () {
    return(
        <div className="w-full h-screen bg-coffee-background bg-cover bg-fixed p-5 flex justify-center">
            <div className="flex flex-row"/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}