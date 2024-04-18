<template>
  <pre>{{ travel }}</pre>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Travel } from '../../../types/travel'

const route = useRoute()
console.log(route.params.travelUid)

const { data: travel } = await useFetch<Travel>('/api/book/travel', {
  params: { travelUid: route.params.travelUid },
})
</script>
