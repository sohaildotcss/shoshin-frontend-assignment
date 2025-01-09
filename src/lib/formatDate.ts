export const formatDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);
  
    const today = new Date().setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0) ? "Today" : "";
    return today ? `Today, ${formattedDate}` : formattedDate;
};