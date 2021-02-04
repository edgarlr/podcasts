export const getDurationOnMin = (duration: number): string => {
  return `${Math.ceil(duration / 60)} min`
}
