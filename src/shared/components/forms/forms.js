import { Heading1, SubHeading } from "../typography";
import { Link } from "react-router-dom";
import GoogleLogo from '../../../media/logo/google_logo.png';



function LoginForm() {
    return (
        <div style={{
            marginTop: "5%"
        }} >
            <Heading1 heading="Sign in" justifyContent="justify-content-center" />
            <SubHeading subheading="Signin with your GoPet Account" justifyContent="justify-content-center" level="h4" margin="mt-2" />
            <div className={`container mt-4 justify-content-center w-25`}>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                        <div id="emailHelp" class="form-text">Vlidation erros will come here.</div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <Link to="/challenge/forget-password">
                            Forget password
                        </Link>
                    </div>


                </form>
                <div class="d-grid gap-2 d-md-flex justify-content-between">
                    <Link to="/challenge/signup">
                        Create account
                    </Link>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
                <p class="mt-4 text-center">or connect with Social Account
                </p>
                <Link to="/google_url" style={{ display: "flex" }} class="text-center justify-content-center">
                    <img src={GoogleLogo} alt="Logo" class="d-inline-block align-text-top me-2" />
                </Link>

            </div>

        </div >

    )
}

function ForgetPasswordForm() {
    return (
        <>
            <div style={{
                marginTop: "5%"
            }} >
                <Heading1 heading="Forget your account password" justifyContent="justify-content-center" />
                <SubHeading subheading="You can always reset your password here" justifyContent="justify-content-center" level="h4" margin="mt-2" />
                <div className={`container mt-4 justify-content-center w-25`}>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">Send link to your email for password rest.</div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-between">
                            <Link to="/challenge/login" style={{ display: "flex", alignItems: 'center', }} >
                                Login to your account
                            </Link>
                            <button type="submit" class="btn btn-primary">Send email</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


function SignupForm() {
    return (
        <div style={{
            marginTop: "5%"
        }}>
            <Heading1 heading="Sign up" justifyContent="justify-content-center" />
            <SubHeading subheading="Signup with your GoPet Account" justifyContent="justify-content-center" level="h4" margin="mt-2" />
            <div className={`container mt-4 justify-content-center w-25`}>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                        <div id="emailHelp" class="form-text">Vlidation erros will come here.</div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                        <Link to="/challenge/login" style={{ display: "flex", alignItems: 'center', }} >
                            Already have a account
                        </Link>
                        <button type="submit" class="btn btn-primary">Sign up</button>
                    </div>
                </form>
                <p class="mt-4 text-center">or connect with Social Account
                </p>
                <Link to="/google_url" style={{ display: "flex", alignItems: 'center', }} class="text-center justify-content-center">
                    <img src={GoogleLogo} alt="Logo" class="d-inline-block align-text-top me-2" />
                </Link>



            </div>



        </div>

    )
}



export { LoginForm, SignupForm, ForgetPasswordForm }