<template>
  <div class="flex h-full justify-center">
    <div class="w-full p-5 lg:w-1/2">
      <WizardResune />
      <div class="mb-5">
        <div class="text-lg font-bold">
          Totale <span>{{ formatCurrency(Total, "it") }}</span>
        </div>
      </div>
      <div
        v-if="showMessage"
        class="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span class="font-medium">Il tuo pagamento e andato a buon fine</span>Il
        tuo pagamento e andato a buon fine, riceverai una mail con tutti i dati
        per il tuo viaggio
      </div>
      <div class="flex justify-between">
        <button
          type="button"
          class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="nextStep()"
        >
          Paga Ora
        </button>
        <button
          type="button"
          class="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          @click="abort()"
        >
          Annulla
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTravelsStore } from '~/store/travelStore'
import { useModalStore } from '~~/store/modalStore'

const booking = useTravelsStore()
const modal = useModalStore()
const { formatCurrency } = useTravels()

const showMessage = ref<boolean>(false)

const Total = computed<number>(() => {
  return (
    booking.activeBooking.travel.price * booking.activeBooking.customers.length
  )
})

const nextStep = () => {
  showMessage.value = true

  setTimeout(() => {
    modal.activeModal.name = ''
  }, 3000)
}
const abort = () => {
  modal.activeModal.name = ''
}
</script>

<style></style>
