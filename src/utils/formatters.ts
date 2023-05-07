export const formatDescription = (description: string) => {
    const arrayDescription = description.split(" ");
    if (arrayDescription.length < 160) return description
    
    const formattedDescription = `${arrayDescription.slice(0, 160).join(" ")}...`
    return formattedDescription
}