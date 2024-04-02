import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import TokenAuth from "./components/TokenAuth";
import "./App.css";
import { NowContext } from "./context";
import { useEffect, useState } from "react";
import socketIo from "socket.io-client";

import MainPage from "./components/MainPage";

const App = () => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(
      socketIo('/', {
        path: "/socket",
        transports: ["websocket"],
        auth: {
          token: "my-token",
        },
      })
    );
  }, []);
  return (
    <NowContext.Provider value={{ socket }}>
      <Router>
        <Routes>
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/token" element={<TokenAuth />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/*" element={<Navigate to="/signin" />} />
          {/* <Route path="/*" element={<Navigate to="/signin" />} /> */}
        </Routes>
      </Router>
    </NowContext.Provider>
  );
};

export default App;
