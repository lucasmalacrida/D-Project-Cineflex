import styled from "styled-components";

import Session from "../../components/SessionsPage/Session";
import Footer from "../../components/Footer";

const sessions = [
    {
        "id": 24062021,
        "weekday": "Quinta-feira",
        "date": "24/06/2021",
        "showtimes": [
            {
                "name": "15:00",
                "id": 1
            },
            {
                "name": "19:00",
                "id": 2
            }
        ]
    },
    {
        "id": 25062021,
        "weekday": "Sexta-feira",
        "date": "25/06/2021",
        "showtimes": [
            {
                "name": "16:00",
                "id": 3
            },
            {
                "name": "20:00",
                "id": 4
            }
        ]
    }
];

export default function SessionsPage() {

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessions.map( s => 
                    <Session key={s.id} id={s.id} weekday={s.weekday} date={s.date} showtimes={s.showtimes} />
                )}
            </div>

            <Footer session={{}}/>
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