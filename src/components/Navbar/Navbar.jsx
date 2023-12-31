import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Navbar({ movieInfo }) {
    let location = useLocation();
    const inSessions = location.pathname.includes("sessoes");
    const inSeats = location.pathname.includes("assentos");

    const navigate = useNavigate();
    function returnHome() {
        navigate("/");
    }
    function returnSessions() {
        navigate(`/sessoes/${movieInfo.session}`);
    }

    return (
        <>
            <NavContainer>
                <StyledArrowBack
                    sx={{ fontSize: "34px", color: "black", visibility: !(inSessions || inSeats)? "hidden" : "initial" }}
                    onClick={inSessions ? returnHome : inSeats ? returnSessions : null}
                />
                <Link to="/" >CINEFLEX</Link>
            </NavContainer>
        </>
    )

}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    left:0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`;

const StyledArrowBack = styled(ArrowBackIcon)`
    cursor: pointer;
    position: absolute;
    top: calc(50% - 17px);
    left: calc(50% - 160px);
`;