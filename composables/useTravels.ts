import dayjs from "dayjs";

export function useTravels() {
  const getDuration = (start: string, end: string): Number => {
    const date1 = dayjs(end);
    const date2 = dayjs(start);
    return date1.diff(date2, "days");
  };

  return { getDuration };
}
