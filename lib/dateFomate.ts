export const formatDate = (date: string) => {
    const [day, month, year] = date.split("/");

    return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
};

export const formatDate2 = (date: string) => {
  const datePart = date.split("T")[0];

  if (datePart.includes("/")) {
    return datePart;
  }

  const [year, month, day] = datePart.split("-");

  return `${month}/${day}/${year}`;
};