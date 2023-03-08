import { ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// locals
import Routes from "./routes";
import { CMUITheme } from "./styles";

function App() {
    return (
        <ThemeProvider theme={CMUITheme}>
            <BrowserRouter>
                <ToastContainer />

                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
