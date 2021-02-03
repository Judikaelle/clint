export const formatDate = (timestamp: number) => {
  const date: Date = new Date(timestamp * 1000)
  /* full date */
  const fullDate: string = String(date).slice(3, 15);
  /* hours */
  let hours: number | string = date.getHours();
  hours = hours >= 10 ? hours : `0${hours}`
  /* minutes */
  let minutes: number | string = date.getMinutes();
  minutes = minutes >= 10 ? minutes : `${minutes}0`

  return {
    fullDate, hours, minutes
  }
}

export const formatTemperature = (temp: number) => {
  return Math.round(temp) + '°C'
}
