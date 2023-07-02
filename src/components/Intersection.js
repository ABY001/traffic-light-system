import React, { useState, useEffect } from 'react';
import Container from './Container';
import TrafficLight from './TrafficLight';
import Button from './Button';

const Intersection = () => {
  // Constants for the traffic light timings
  const ONE_CYCLE_DURATION = 10; // seconds
  const HALF_CYCLE_DURATION = 5; // seconds

  const [streetALight, setStreetALight] = useState('green');
  const [streetBLight, setStreetBLight] = useState('red');

  useEffect(() => {
    // Start the traffic light cycle when the component mounts
    const timer = setInterval(switchLights, ONE_CYCLE_DURATION * 1000);
    return () => clearInterval(timer);
  }, []);

  const switchLights = () => {
    // Switch lights for Street A and Street B
    setStreetALight('green');
    setStreetBLight('red');

    // After one cycle duration, show yellow lights for both streets
    setTimeout(() => {
      setStreetALight('yellow');
      setStreetBLight('yellow');
    }, ONE_CYCLE_DURATION * 1000);

    // After half cycle duration, switch lights again
    setTimeout(() => {
      setStreetALight('red');
      setStreetBLight('green');
    }, (ONE_CYCLE_DURATION + HALF_CYCLE_DURATION) * 1000);
  };

  const handleReset = () => {
    // Reset lights to initial state
    setStreetALight('green');
    setStreetBLight('red');
  };

  return (
    <Container>
        <TrafficLight activeColor={streetALight} />
        <TrafficLight activeColor={streetBLight} />
        <TrafficLight activeColor={streetALight} />
        <TrafficLight activeColor={streetBLight} />
      <Button onClick={handleReset}>Reset</Button>
    </Container>
  );
};


export default Intersection;
