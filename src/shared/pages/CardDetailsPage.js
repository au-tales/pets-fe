import { CardDetails } from "../components/atoms";
import { Header } from "../components/navBar";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from "react-router-dom";


function CardDetailsPage() {

    const [showCardDetailsData, setCardDetailData] = useState([]);

    const [showLoader, setShowLoader] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetchCardDetailData()
    }, []);


    async function fetchCardDetailData() {
        try {
            setShowLoader(true)
            const response = await axios.get(`http://127.0.0.1:8000/pets/${id}`)
            console.log(response.status)
            if (response.status === 200) {
                setShowLoader(false)
                setCardDetailData(response.data)
            }
            setShowLoader(false)

            console.log("showCardDetailsData---------->", showCardDetailsData)

        } catch (error) { console.log("error1---------->", error) }
    }


    return (
        <>
            <Header />
            <div class="container">
                <CardDetails
                    title={showCardDetailsData.title}
                    discription={showCardDetailsData.discription}
                    location={showCardDetailsData.location}
                    price={showCardDetailsData.price}
                    loader={showLoader}
                />
            </div>
        </>

    )
}

export default CardDetailsPage;