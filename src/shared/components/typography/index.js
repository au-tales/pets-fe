function Heading1(props) {
    return (
        <div className={`d-flex mt-4 ${props.justifyContent} ${props.alignItems} ${props.margin} ${props.padding} `}>
            <h1 class="mb-0">{props.heading}</h1>
        </div>
    )
}

function Heading3(props) {
    return (
        <div className={`d-flex mt-4 ${props.justifyContent} ${props.alignItems} ${props.margin} ${props.padding} `}>
            <h3 class="mb-0">{props.heading}</h3>
        </div>
    )
}

function Heading2(props) {
    return (
        <div className={`d-flex mt-4 ${props.justifyContent} ${props.alignItems} ${props.margin} ${props.padding} `}>
            <h2 class="mb-0">{props.heading}</h2>
        </div>
    )
}

function SubHeading(props) {
    return (
        <div className={`d-flex ${props.justifyContent} ${props.alignItems} ${props.margin} ${props.padding} `}>
            <p class={`text-muted ${props.level}`}>{props.subheading}</p>
        </div>

    )
}


function SectionHeading1(props) {

    return (
        <>
            <div className={`d-flex mt-4 ${props.justifyContent} ${props.alignItems}`}>
                <h1 class="mb-0">{props.heading}</h1>
                <p class="text-muted h3">{props.subheading}</p>
                <a href="#" class="h6">{props.anchor_text}</a>
            </div>
        </>

    )
}

function SectionHeading2(props) {
    return (
        <div class='d-flex justify-content-between align-items-center mt-4'>
            <h2 class="mb-0">{props.heading}</h2>
            <p class="text-muted h4">{props.subheading}</p>
            <a href="#" class="h6">{props.anchor_text}</a>
        </div>
    )
}

function SectionHeading3(props) {
    return (
        <div class='d-flex justify-content-between align-items-center mt-4'>
            <div>
                <h3 class="">{props.heading}</h3>
                <p class="text-muted h5">{props.subheading}</p>
            </div>
            <a href="#" class="h6">{props.anchor_text}</a>
        </div>
    )
}




export { SubHeading, Heading1, Heading3, Heading2, SectionHeading1, SectionHeading2, SectionHeading3 };