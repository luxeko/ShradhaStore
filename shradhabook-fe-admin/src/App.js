import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./pages/router";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <Router/>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </BrowserRouter>
    );
}

export default App;
