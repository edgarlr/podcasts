export const getDurationInMSS = (s: number) => {
  return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + ~~s
}
