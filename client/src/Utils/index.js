export const getDate = (month, day, year) => {
    let d = new Date(`${month}-${day}-${year}`)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let date = `${da}-${mo}-${ye}`
    return date
}