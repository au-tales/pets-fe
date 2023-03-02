// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './shared/pages/home';
import FormsHeaders from "./shared/pages/forms";
import { LoginForm, SignupForm, ForgetPasswordForm } from "../src/shared/components/forms/forms";
import CardDetailsPage from "./shared/pages/CardDetailsPage";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} >
          </Route>
        </Routes>
        <Routes>
          <Route path="challenge" element={<FormsHeaders />} >
            <Route path="login" element={<LoginForm />} >
            </Route>
            <Route path="signup" element={<SignupForm />} >
            </Route>
            <Route path="forget-password" element={<ForgetPasswordForm />} >
            </Route>
          </Route>
        </Routes>
        <Routes>
          <Route path="/card/:id" element={<CardDetailsPage />} >
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
