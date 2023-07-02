import React from 'react';
import styled from 'styled-components';
import Light from './Light';
import TrafficLightContainer from './TrafficLightContainer';

const GreenLight = styled(Light)`
  background-color: ${props => (props.active ? 'lime' : 'gray')};
`;

const YellowLight = styled(Light)`
  background-color: ${props => (props.active ? 'yellow' : 'gray')};
`;

const RedLight = styled(Light)`
  background-color: ${props => (props.active ? 'red' : 'gray')};
`;

// TrafficLight component to render an individual traffic light
const TrafficLight = ({ activeColor }) => {
    return (
        <TrafficLightContainer>
            {activeColor === 'red' ? <RedLight active /> : <RedLight />}
            {activeColor === 'yellow' ? <YellowLight active /> : <YellowLight />}
            {activeColor === 'green' ? <GreenLight active /> : <GreenLight />}
        </TrafficLightContainer>
    );
};

export default TrafficLight;