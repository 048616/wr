<template>
  <div class="flex gap-3 py-3">
    <select
      v-model="selected"
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="" selected>{{ $t("chose_country") }}</option>
      <option
        v-for="(country, index) in Countries"
        :key="index"
        :value="country"
      >
        {{ country }}
      </option>
    </select>
    <select
      v-model="order"
      id="order"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="asc" selected>{{ $t("asc_order") }}</option>
      <option value="dsc">{{ $t("dsc_order") }}</option>
    </select>
  </div>
  <div v-if="!pending">
    <TravelsRow
      v-for="(item, index) in travels"
      :key="index"
      :travel="item as unknown as unknown as unknown as Travel"
    />
  </div>
</template>
<script setup lang="ts">
import { useTravelsStore } from "@/store/travels";
import type { Travel } from "~/types/travel";
const selected: Ref<string> = ref("");

const order: Ref<string> = ref("asc");

const { Countries } = useTravelsStore();

const { data: travels, pending } = await useFetch<Travel[]>("/api/travels", {
  watch: [selected],
  params: { country: selected, orderByprice: order },
});
</script>
