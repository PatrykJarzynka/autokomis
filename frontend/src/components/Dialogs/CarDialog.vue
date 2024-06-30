<script setup lang="ts">

import Dialog from "@/components/Dialog.vue";
import {ref} from "vue";
import CarDialogForm from "@/components/CarOffer/CarDialogForm.vue";
import type {CarItem} from "@/types/CarItem";
import {defaultCarItem} from "@/utils/temporary-car-items";

const dialog = ref<InstanceType<typeof Dialog>>();
const carModel = ref<CarItem>(defaultCarItem);

function openDialog(): void {
  dialog.value?.openDialog()
}

function closeDialog(): void {
  dialog.value?.closeDialog();
}

defineExpose({
  openDialog,
  closeDialog
})
</script>

<template>
  <Dialog
      class="test"
      ref="dialog"
      :opacity="0"
  >
    <template #content>
      <v-card class="car-dialog-container">
       <v-card-title>{{'Nowe ogłoszenie'}}</v-card-title>

        <v-card-text class="h-100 overflow-y-auto">
          <CarDialogForm
              :car-model="carModel"
          />
        </v-card-text>
      </v-card>

    </template>
  </Dialog>
</template>

<style scoped lang="scss">


.car-dialog-container {
  background-color: white;
  width: 60%;
}
</style>