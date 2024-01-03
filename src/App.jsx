import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

export default function App() {
    const [movieInfo, setMovieInfo] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [buyers, setBuyers] = useState([]);

    const buyInfoProps = { movieInfo, setMovieInfo, selectedSeats, setSelectedSeats, buyers, setBuyers };

    return (
        <>
            <BrowserRouter>
                <Navbar movieInfo={movieInfo} />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                    <Route
                        path="/assentos/:idSessao"
                        element={<SeatsPage {...buyInfoProps} />}
                    />
                    <Route
                        path="/sucesso"
                        element={<SuccessPage {...buyInfoProps} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}
