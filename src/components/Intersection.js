import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './Container';
import TrafficLight from './TrafficLight';
import Button from './Button';
import Plus from './Plus';
import HorizontalLine from './HorizontalLine';
import VerticalLine from './VerticalLine';
import Controls from './Controls';

const TitleA = styled.div`
  position: absolute;
  top: 2%;
  left: 26%;
  font-size: 1.7rem;
  font-weight: 700;
`;

const TitleB = styled.div`
  position: absolute;
  right: 0;
  font-size: 1.7rem;
  font-weight: 700;
  top: 34%;
`;

const Intersection = () => {
  // Constants for the traffic light timings
  const ONE_CYCLE_DURATION = 10; // seconds
  const HALF_CYCLE_DURATION = 5; // seconds

  const [streetALight, setStreetALight] = useState('green');
  const [streetBLight, setStreetBLight] = useState('red');
  const [timerIds, setTimerIds] = useState([]);
  const [cycle, setcycle] = useState(0);

  useEffect(() => {
    setcycle(cycle + 1)
  }, [])

  const switchLights = () => {
    // Cleanup the timeouts before cycle starts
    timerIds.forEach((timerId) => clearTimeout(timerId));

    // Switch lights for Street A and Street B
    setStreetALight('green');
    setStreetBLight('red');

    // After one cycle duration, show yellow lights for both streets
    const timer1 = setTimeout(() => {
      setStreetALight('yellow');
      setStreetBLight('yellow');
    }, ONE_CYCLE_DURATION * 1000);

    // After half cycle duration, switch lights again
    const timer2 = setTimeout(() => {
      setStreetALight('red');
      setStreetBLight('green');
    }, (ONE_CYCLE_DURATION + HALF_CYCLE_DURATION) * 1000);

    // After one cycle duration, show yellow lights for both streets
    const timer3 = setTimeout(() => {
      setStreetALight('yellow');
      setStreetBLight('yellow');
    }, (ONE_CYCLE_DURATION * 2 + HALF_CYCLE_DURATION) * 1000);

    // After half cycle duration, switch lights again by starting all over
    const timer4 = setTimeout(() => {
      setcycle(cycle + 1)
    }, (ONE_CYCLE_DURATION * 2 + HALF_CYCLE_DURATION * 2) * 1000);

    // Save the timeout IDs in state
    setTimerIds([timer1, timer2, timer3, timer4]);
  };

  useEffect(() => {
    // Start the traffic light cycle again
    switchLights()
  }, [cycle]);

  const handleReset = () => {
    // Reset lights to initial state
    setcycle(0)
  };

  return (
    <Container>
      <Plus>
        <HorizontalLine>
          <TrafficLight activeColor={streetBLight} />
          <TrafficLight activeColor={streetBLight} />
        </HorizontalLine>
        <VerticalLine>
          <TrafficLight activeColor={streetALight} />
          <Controls>
            <Button onClick={handleReset}>Start</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Controls>
          <TrafficLight activeColor={streetALight} />
        </VerticalLine>
        <TitleA>Street A</TitleA>
        <TitleB>Street B</TitleB>
      </Plus>
    </Container>
  );
};


export default Intersection;
