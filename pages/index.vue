<template>
  <div>
    <div class="flex gap-3 py-3">
      <select
        id="countries"
        v-model="selected"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option
          value=""
          selected
        >
          {{ $t("chose_country") }}
        </option>
        <option
          v-for="(country, index) in Countries"
          :key="index"
          :value="country"
        >
          {{ country }}
        </option>
      </select>
      <select
        id="order"
        v-model="order"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option
          value="asc"
          selected
        >
          {{ $t("asc_order") }}
        </option>
        <option value="dsc">
          {{ $t("dsc_order") }}
        </option>
      </select>
    </div>
    <div v-if="!pending">
      <TravelsRow
        v-for="(item, index) in travels"
        :key="index"
        :travel="(item as Travel)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTravelsStore } from '@/store/travelStore'
import  { Travel } from '~/types/travel'

const selected: Ref<string> = ref('')

const order: Ref<string> = ref('asc')

const { Countries } = useTravelsStore()

const { data: travels, pending } = await useFetch('/api/travels', {
  watch: [selected],
  params: { country: selected, orderByprice: order },
})
</script>
