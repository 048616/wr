import  { Travel } from '~/types/travel'
import { data } from '@/store/data'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  let travels: Travel[] | undefined = data

  if (travels) {
    if (query.orderByprice) {
      travels = travels.sort((a: Travel, b: Travel) => {
        const order = query.orderByprice === 'dsc' ? -1 : 1
        return order * (Number(a.price) - Number(b.price))
      })
    }

    if (query.country) {
      travels = travels.filter((o: Travel) => o.country === query.country)
    }
  }

  return travels ?? []
})
