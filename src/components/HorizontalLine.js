import styled from 'styled-components';

const HorizontalLine = styled.div`
    width: 100%;
    height: 200px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-top: 3px solid yellow;
    border-bottom: 3px solid yellow;
    justify-content: space-around;
    position: absolute;
    background-color: #000;
    display: flex;
    align-items: center;
`;

export default HorizontalLine