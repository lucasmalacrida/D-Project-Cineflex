import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Seat from "../../components/SeatsPage/Seat";
import Caption from "../../components/SeatsPage/Caption";
import Form from "../../components/SeatsPage/Form";
import Footer from "../../components/Footer";

export default function SeatsPage({ movieInfo, setMovieInfo, selectedSeats, setSelectedSeats, buyers, setBuyers }) {
    const { idSessao } = useParams();
    const [seatsObj, setSeatsObj] = useState({ movie: { title: '', posterURL: '' }, day: { weekday: '', date: '' }, seats: [] });

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => {
                const response = res.data;
                const newMovieInfo = { title: response.movie.title, day: response.day.date, time: response.name, session: response.movie.id };
                setSeatsObj(response);
                setMovieInfo(newMovieInfo);
            })
            .catch((err) => alert("Erro ao Carregar Assentos."))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idSessao]);

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seatsObj.seats.map(s =>
                    <Seat
                        key={s.id}
                        id={s.id}
                        name={s.name}
                        isAvailable={s.isAvailable}
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}
                        buyers={buyers}
                        setBuyers={setBuyers}
                    />)}
            </SeatsContainer>
            <Caption />

            <Form
                selectedSeats={selectedSeats}
                buyers={buyers}
                setBuyers={setBuyers}
            />

            <Footer title={seatsObj.movie.title} posterURL={seatsObj.movie.posterURL} >
                <p>{`${seatsObj.day.weekday} - ${seatsObj.day.date}`}</p>
            </Footer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`;

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;