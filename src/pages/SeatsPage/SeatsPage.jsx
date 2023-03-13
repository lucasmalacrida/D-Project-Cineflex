import styled from "styled-components";

import Seat from "../../components/SeatsPage/Seat";
import Caption from "../../components/SeatsPage/Caption";
import Form from "../../components/SeatsPage/Form";
import Footer from "../../components/Footer";

import { color1Selected, color2Selected, color1Available, color2Available, color1Unavailable, color2Unavailable } from "../../colors/seatsColors";

const seats = [
    {
        "id": 1,
        "name": "01",
        "isAvailable": true,
    },
    {
        "id": 2,
        "name": "02",
        "isAvailable": true,
    },
    {
        "id": 3,
        "name": "03",
        "isAvailable": true,
    },
    {
        "id": 4,
        "name": "04",
        "isAvailable": false,
    },
    {
        "id": 5,
        "name": "05",
        "isAvailable": false,
    },
    {
        "id": 6,
        "name": "06",
        "isAvailable": false,
    },
    {
        "id": 7,
        "name": "07",
        "isAvailable": false,
    },
    {
        "id": 8,
        "name": "08",
        "isAvailable": true,
    },
    {
        "id": 9,
        "name": "09",
        "isAvailable": true,
    },
    {
        "id": 10,
        "name": "10",
        "isAvailable": true,
    }
];

export default function SeatsPage() {

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seats.map(s => <Seat key={s.id} name={s.name} isAvailable={s.isAvailable} />)}
            </SeatsContainer>

            <Caption 
                color1Selected={color1Selected}
                color2Selected={color2Selected}
                color1Available={color1Available}
                color2Available={color2Available}
                color1Unavailable={color1Unavailable}
                color2Unavailable={color2Unavailable}
            />

            <Form />

            <Footer session={{ date: 'Sexta', time: '16h00' }} />
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