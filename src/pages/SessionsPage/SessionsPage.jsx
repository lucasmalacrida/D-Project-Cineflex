import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Session from "../../components/SessionsPage/Session";
import Footer from "../../components/Footer";

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState({ title: '', posterURL: '', days: [] });

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => setSessions(res.data))
            .catch((err) => alert("Erro ao Carregar Sessões."))
    }, [idFilme]);

    return (
        <PageContainer>
            Selecione o horário

            <div>
                {sessions.days.map(s =>
                    <Session key={s.id} id={s.id} weekday={s.weekday} date={s.date} showtimes={s.showtimes} />
                )}
            </div>

            <Footer title={sessions.title} posterURL={sessions.posterURL} />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`;