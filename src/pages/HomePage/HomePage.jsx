import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Movie from "../../components/HomePage/Movie";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
            .then((res) => setMovies(res.data))
            .catch((err) => alert("Erro ao Carregar Filmes."))
    }, []);

    return (
        <PageContainer>
            <p>Selecione o filme</p>

            <ListContainer>
                {movies.map(m => <Movie
                    key={m.id}
                    id={m.id}
                    title={m.title}
                    posterURL={m.posterURL}
                    overview={m.overview}
                    releaseDate={m.releaseDate}
                />)}
            </ListContainer>

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
    padding-top: 70px;
`;

const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px 0px;

    @media (min-width: 540px) {
        width: 495px;
    }

    @media (min-width: 705px) {
        width: 660px;
    }

    @media (min-width: 870px) {
        width: 825px;
    }

    @media (min-width: 1035px) {
        width: 990px;
    }

    @media (min-width: 1200px) {
        width: 1155px;
    }
`;