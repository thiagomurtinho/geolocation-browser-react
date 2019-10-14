import React, { useState, useEffect } from 'react';

function App() {
  const [location, setlocation] = useState({})

  useEffect(() => {
    const whatchId = navigator.geolocation.watchPosition(handlePositionRecived)

    return () => navigator.geolocation.clearWatch(handlePositionRecived)
  }, [])

  function handlePositionRecived({ coords }) {
    const { latitude, longitude } = coords

    setlocation({ latitude, longitude })
  }

  return (
    <>
      <h1>Location of your browser</h1>
      <p>Lartitude: <span>{location.latitude}</span></p>
      <p>Longitude: <span>{location.longitude}</span></p>
    </>
  );
}

export default App;
