
import { useEffect, useState } from "react";
import ServiceEvent from "./ServiceEvent";


const Services = () => {
    const [serviceEvents , setserviceEvents] = useState([])

   
    useEffect(() =>{
        fetch('corporate.json').then(res => res.json()).then(data => setserviceEvents(data))
    } , [])

    return (
        <div>
            <div>
                <h1 className="text-center mt-10 font-bold md:text-5xl text-2xl limelight text-rose-500"><span className="text-yellow-500">Our</span> Services</h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 md:mx-60 mx-10 items-center justify-center mb-10">
                {
                    serviceEvents.map(serviceEvent => <ServiceEvent key={serviceEvent.id} serviceEvent={serviceEvent}></ServiceEvent>)
                }
            </div>
        </div>
    );
};

export default Services;