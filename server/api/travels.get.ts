import { faker } from "@faker-js/faker";

interface Travel {
  id: String;
  title: String;
  start: Date;
  end: Date;
  description: String;
  pictureUrl: String;
  price: Number;
  rating: Number;
}

export default defineEventHandler(async (event) => {
  let travels: Travel[] = [];
  let startDate = faker.date.soon({ days: 30 });

  for (let i = 0; i <= 30; i++) {
    let travel: Travel = {
      id: faker.string.uuid(),
      title:
        faker.helpers
          .arrayElements(["Tour in ", "15 giorni in ", "Scopri il "], 1)
          .toString() + faker.location.county(),
      start: startDate,
      end: faker.date.soon({ days: 30, refDate: startDate }),
      description: faker.lorem.paragraph(3),
      pictureUrl: faker.image.url({ width: 300, height: 200 }),
      price: faker.number.float({
        min: 1000,
        max: 5000,
        fractionDigits: 2,
      }),
      rating: faker.helpers.arrayElement([
        0.0, 0, 5, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 4.5, 5.0,
      ]),
    };

    travels.push(travel);
  }

  return travels;
});
