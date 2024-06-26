import { faker } from '@faker-js/faker'
import  { Travel } from '~/types/travel'

export default defineEventHandler(async () => {
  const travels: Travel[] = []

  for (let i = 0; i <= 30; i++) {
    const country = faker.location.country()
    const startDate = faker.date.soon({ days: 30 }).toString()
    const travel: Travel = {
      uid: faker.string.uuid(),
      title:
        faker.helpers
          .arrayElements(['Tour in ', '15 giorni in ', 'Scopri il '], 1)
          .toString() + country,
      country: country,
      start: startDate,
      end: faker.date.soon({ days: 30, refDate: startDate }).toString(),
      description: faker.lorem.paragraph(3),
      pictureUrl: `https://loremflickr.com/180/111/${country.toLowerCase().replace(/\W+/g, '-')}`,
      price: faker.number.float({
        min: 1000,
        max: 5000,
        fractionDigits: 2,
      }),
      rating: faker.helpers.arrayElement([
        0.0, 0, 5, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 4.5, 5.0,
      ]),
    }

    travels.push(travel)
  }

  return travels
})
