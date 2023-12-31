import styled from "styled-components";

export default function Footer({ title, posterURL, children }) {
    return (
        <FooterContainer data-test="footer">
            <div>
                <img src={posterURL} alt="poster" />
            </div>
            <div>
                <p>{title}</p>

                {children}
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left:0;
    padding: 0 calc(50vw - 187.5px);
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;

    div:nth-child(1) {
        margin: 0px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        p {
            color: #293845;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            text-align: left;
        }
    }

    div {
        margin: 0;
    }
`;