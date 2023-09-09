import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Redux } from "./Components/Redux";
import { store } from "./Components/store";
export const siteName = createContext();
const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });
  const [name, setName] = useState("Hossein Farahkordmahaleh");
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <siteName.Provider value={{ name, setName }}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/redux" element={<Redux/>} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </siteName.Provider>
      </QueryClientProvider>
      </Provider>
  );
};

export default App;
