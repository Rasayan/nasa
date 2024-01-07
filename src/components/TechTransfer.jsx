import "../../style/TechTransfer.css"

import DOMPurify from 'dompurify';
import { useEffect, useState } from "react"

function Tech() {

    const [techData, setTechData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const url = "https://api.nasa.gov/techtransfer/patent/?engine&api_key=3tbr9KwmPhxUSJjGde5841lHS3eaatctk8O9Fqxj";

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setTechData(json.results);
                setLoading(false);
                console.log(techData);
            } catch(error) {
                console.log("Error : ", error);
            }
        };

        fetchData();
    }, [])
    return (
        <section className="TechT">
            <h2>Here are our different Technical Revolutions over the Years</h2>
            {loading ? (
            <div className="loading-screen">
                Loading...
            </div>
            ) : (techData.map((item, index) => (
                <div key={index} className="techDiv">
                    <div className="techImage"> 
                        <img src={item[10]} alt={`Tech Image ${index}`} style={{ borderRadius: '10px' }} />
                    </div>

                    <div className="techDescrip">
                        <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item[2]) }} />
                        
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item[3]) }} />
                    </div>
                </div>
            )))}
        </section>
    )
}

export default Tech