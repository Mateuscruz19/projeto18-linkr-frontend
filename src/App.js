import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./components/auth_components/Login.jsx";
import Register from "./components/auth_components/Register.jsx";
import Posts from "./pages/PostPages/PostPages.js";
import colors from "./utils/constants/colors.js";
import AuthProvider from "./contexts/AuthContext.js";
import UserProvider from "./contexts/UserContext.js";

export default function App() {
  return (
    <ThemeProvider theme={{ colors }}>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/post" element={<Posts />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
