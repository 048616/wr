<template>
  <div
    class="flex-sta flex flex-nowrap justify-between gap-10 border-b border-gray-200 p-4 text-gray-700"
  >
    <div class="flex-none text-center">
      <div>{{ $dayjs(travel.start).format("dddd") }}</div>
      <div class="text-6xl font-bold">
        {{ $dayjs(travel.start).format("DD") }}
      </div>
      <div>
        {{ $dayjs(travel.start).format("YYYY") }}
      </div>
    </div>
    <img class="w-56 flex-none" :src="travel.pictureUrl" :alt="travel.title" />
    <div class="w-auto flex-initial">
      <div class="flex gap-2">
        <div>
          {{ $t("user_rating") }} &nbsp;
          <CommonStaticRating
            :rating="travel.rating"
            :Classes="'text-[20px] float-right'"
          />
        </div>
      </div>
      <div>
        <span class="">{{ $t("price") }}</span
        >&nbsp;
        <span class="font-bold text-green-700">{{
          formatCurrency(travel.price, "it")
        }}</span>
      </div>
      <div class="text-lg font-bold">{{ travel.title }}</div>
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
    <div class="flex-none text-center">
      <div
        class="mb-2 cursor-pointer rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white"
        @click="openModal()"
      >
     {{ $t('book_now') }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type Travel } from "@/types/travel";
import { useTravels } from "@/composables/useTravels";
import { useModalStore } from "@/store/modalStore";

const modal = useModalStore();

const props = defineProps<{
  travel: Travel;
}>();

const Duration = computed(() => {
  return getDuration(props.travel.start, props.travel.end);
});

const { getDuration, formatCurrency } = useTravels();

const openModal = (): void => {
  modal.setActiveModal({
    name: "Book",
    travelUid: props.travel.uid,
  });
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
