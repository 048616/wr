<template>
  <div class="flex h-full justify-center">
    <div class="w-full overflow-y-scroll p-5 lg:w-1/2">
      <div class="pb-3 text-xl font-bold">Inserisci i dati personali</div>
      <WizardResune />
      <WizardUserInfoRow
        v-for="(person, index) in booking.activeBooking.people"
        :key="index"
      />
      <div class="flex justify-between">
        <button
          @click="nextStep()"
          type="button"
          class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Procedi
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
import { useModalStore } from "~~/store/modalStore";
const booking = useTravelsStore();
const modal = useModalStore();

const nextStep = () => {
  modal.activeModal.name = "WizardPayment";
};
const abort = () => {
  modal.activeModal.name = "";
};
</script>

<style></style>
