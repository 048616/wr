<template>
  <div class="py-3">
    <select
      v-model="selected"
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>{{ $t("chose_country") }}</option>
      <option v-for="(country, index) in Countries" :key="index">
        {{ country }}
      </option>
    </select>
  </div>
  <TravelsRow
    v-for="(item, index) in travelsData"
    :key="index"
    :travel="item"
  />
</template>
<script setup lang="ts">
import { useTravelsStore } from "@/store/travels";
const selected: Ref<string> = ref("");

const { travelsData, Countries, filterByCountry } = useTravelsStore();

watch(selected, (newValue) => {
  filterByCountry(newValue);
});
</script>
