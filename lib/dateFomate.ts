export const formatDate = (date: string) => {
    const [day, month, year] = date.split("/");

    return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
};