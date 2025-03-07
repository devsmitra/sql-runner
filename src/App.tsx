import "./App.css";
import { ErrorPage } from "./components/Error";
import { Toast } from "./components/Toast";
import { GlobalContextProvider } from "./contexts/globalContext";
import AppRouter from "./routes";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <GlobalContextProvider>
        <AppRouter />
        <Toast />
      </GlobalContextProvider>
    </ErrorBoundary>
  );
}

export default App;
