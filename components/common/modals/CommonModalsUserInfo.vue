<template>
  <div class="flex h-full justify-center">
    <div class="w-full p-5 lg:w-1/2">
      <div class="pb-3 text-xl font-bold">Inserisci i dati personali</div>
      <div class="mb-5 rounded-lg border border-slate-300 p-3">
        <div>{{ booking.activeBooking.travel.title }}</div>
        <div class="flex justify-between">
          <span
            >Partenza:
            {{ $dayjs(booking.activeBooking.travel.start).format("DD/MM") }}
          </span>
          <span
            >Ritorno:
            {{ $dayjs(booking.activeBooking.travel.end).format("DD/MM") }}
          </span>
        </div>
        <div>Persone {{ booking.activeBooking.people }}</div>
        <div>Stanze {{ booking.activeBooking.room }}</div>
        <div v-if="booking.activeBooking.insurance">Con assicurazione</div>
        <div v-else>Senza assicurazione</div>
        <div
          v-for="(customer, index) in booking.activeBooking.customers"
          :key="index"
          class="flex justify-between"
        >
          <span>{{ customer.name }}</span>
          <span>{{ customer.last_name }}</span>
        </div>
      </div>

      <CommonModalsCommonModalUserInfoRow
        v-for="(person, index) in booking.activeBooking.people"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTravelsStore } from "~/store/travelStore";
const booking = useTravelsStore();
</script>

<style></style>
