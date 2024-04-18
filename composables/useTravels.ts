import dayjs from 'dayjs'

export function useTravels() {
  const getDuration = (start: string, end: string): number => {
    const date1 = dayjs(end)
    const date2 = dayjs(start)
    return date1.diff(date2, 'days')
  }

  const formatCurrency = (currency: number, locale: string): string => {
    let c: string = ''
    switch (locale) {
      case 'it':
        c = Intl.NumberFormat(locale, {
          style: 'currency',
          currency: 'EUR',
        }).format(currency)
        break
    }
    return c
  }

  return { getDuration, formatCurrency }
}
