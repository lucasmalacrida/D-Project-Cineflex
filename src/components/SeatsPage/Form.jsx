import { useNavigate } from "react-router-dom";
import validateCPF from "../../helpers/validateCPF";
import axios from "axios";
import styled from "styled-components";

export default function Form({ selectedSeats, buyers, setBuyers }) {
    const navigate = useNavigate();
    function sendBuyerData(e) {
        e.preventDefault();

        if (buyers.length === 0) return alert("Nenhum assento selecionado!");
        if (buyers.find(x => x.nome === '' || x.cpf === '')) return alert("Todos os campos são obrigatórios!");
        if (!buyers.every(buyer => validateCPF(buyer.cpf))) return alert("Todos os CPFs devem ser válidos!");

        const newOrder = {
            ids: selectedSeats.map(s => s.id),
            compradores: buyers
        };

        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', newOrder)
            .then((res) => navigate("/sucesso"))
            .catch((err) => alert("Erro ao Reservar Assentos"));
    }

    return (
        <FormContainer onSubmit={sendBuyerData}>
            {buyers.map((buyer, i) =>
                <BoxBuyer key={buyer.idAssento}>
                    <label htmlFor="nome">Nome do Comprador {buyer.idAssento} :</label>
                    <input
                        id="nome"
                        placeholder="Digite seu nome..."
                        value={buyers[i].nome}
                        onChange={e => {
                            const changedBuyer = { idAssento: buyers[i].idAssento, nome: e.target.value, cpf: buyers[i].cpf };
                            const changedBuyers = [...buyers];
                            changedBuyers[i] = changedBuyer;
                            setBuyers(changedBuyers);
                        }}
                        data-test="client-name"
                    />

                    <label htmlFor="cpf">CPF do Comprador {buyer.idAssento} :</label>
                    <input
                        id="cpf"
                        type="number"
                        placeholder="Digite seu CPF..."
                        value={buyer.cpf}
                        onKeyDown={e => { if (e.key === '.' || e.key === ',' || e.key === '+' || e.key === "-" || e.key === "e") e.preventDefault() }}
                        onChange={e => {
                            const changedBuyer = { idAssento: buyers[i].idAssento, nome: buyers[i].nome, cpf: e.target.value };
                            const changedBuyers = [...buyers];
                            changedBuyers[i] = changedBuyer;
                            setBuyers(changedBuyers);
                        }}
                        data-test="client-cpf"
                    />
                </BoxBuyer>
            )}

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

    @media (min-width: 440px) {
        width: 400px;
        input {
        width: 380px;
    }
    }
`;

const BoxBuyer = styled.div`
    border: 1px solid silver;
    border-radius: 10px;
    padding: 20px 10px 0px;
    margin: 10px 0;
`;