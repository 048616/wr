<template>
  <ClientOnly>
    <Transition>
      <div
        v-if="modal.activeModal.name"
        ref="global_modal_container"
        class="sticky-0 fixed top-0 h-full w-full bg-white"
      >
        <component :is="getComponent(modal.activeModal.name)" />
      </div>
    </Transition>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { useModalStore } from "~~/store/modalStore";

const modal = useModalStore();

const getComponent = (name: string): any => {
  let c = null;
  switch (name) {
    case "CommonModalsBook":
      c = resolveComponent("CommonModalsBook");
      break;
    case "CommonModalsUserInfo":
      c = resolveComponent("CommonModalsUserInfo");
      break;
  }

  return c;
};
</script>

<style></style>
