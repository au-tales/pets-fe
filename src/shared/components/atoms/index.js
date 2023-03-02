import Thumbnainls from "../../../media/thumbnails/Thumbnail.png"
import { SectionHeading3, SubHeading, Heading3, Heading2 } from "../typography"
import CardImage from "../../../media/thumbnails/image_4_3.png"
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { OwnerDetailsEmpty, DummyLines, CardEmpty, CardDetailsEmpty, DummyButtons } from "../emptyComponents/emptyComponents"



function SearchBar() {
    return (
        <div class="w-75">
            <div class="input-group w-100">
                <input type="text" class="form-control w-50" placeholder="Find your next pet" aria-label="Text input with dropdown button"></input>
                <div class="btn-group w-50">
                    <button class="btn btn-light rounded-0 dropdown-toggle w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">Area</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <button class="btn btn-light rounded-0 dropdown-toggle w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">Catagoery</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <button class="btn btn-primary w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">Start now</button>

                </div>

            </div>

        </div>

    )
}

function Rating() {
    return (
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
            </svg>

        </span>
    )
}


function RatingPricing() {
    return (
        <div class="d-flex justify-content-between align-items-center">
            <Rating />
            <a href="#" class="ms-2"> 2235678</a>
        </div>
    )
}

function Button(props) {
    return (
        <button type="button" className={`btn ${props.btnVarient}`} aria-expanded="false">{props.text}</button>
    )
}


function Card(props) {
    const navigate = useNavigate()

    return (
        < div class="col" >
            <Link to={`/card/${props.id}`} style={{ textDecoration: 'none' }}>
                <div class="card h-100" style={{ width: "100%", }}>
                    < img src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column justify-content-between" >
                        <h5 class="card-title">{props.title || "Card Title"} </h5>
                        <p class="card-text">{props.discription || "this is discription"}</p>
                        <div><RatingPricing className="align-self-end"></RatingPricing></div>
                    </div>

                    <div class="card-body d-flex justify-content-between align-items-center" style={{ maxHeight: "3.5rem" }}>
                        <h5 class="mb-0">Rs. {props.price || "300"} <small class="text-muted"> <del>400</del></small></h5>
                        <small class="text-muted">Lahore. 2 min ago</small>
                    </div>
                </div >
            </Link>


        </div >

    )
}

function ListwithIcons(props) {
    return (
        <div class="d-flex justify-content-start align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <div class="ms-2">{props.text}</div>
        </div>
    )
}

function Location(props) {
    return (

        <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span class="ms-2">{props.value}</span>
        </div>
    )
}


function Carousel() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <div class="carousel-background d-flex align-items-center justify-content-between" style={{ marginTop: "1.5%" }}>
                <button class="btn btn-link carousel-btn carousel-btn-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="bi bi-arrow-left-circle" style={{ fontSize: 20 }}></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <div>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active mx-2 border-0 p-0" aria-current="true" aria-label="Slide 1">
                        <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..." style={{ width: "4.5rem" }} class="img-fluid" />
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="mx-2 border-0 p-0" aria-label="Slide 2">
                        <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..." style={{ width: "4.5rem" }} class="img-fluid" />
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="mx-2 border-0 p-0" aria-label="Slide 3">
                        <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..." style={{ width: "4.5rem" }} class="img-fluid" />
                    </button>
                </div>
                <button class="btn btn-link carousel-btn carousel-btn-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="bi bi-arrow-right-circle" style={{ fontSize: 20 }}></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

function GoogleMap() {
    return (
        <>
            <div class="row" style={{ height: "35.714rem" }}>
                <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    allowfullscreen></iframe>
            </div>
        </>
    )
}



function ReviewCard() {
    return (
        <div class="col" style={{ paddingRight: "10rem" }}>
            <div class="card w-100 border border-0 h-100">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="text-center">
                        <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" class="img-fluid"
                            style={{ width: "5.143rem", height: "5.143rem", objectFit: "cover", borderRadius: "3.571rem" }} />
                    </div>
                    <div class="card-body placeholder-glow">
                        <h5 class="card-title qcont">This is a long title . </h5>
                        <h6 class="card-subtitle mb-2 text-muted qcont"><small class="text-muted">Last updated 3 mins ago</small></h6>
                        <Rating />


                    </div>
                </div>
                {/* </div> */}
                <p class="card-text my-2 qcont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in varius lobortis, purus nisi dictum sapien, a malesuada ipsum turpis vitae lorem.</p>
            </div>
        </div>
        // </div >
    )
}


