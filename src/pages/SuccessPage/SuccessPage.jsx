import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage({ movieInfo, setMovieInfo, selectedSeats, setSelectedSeats, buyers, setBuyers }) {
    function resetOrder() {
        setMovieInfo({});
        setSelectedSeats([]);
        setBuyers([]);
        navigate("/");
    }

    const navigate = useNavigate();
    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{movieInfo.title}</p>
                <p>{movieInfo.day} - {movieInfo.time}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {selectedSeats.map(s => <p key={s.id}>Assento {s.name}</p>)}
            </TextContainer>

            {buyers.map(buyer =>
                <TextContainer key={buyer.idAssento} data-test="client-info">
                    <strong><p>Comprador do Assento {buyer.idAssento}</p></strong>
                    <p>Nome: {buyer.nome}</p>
                    <p>CPF: {buyer.cpf}</p>
                </TextContainer>
            )}

            <button onClick={resetOrder} data-test="go-home-btn">Voltar para Home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`;

const TextContainer = styled.div`
    width: 335px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`;