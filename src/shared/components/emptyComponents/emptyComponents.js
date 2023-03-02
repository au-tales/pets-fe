
function DummyLines(props) {
    return (
        <p class={`card-text placeholder-glow ${props.col} `} >
            <span class="placeholder col-12"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
    )
}

function DummyButtons(props) {
    return (
        <span class="btn btn-primary disabled placeholder"></span>
    )
}



function CardDetailsEmpty(props) {
    return (
        <>
            <div class="card mb-3 mt-2 border border-0 h-100">
                <div class="row g-0">
                    <div class="col-md-4">
                        {/* <Carousel></Carousel> */}
                        <DummyLines col="col-10" />
                        <DummyLines col="col-8" />
                        <DummyLines col="col-10" />
                        <DummyLines col="col-8" />
                    </div>
                    <div class="col-md-6">

                        <div class="card-body">
                            <DummyLines />
                            <DummyLines col="col-10" />
                            <DummyLines col="col-6" />
                            <DummyLines col="col-3" />
                        </div>
                    </div>
                    <div class="col-md-2 d-flex flex-column-reverse my-auto">
                        <div class="d-flex flex-column-reverse text-center placeholder-glow">
                            {/* <Button text="Chat now" btnVarient="btn-primary" /> */}
                            <DummyButtons />
                            <span>or</span>
                            <DummyButtons />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


function CardEmpty() {
    return (
        <div class="col" style={{ paddingRight: "10rem" }}>
            <div class="card w-100 border border-0 h-100">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="text-center">
                        <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" class="img-fluid"
                            style={{ width: "5.143rem", height: "5.143rem", objectFit: "cover", borderRadius: "3.571rem" }} />
                    </div>
                    <div class="card-body">
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        {/* <Rating /> */}


                    </div>
                </div>
                {/* </div> */}
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
            </div>
        </div>

    )
}

function OwnerDetailsEmpty() {
    return (
        <>
            <div class="col">
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        <CardEmpty></CardEmpty>
                    </div>
                    <div class="col">
                        <DummyLines />
                        <DummyLines />
                    </div>
                </div>
            </div>
        </>
    )

}


export { OwnerDetailsEmpty, DummyLines, CardEmpty, CardDetailsEmpty, DummyButtons }