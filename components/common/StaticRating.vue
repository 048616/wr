<template>
  <div
    :class="styleClasses"
    style="line-height: 100%"
  >
    <i
      v-for="(item, index) in 5"
      :key="index"
      class="not-italic"
      :class="Fill(rating, item)"
    >★</i>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: '#fdae16',
  },
  styleClasses: {
    type: String,
    default: 'text-[30px]',
  },
})

function Fill(value, index) {
  let fill = ''
  const k = value - index + 1
  if (k >= 0) {
    fill = 'full'
  }
  if (k < 0.5) {
    fill = 'empty'
  }

  if (k == 0.5) {
    fill = 'half'
  }
  return fill
}
</script>

<style scoped>
[class^="icon-"]:before,
[class*=" icon-"]:before {
  margin: 0px;
}

.full {
  color: v-bind(color);
}
.empty {
  color: #7f7f7f;
}
.half {
  background: linear-gradient(to right, v-bind(color) 50%, #7f7f7f 50%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
