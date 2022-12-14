import { Typography } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';

function CustomMap() {
    const coordinates1 = [53.800779016661664, -1.5653234930554385];
    const coordinates2 = [53.791634678093864, -1.5339056516824792];
    const coordinates3 = [53.99319710629154, -1.5428450704261958];
    const coordinates4 = [53.9772565224383, -1.5284257441563223];
    const center = [53.898966258644506, -1.5186313255056725];
    return <Map height={400} defaultCenter={center} defaultZoom={10}>
        <Marker width={50} anchor={coordinates1} />
        <Marker width={50} anchor={coordinates2} />
        <Marker width={50} anchor={coordinates3} />
        <Marker width={50} anchor={coordinates4} />
    </Map>
}

export default function Takeaway() {
    return (
        <div className="w-full h-[100%] bg-coffee-background bg-cover bg-fixed p-5 flex justify-center">
            <div className='flex flex-col'>
                <div className='w-[68rem]'>                        
                <Typography color="white" variant="h1" className="p-10" align='center'>Takeaway</Typography>
                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <Typography color="white" variant="h5" className="p-3" align='center'>Where can you order takeaways?</Typography>
                        <Typography color="white" variant="h6" className="p-1" align='center'>You can order a takeaway from one of our many coffee shop locations.</Typography>
                        <Typography color="white" variant="h6" className="p-1" align='center'>Use the map below to find your nearest location</Typography>
                        <CustomMap/>
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
                            <Typography>The Latte!</Typography>
                            <Typography>The Mocha!</Typography>
                            <Typography>The Cappuccino!</Typography>
                            <Typography>Even the Iced Espresso!</Typography>
                        </Typography>
                    </div>
                    <div className="bg-[#475569] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg p-5 m-5 flex items-center flex-col text-center">
                        <img src="./other_images/takeaway.jpg" className="w-[100%] h-[100%] m-3"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}