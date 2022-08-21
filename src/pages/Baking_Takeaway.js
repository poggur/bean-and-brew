import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Takeaway() {
    return (
        <div className="w-full h-[100%] bg-coffee-background bg-cover bg-fixed p-5 flex justify-center">
            <div className='flex flex-col'>
                <div className='w-[68rem]'>                        
                <Typography color="white" variant="h1" className="p-10" align='center'>Takeaway</Typography>
                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" className="p-3" align='center'>Where can you order takeaways?</Typography>
                        <Typography color="white" variant="h6" className="p-1" align='center'>You can order a takeaway from one of our many coffee shop locations.</Typography>
                    </div>

                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" className="pt-5" align='center'>How can i pay for my takeaway?</Typography>
                        <Typography color="white" variant="h6" className="pt-3" align='center'>You can pay for your takeaway in one of the following methods:
                            <Typography>Cash</Typography>
                            <Typography>Debit and Credit cards</Typography>
                            <Typography>Direct debit</Typography>
                        </Typography>
                        <Typography color="white" variant="h6" align='center'>We have also partnered with companies such as Just Eat to bring our food to You!</Typography>
                    </div>

                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" className="pt-5" align='center'>What can i order?</Typography>
                        <Typography color="white" variant="h6" className="pt-3" align='center'>You can order anything from our menu! Some examples of items are:
                            <Typography>Our victoria sponge muffin!</Typography>
                            <Typography>Our chocolate brownie!</Typography>
                            <Typography>Our cinnamon swirl!</Typography>
                            <Typography>Even our chocolate chip cookie!</Typography>
                        </Typography>
                        <Typography color="white" variant="h6" className="pt-3" align='center'>You can also order one or more of our coffee selection! This includes drinks such as:
                            <Typography>The Lattee!</Typography>
                            <Typography>The Mocha!</Typography>
                            <Typography>The Cappuccino!</Typography>
                            <Typography>Even the Iced Espresso!</Typography>
                        </Typography>
                    </div>
                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <img src="/takeaway.jpg" className="w-[100%] h-[100%] m-3"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}