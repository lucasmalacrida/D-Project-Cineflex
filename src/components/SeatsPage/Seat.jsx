import { useState } from "react";
import styled from "styled-components";

import { color1Selected, color2Selected, color1Available, color2Available, color1Unavailable, color2Unavailable } from "../../colors/seatsColors";

export default function Seat({ id, name, isAvailable, selectedSeats, setSelectedSeats, buyers, setBuyers }) {
    const [kind, setKind] = useState(isAvailable ? 'available' : 'unavailable');

    function selectSeat() {
        switch (kind) {
            case 'selected':
                setKind('available');
                setSelectedSeats([...selectedSeats].filter(s => s.id !== id));
                setBuyers([...buyers].filter(b => b.idAssento !== name));
                break;
            case 'available':
                setKind('selected');
                setSelectedSeats([...selectedSeats, { id, name }]);
                setBuyers([...buyers, { idAssento: name, nome: '', cpf: '' }]);
                break;
            case 'unavailable':
                alert("Esse assento não está disponível");
                break;
            default:
                break;
        }
    }

    return (
        <SeatItem
            kind={kind}
            data-test="seat"
            onClick={() => selectSeat()}
        >
            {name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
    ${props => {
        switch (props.kind) {
            case 'selected':
                return `background-color: ${color1Selected};
                        border: 1px solid ${color2Selected};
                        cursor: pointer;`;
            case 'available':
                return `background-color: ${color1Available};
                        border: 1px solid ${color2Available};
                        cursor: pointer;`;
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