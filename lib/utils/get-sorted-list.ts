export const getSortedList = <T>(
  list: T[],
  key: string,
  inverse = false
): T[] => {
  if (inverse) {
    return [...list].sort((a, b) =>
      a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
    )
  }
  if (key === 'counts') {
    return [...list].sort((a, b) =>
      a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0
    )
  }
  return [...list].sort((a, b) =>
    a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
  )
}
