<template>
  <div>
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
        v-if="booking.activeBooking.customers.length > 0"
        class="mb-3 mt-5 border-b border-slate-300 pb-2 font-bold"
      >
        Partecipanti
      </div>
      <div
        v-for="(customer, index) in booking.activeBooking.customers"
        :key="index"
        class="flex justify-between"
      >
        <span>{{ customer.name }}</span>
        <span>{{ customer.last_name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTravelsStore } from "~/store/travelStore";

const booking = useTravelsStore();
</script>

<style></style>
