<script setup lang="ts">
  import {ref} from "vue";

  interface Props {
    opacity: number;
    fullscreen?: boolean;
  }

  defineProps<Props>()

  const isOpen = ref<boolean>(false);

  function openDialog(): void {
    isOpen.value = true;
  }

  function closeDialog(): void {
    isOpen.value = false;
  }

  defineExpose( {
    openDialog,
    closeDialog
  })

</script>

<template>
  <v-dialog
      v-model="isOpen"
      :fullscreen="fullscreen"
      :opacity="opacity"
  >
    <template #default>
      <div class="dialog-container">
        <slot name="content"/>
      </div>

    </template>
  </v-dialog>
</template>

<style scoped lang="scss">

.dialog-container {
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 0;
}

</style>