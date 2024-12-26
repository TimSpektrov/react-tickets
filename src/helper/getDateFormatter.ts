export const getDateFormatter = (date: string) => {
  const dateArr = date.split(".");
  const formatDate = new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]);

  const month = formatDate
    .toLocaleString("ru", {
      month: "short",
    })
    .replace(".", "");
  const weekday = formatDate.toLocaleString("ru", {
    weekday: "short",
  });

  return `${dateArr[0]} ${month} 20${dateArr[2]}, ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}`;
};
