import { NavLink } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const ServiceEvent = ({ serviceEvent }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const { icon_url, title, description, id } = serviceEvent
    return (
        <div data-aos="fade-up" className=" border lg:h-40 h-48 flex flex-col items-center border-rose-500 justify-center 
        p-5 bg-rose-100 rounded-md drop-shadow-2xl">
            <img className="w-20" src={icon_url} alt="" />
            <p className="text-center font-semibold text-yellow-500">{title}</p>
            <p className="text-center">{description.length >= 50 ? <p>{description.slice(0, 50)}...<span className="text-rose-500 font-bold"><NavLink to={`/details/${id}`}>read more</NavLink></span></p> : <p>{description}</p>}</p>
        </div>
    );
};

export default ServiceEvent;