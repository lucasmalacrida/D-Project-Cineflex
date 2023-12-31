import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Session({ id, weekday, date, showtimes }) {
    const navigate = useNavigate();
    return (
        <SessionContainer data-test="movie-day">
            {weekday} - {date}
            <ButtonsContainer>
                {showtimes.map(st =>
                    <button key={st.id} onClick={() => navigate(`/assentos/${st.id}`)} data-test="showtime">{st.name}</button>
                )}
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    margin: 0 auto;
    max-width: 325px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 24px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
`;