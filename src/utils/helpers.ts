 const formatDate = (dateJoined:string) => new Date(dateJoined).toLocaleDateString(
  "en-US",
  {
    month: "short", // This will abbreviate the month
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format
  }
)
export default formatDate;