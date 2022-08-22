import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Homepage() {

    return (
        <div className="w-full h-[100%] bg-coffee-background bg-cover bg-fixed p-5 flex justify-center">
            <div className='flex flex-col'>
                <Typography color="white" variant="h1" className="p-10 flex self-center">Home</Typography>
                <Link to='/coffee'>
                    <div className="bg-woman-drinking bg-cover h-[30rem] w-[1200px] p-4 m-3">
                        <Typography color="white" variant="h4">Explore our Fair-Trade Coffee menu</Typography>
                    </div>
                </Link>
                <Link to='/lessons'>
                    <div className="bg-learning-to-bake bg-cover h-[30rem] w-[1200px] p-4 m-3 flex justify-end">
                        <Typography color="black" variant="h4">Learn about our different baking classes</Typography>
                    </div>
                </Link>
                <Link to='/takeaway'>
                    <div className="bg-takeaway bg-cover h-[30rem] w-[1200px] p-4 m-3">
                        <Typography color="white" variant="h4">Learn about our Takeaways</Typography>
                    </div>
                </Link>
            </div>
        </div>
    );
}