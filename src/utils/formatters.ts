export const formatDescription = (description: string) => {
    const arrayDescription = description.split(" ");
    if (arrayDescription.length < 160) return description
    
    const formattedDescription = `${arrayDescription.slice(0, 160).join(" ")}...`
    return formattedDescription
}

export const formatDate = (date: string) => {
    const localDate = new Date(date).toLocaleDateString()
    const dateArray = localDate.split("/").map((item) => +item > 10 ? item : `0${item}`)
    const formattedDate = dateArray.join("/")
    return formattedDate
}

export const formatParamsDate = (date:string) => {
    const currentDate = new Date(date).toLocaleDateString()
    return currentDate
}