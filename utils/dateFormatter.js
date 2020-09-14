export const dateFormatter = (dateString) => {
  const monthsEnglish = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const date = dateString.split('T')[0].split('-')
  const month = Number(date[1]) - 1
  const day = Number(date[2])
  const year = Number(date[0])
  
  if (year < 2020) {
    return`${day} ${monthsEnglish[month]} ${year}`
  }

  return `${day} ${monthsEnglish[month]}`
}

