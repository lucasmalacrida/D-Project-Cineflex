import styled from "styled-components";
import Movie from "../../components/HomePage/Movie";

const movies = [
	{
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    }
];

export default function HomePage() {
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map( m => <Movie
                        key={m.key}
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
    padding: 10px;
`;