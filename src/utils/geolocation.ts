export const getCoords = async () => {
  const position: GeolocationPosition = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude,
  };
};
