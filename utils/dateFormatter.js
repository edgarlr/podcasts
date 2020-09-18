export const dateFormatter = (unformattedData) => {
  const date = new Date(unformattedData);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear()

  if (year < currentYear) {
    return `${day} ${monthsArr[month]} ${year}`
  }

  return `${day} ${monthsArr[month]}`
}