import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { data } from "autoprefixer";


const ServiceDetails = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('/corporate.json')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const { id } = useParams()
    // const moreDetails = useLoaderData()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const moreMoreDetails = users.find(detail => detail.id == id)
        setDetail(moreMoreDetails)
    }, [id, users])
    return (
        <div>
            <div>
                <img className="" data-aos="fade-down" src={detail?.image_url} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 mt-5 text-center">
                <p data-aos="fade-up" className="limelight md:text-5xl text-3xl text-rose-500">{detail?.title}</p>
                <p data-aos="fade-down" className="p-5 text-black md:text-left text-center font-semibold">{detail?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;