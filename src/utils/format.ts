export const formatDate = (date: Date) => {
  let fDate = String(date)
  fDate = fDate.slice(3, 15)
  return fDate
}

export const formatTemperature = (temp: number) => {
  return Math.round(temp) + '°C'
}
