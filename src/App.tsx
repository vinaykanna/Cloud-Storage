import "./styles/app.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Storage from "./pages/storage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmDialogProvider from "./context/ConfirmDialog";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ConfirmDialogProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Storage />} />
                </Routes>
              </Router>
            </ConfirmDialogProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