function OwnerDetails() {
    return (
        <div class="col">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col" style={{ paddingRight: "10rem" }}>
                    <div class="card w-100 border border-0 h-100">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="text-center">
                                <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" class="img-fluid"
                                    style={{ width: "5.143rem", height: "5.143rem", objectFit: "cover", borderRadius: "3.571rem" }} />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">This is a long title</h3>
                                <h6 class="card-subtitle mb-2 text-muted"><small class="text-muted">Last updated 3 mins ago</small></h6>
                                <div class="d-flex">
                                    <RatingPricing></RatingPricing>
                                </div>
                            </div>

                        </div>
                        <p class="card-text my-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in varius lobortis, purus nisi dictum sapien, a malesuada ipsum turpis vitae lorem.</p>
                    </div>

                </div>
                <div class="col">
                    <div class="d-flex flex-column-reverse text-center">
                        <Button text="Chat now" btnVarient="btn-primary" />
                        <span>or</span>
                        <Button text="Call now" btnVarient="btn-secondary" />
                    </div>
                </div>

            </div>


        </div>
    )
}





function CardDetails(props) {
    return (

        <>
            <Heading3 heading="Pet Details" margin="my-4" ></Heading3>

            {
                props.loader ? <CardDetailsEmpty /> :
                    <div class="card mb-3 mt-2 border border-0 h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Carousel></Carousel>
                            </div>

                            <div class="col-md-6 ">
                                <div class="card-body d-flex flex-column justify-content-between flex-wrap h-100 py-0">
                                    <div>
                                        <h3 class="card-title">{props.title}</h3>
                                        <h6 class="card-subtitle mb-2 text-muted qcont"><small class="text-muted">last updated 3 mins ago</small></h6>
                                        <div class="d-flex w-5 justify-content-between align-items-center">
                                            <RatingPricing /> <Location value={props.location} />
                                        </div>
                                        <p class="card-text mt-4 qcont">{props.discription}</p>
                                        <Heading2 heading={`Rs ${props.price}/-`} level="h3"></Heading2>
                                    </div>

                                </div>

                            </div>
                            <div class="col-md-2 d-flex flex-column-reverse my-auto">
                                <div class="d-flex flex-column-reverse text-center">
                                    <Button text="Chat now" btnVarient="btn-primary" />
                                    <span>or</span>
                                    <Button text="Call now" btnVarient="btn-secondary" />
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <hr class="my-5" ></hr>

            <Heading3 heading="Pet Attributes" margin="my-4" ></Heading3>
            <div class="row row-cols-1 row-cols-md-5 g-4">
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>
                <ListwithIcons text="This is attribute"></ListwithIcons>

            </div>
            <hr class="my-5" ></hr>

            <Heading3 heading="Location" margin="my-4" ></Heading3>
            <GoogleMap />

            <hr class="my-5" ></hr>

            <Heading3 heading="Reviews" margin="my-4"></Heading3>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <CardEmpty></CardEmpty>

            </div>

            <hr class="my-5" ></hr>
            <div class="my-5">
                <Heading3 heading="Pet owner" margin="my-4"></Heading3>
                <div class="row row-cols-1 row-cols-md-1 g-4">
                    <OwnerDetails></OwnerDetails>

                </div>
            </div>

        </>
    )
}

function Catagoery() {
    return (
        <div class="col">
            <div class="card w-100 text-center border-0" >
                <div class="card-body">
                    <div>
                        <div class="position-relative">
                            <img src={Thumbnainls} alt="your-image-description" />
                            <span class="position-absolute  translate-middle badge rounded-circle bg-danger text-bg-primary">
                                90
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>

                    </div>
                    <p className="qcont"> lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>

        </div>


    )
}

export { Button, Catagoery, Card, SearchBar, CardDetails };

