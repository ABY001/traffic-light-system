import styled from 'styled-components';

const VerticalLine = styled.div`
    width: 200px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-right: 3px solid yellow;
    border-left: 3px solid yellow;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    background-color: #000;
    display: flex;
    align-items: center;
`;

export default VerticalLine