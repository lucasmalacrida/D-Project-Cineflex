import styled from "styled-components";

import { color1Selected, color2Selected, color1Available, color2Available, color1Unavailable, color2Unavailable } from "../../colors/seatsColors";

export default function Seat({ id, name, isAvailable }) {
    return (
        <SeatItem kind={isAvailable? 'available' : 'unavailable'} data-test="seat">
            {name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
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
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`;