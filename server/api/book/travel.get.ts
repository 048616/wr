import type { Travel } from "~/types/travel";
import { data } from "@/store/data";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const travels: Travel[] | undefined = data;
  let travel: Travel;

  travel = travels.find((o: Travel) => o.uid === query.travelUid) as Travel;

  return travel ?? {};
});
