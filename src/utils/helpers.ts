export const formatDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const getHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      userId: "6753605729f2b4c6bcc6cfe6",
    },
  };
};
