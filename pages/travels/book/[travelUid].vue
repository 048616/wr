<template>
  <pre>{{ travel }}</pre>
</template>

<script setup lang="ts">
import type { Travel } from "../../../types/travel";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.travelUid);

const { data: travel, pending } = await useFetch<Travel>("/api/book/travel", {
  params: { travelUid: route.params.travelUid },
});
</script>
