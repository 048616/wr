<template>
  <ClientOnly>
    <Transition>
      <div
        v-if="modal.activeModal.name"
        ref="global_modal_container"
        class="sticky-0 fixed top-0 z-[1000] h-full w-full bg-white opacity-75"
      >
        <component :is="getComponent(modal.activeModal.name)" />
      </div>
    </Transition>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { useModalStore } from "~~/store/modalStore";
import Book from "@/components/common/modals/Book.vue";

const modal = useModalStore();

const getComponent = (name: string): any => {
  let c = null;
  switch (name) {
    case "Book":
      c = Book;
  }

  return c;
};
</script>

<style></style>
