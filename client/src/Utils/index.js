export const getDate = (month, day, year) => {
    let d = new Date(`${month}-${day}-${year}`)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    let date = `${mo}-${da}-${ye}`
    return date
}

export const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase()

export const age = (birthday) => {
    birthday = new Date(birthday)
    return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0)
}