<template>
  <div class="flex gap-10 border-b border-gray-200 p-4 text-gray-700">
    <div class="text-center">
      <div>{{ $dayjs(travel.start).format("dddd") }}</div>
      <div class="font-bold text-6xl">
        {{ $dayjs(travel.start).format("DD") }}
      </div>
      <div>
        {{ $dayjs(travel.start).format("YYYY") }}
      </div>
    </div>
    <img :src="travel.pictureUrl" :alt="travel.title" />
    <div>
      <div class="font-bold text-green-700">
        {{ formatCurrency(travel.price, "it") }}
      </div>
      <div class="font-bold text-lg">{{ travel.title }}</div>
      <div>
        <span>{{ Duration }}</span
        >&nbsp;
        <span v-cloak>{{ $t("day", { count: Duration }) }}</span>
      </div>
      <div v-cloak class="text-xs text-gray-500">
        <span>
          {{ $t("from") }}
          {{ $dayjs(travel.start).format("DD/MM") }} </span
        >&nbsp;
        <span> {{ $t("to") }} {{ $dayjs(travel.end).format("DD/MM") }} </span>
      </div>
      <div>{{ travel.description }}</div>
    </div>
    <div>{{ travel.title }}</div>
  </div>
</template>
<script setup lang="ts">
import { type Travel } from "@/types/travel";
import { useTravels } from "@/composables/useTravels";

const props = defineProps<{
  travel: Travel;
}>();

const Duration = computed(() => {
  return getDuration(props.travel.start, props.travel.end);
});

const { getDuration, formatCurrency } = useTravels();
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
