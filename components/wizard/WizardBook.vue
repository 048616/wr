<template>
  <div class="flex h-full justify-center">
    <div class="w-full p-5 lg:w-1/2">
      <div class="pb-3 text-xl font-bold">
        Procedi con la prenotazione
      </div>

      <div
        v-if="!pending && travel"
        class="mb-5 rounded-lg border border-slate-300 p-3"
      >
        <div>{{ travel.value?.title }}</div>
        <div class="flex justify-between">
          <span>Partenza: {{ $dayjs(travel.value?.start).format("DD/MM") }} </span>
          <span>Ritorno: {{ $dayjs(travel.value?.end).format("DD/MM") }} </span>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="relative flex max-w-[11rem] items-center">
          <button
            id="decrement-button"
            :disabled="people <= 1"
            type="button"
            data-input-counter-decrement="bedrooms-input"
            class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            @click="people = people - 1"
          >
            <svg
              class="h-3 w-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            id="bedrooms-input"
            v-model="people"
            type="text"
            data-input-counter
            data-input-counter-min="1"
            data-input-counter-max="5"
            aria-describedby="helper-text-explanation"
            class="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 pb-6 text-center text-sm font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            required
          >
          <div
            class="absolute bottom-1 start-1/2 flex -translate-x-1/2 items-center space-x-1 text-xs text-gray-400 rtl:translate-x-1/2 rtl:space-x-reverse"
          >
            <svg
              class="h-2.5 w-2.5 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
              />
            </svg>
            <span>Persone</span>
          </div>
          <button
            id="increment-button"
            type="button"
            data-input-counter-increment="bedrooms-input"
            class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            @click="people = people + 1"
          >
            <svg
              class="h-3 w-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <div class="relative flex max-w-[11rem] items-center">
          <button
            id="decrement-button"
            :disabled="room <= 1"
            type="button"
            data-input-counter-decrement="bedrooms-input"
            class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            @click="room = room - 1"
          >
            <svg
              class="h-3 w-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            id="bedrooms-input"
            v-model="room"
            type="text"
            data-input-counter
            data-input-counter-min="1"
            data-input-counter-max="5"
            aria-describedby="helper-text-explanation"
            class="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 pb-6 text-center text-sm font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            required
          >
          <div
            class="absolute bottom-1 start-1/2 flex -translate-x-1/2 items-center space-x-1 text-xs text-gray-400 rtl:translate-x-1/2 rtl:space-x-reverse"
          >
            <svg
              class="h-2.5 w-2.5 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
              />
            </svg>
            <span>Camere</span>
          </div>
          <button
            id="increment-button"
            type="button"
            data-input-counter-increment="bedrooms-input"
            class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            @click="room = room + 1"
          >
            <svg
              class="h-3 w-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="my-4 mb-4 flex items-center">
        <input
          id="disabled-checkbox"
          v-model="insurance"
          type="checkbox"
          value=""
          class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        >
        <label
          for="disabled-checkbox"
          class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
        >Aggiungi assicurazione</label>
      </div>
      <div class="flex justify-between">
        <button
          type="button"
          class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="nextStep()"
        >
          Procedi
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
import { Travel } from '../../types/travel'
import { useModalStore } from '~~/store/modalStore'
import { useTravelsStore } from '~/store/travelStore'

const modal = useModalStore()
const people = ref<number>(1)
const room = ref<number>(1)
const insurance = ref<boolean>(false)

const booking = useTravelsStore()

const { data: travel , pending } = await useFetch<Travel>('/api/book/travel', {
  params: { travelUid: modal.activeModal.travelUid }
})

const nextStep = () => {
if (travel.value){
  booking.activeBooking.travel = travel.value
} else{
  booking.activeBooking.travel  = new Travel()
}


  booking.activeBooking.people = people.value
  booking.activeBooking.room = room.value
  booking.activeBooking.insurance = insurance.value

  modal.activeModal.name = 'WizardUserInfo'
}
const abort = () => {
  modal.activeModal.name = ''
}
</script>

<style></style>
