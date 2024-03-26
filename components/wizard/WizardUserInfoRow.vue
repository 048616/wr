<template>
  <div v-if="visible">
    <div>
      <label
        for="first_name"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >First name</label
      >
      <input
        v-model="name"
        type="text"
        id="first_name"
        class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="John"
        required
      />
    </div>
    <div>
      <label
        for="last_name"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >Last name</label
      >
      <input
        v-model="last_name"
        type="text"
        id="last_name"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Doe"
        required
      />
    </div>
    <div class="mt-3 text-end">
      <button
        @click="addInfo()"
        type="button"
        class="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Aggiungi partecipante
      </button>
    </div>

    <div class="my-5 border-b border-slate-300"></div>
  </div>
</template>

<script lang="ts" setup>
import { useTravelsStore } from "~/store/travelStore";
const booking = useTravelsStore();
const visible = ref<boolean>(true);
const name = ref<string>("");
const last_name = ref<string>("");

const addInfo = (): void => {
  visible.value = false;
  booking.activeBooking.customers.push({
    name: name.value,
    last_name: last_name.value,
  });
};
</script>

<style></style>
