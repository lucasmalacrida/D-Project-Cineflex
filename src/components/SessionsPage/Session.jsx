import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ id, weekday, date, showtimes }) {
    return (
        <SessionContainer data-test="movie-day">
            {weekday} - {date}
            <ButtonsContainer data-test="showtime">
                {showtimes.map( st => 
                    <Link key={st.id} to={`/assentos/${st.id}`}><button>{st.name}</button></Link>
                )}
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`;