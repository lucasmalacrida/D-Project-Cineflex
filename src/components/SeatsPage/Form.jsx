import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Form({ selectedSeats, buyerName, setBuyerName, buyerCPF, setBuyerCPF }) {
    const navigate = useNavigate();
    function sendBuyerData(e) {
        e.preventDefault();

        const newOrder = {
            ids: selectedSeats.map(s => s.id),
            name: buyerName,
            cpf: buyerCPF
        };
        console.log(newOrder);

        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', newOrder)
            .then((res) => navigate("/sucesso"))
            .catch((err) => alert("Erro ao Reservar Assentos"));
    }

    return (
        <FormContainer onSubmit={sendBuyerData}>
            <label htmlFor="nome">Nome do Comprador:</label>
            <input
                id="nome"
                placeholder="Digite seu nome..."
                value={buyerName}
                onChange={e => setBuyerName(e.target.value)}
                data-test="client-name"
            />

            <label htmlFor="cpf">CPF do Comprador:</label>
            <input
                id="cpf"
                placeholder="Digite seu CPF..."
                value={buyerCPF}
                onChange={e => setBuyerCPF(e.target.value)}
                data-test="client-cpf"
            />

            <button type="submit" data-test="book-seat-btn">Reservar Assento(s)</button>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`;