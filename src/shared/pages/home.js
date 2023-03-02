

import Banner from '../components/Banner';
import { SectionHeading3 } from '../components/typography';
import { Button, Card, Catagoery } from '../components/atoms';
import { Header } from '../components/navBar/index';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';



function Home() {

    const [showCardData, setCardData] = useState([]);


    useEffect(() => {
        fetchCardData()
    }, []);


    async function fetchCardData() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/pets")
            console.log(response.status)
            if (response.status === 200) {
                setCardData(response.data)
            }

        } catch (error) { console.log("error1---------->", error) }
    }



    return (
        <>
            <Header />
            <Banner />
            <div className="container">
                <SectionHeading3 heading="Top Catagories" anchor_text="See more"></SectionHeading3>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                    <Catagoery></Catagoery>
                </div>
            </div >

            <div className="container">
                <SectionHeading3 heading="Latest Birds" anchor_text="See more"></SectionHeading3>
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    {showCardData.map((data) => (
                        < Card title={data.title} discription={data.discription} price={data.price} id={data.id} />
                    ))}

                </div>
            </div>
            <div className="container">
                <SectionHeading3 heading="Recommended pets" anchor_text="See more"></SectionHeading3>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Button text="This is a text" btnVarient="btn-primary"></Button>
            </div>

        </>
    )
}


export default Home