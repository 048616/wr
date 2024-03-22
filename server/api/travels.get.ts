import type { Travel } from "~/types/travel";
import { data } from "@/store/data";

export default defineEventHandler(async (event) => {
  let travels: Travel[] = data;

  console.log("pippo");

  return travels;
});
