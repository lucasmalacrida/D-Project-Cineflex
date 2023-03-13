import styled from "styled-components";

import { color1Selected, color2Selected, color1Available, color2Available, color1Unavailable, color2Unavailable } from "../../colors/seatsColors";

export default function Caption() {
    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle kind={'selected'} />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle kind={'available'} />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle kind={'unavailable'} />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    )
}

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`;

const CaptionCircle = styled.div`
    ${props => {
        switch (props.kind) {
            case 'selected':
                return `background-color: ${color1Selected};
                        border: 1px solid ${color2Selected};`;
            case 'available':
                return `background-color: ${color1Available};
                        border: 1px solid ${color2Available};`;
            case 'unavailable':
                return `background-color: ${color1Unavailable};
                        border: 1px solid ${color2Unavailable};`;
            default:
                return '';
        }
    }}
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`;

const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`;