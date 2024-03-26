<template>
  <div class="flex h-full justify-center">
    <div class="w-full p-5 lg:w-1/2">
      <WizardResune />
      <div class="mb-5">
        <div class="text-lg font-bold">
          Totale <span>{{ formatCurrency(Total, "it") }}</span>
        </div>
      </div>
      <div class="flex justify-between">
        <button
          @click="nextStep()"
          type="button"
          class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Paga Ora
        </button>
        <button
          @click="abort()"
          type="button"
          class="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Annulla
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTravelsStore } from "~/store/travelStore";

const booking = useTravelsStore();
const { formatCurrency } = useTravels();

const Total = computed<number>(() => {
  return (
    booking.activeBooking.travel.price * booking.activeBooking.customers.length
  );
});
</script>

<style></style>
