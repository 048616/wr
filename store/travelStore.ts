import { defineStore } from 'pinia'
import  { Travel } from '~/types/travel'
import { data } from '@/store/data'

interface Info {
  name: string
  last_name: string
}

interface Booking {
  travel: Travel
  people: number
  room: number
  insurance: boolean
  customers: Array<Info>
}

export const useTravelsStore = defineStore({
  id: 'TravelsStore',
  state: () => {
    return {
      travelsData: data as Travel[],
      activeBooking: {
        travel: {...new Travel()},
        people: 0,
        room: 0,
        insurance: false,
        customers: [],
      } as Booking,
    }
  },
  actions: {},
  getters: {
    Countries: (state) => {
      const country: string[] = state.travelsData.map(o => o.country)
      return country
    },
  },
})
