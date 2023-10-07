// import { useLoaderData } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";
import SingleContribution from "./SingleContribution";
import Marquee from "react-fast-marquee";




const Contribution = () => {


    // const contributions = useLoaderData()
    const [contributions, setContributions] = useState([])
    useEffect(() => {
        fetch('contribution.json').then(res => res.json()).then(data => setContributions(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className="text-center mt-10 font-bold md:text-5xl text-2xl limelight text-rose-500"><span className="text-yellow-500">Our</span> Contribution</h1>
            </div>
            <Marquee pauseOnClick={true} speed={100}>
                <div className="grid grid-cols-4 md:mx-20 md:m-5 m-5 mx-10 gap-40">
                    {
                        contributions.map(contribution => <SingleContribution key={contribution.id} contribution={contribution}></SingleContribution>)
                    }
                </div></Marquee>

        </div>
    );
};

export default Contribution;