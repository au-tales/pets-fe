import '../buttons/style.css';
import Button from 'react-bootstrap/Button';





function PrimaryButton(props) {

    return (
        <>
            <Button
                variant="primary">{props?.text}
            </Button>{" "}
            {/* <Button variant="secondary" className="custom-btn">Secondary</Button>{' '}
            <Button variant="success" className="custom-btn">Success</Button>{' '}
            <Button variant="warning" className="custom-btn">Warning</Button>{' '}
            <Button variant="danger" className="custom-btn">Danger</Button>{' '}
            <Button variant="info" className="custom-btn">Info</Button>{' '}
            <Button variant="light" className="custom-btn">Light</Button>{' '}
            <Button variant="dark" className="custom-btn">Dark</Button>
            <Button variant="link" className="custom-btn">Link</Button> */}
        </>
    );
}

function SecoendyButton(props) {

    return (
        <>
            <Button style={{ backgroundColor: 'black' }}
                variant="primary"
                className="custom-btn">{props?.text}
            </Button>{" "}
            {/* <Button variant="secondary" className="custom-btn">Secondary</Button>{' '}
            <Button variant="success" className="custom-btn">Success</Button>{' '}
            <Button variant="warning" className="custom-btn">Warning</Button>{' '}
            <Button variant="danger" className="custom-btn">Danger</Button>{' '}
            <Button variant="info" className="custom-btn">Info</Button>{' '}
            <Button variant="light" className="custom-btn">Light</Button>{' '}
            <Button variant="dark" className="custom-btn">Dark</Button>
            <Button variant="link" className="custom-btn">Link</Button> */}
        </>
    );
}

export { SecoendyButton, PrimaryButton };
