<script setup lang="ts">
  import {computed} from "vue";
  import type {CarEquipmentKeys, CarEquipmentValues} from "@/types/CarEquipment";

  interface Props {
    title: string
    translations: Partial<Record<CarEquipmentValues,string>>;
    values:  Partial<Record<CarEquipmentValues,boolean | string>>;
  }

  const props = defineProps<Props>();

  const numberOfGridColumns = computed(() => {
    const length = Object.keys(props.values).length;
    return Math.ceil(length / 10);
  })

  function isBoolean(value: boolean | string): value is boolean {
    return typeof value === "boolean";
  }

</script>

<template>
  <v-expansion-panel
      v-if="Object.keys(values).length"
      :title="title">
    <v-expansion-panel-text class="expansion-panel-content--container">
      <div
          v-for="item in Object.entries(values)"
          class="expansion-panel-content"
      >
        <v-icon :icon="'mdi-check'"/>

        <p v-if="isBoolean(item[1])">
           {{translations[item[0]]}}
        </p>

        <p v-else>
          {{`${translations[item[0]]} ${item[1]}`}}
        </p>
      </div>

    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped lang="scss">
$numberOfGridColumns: v-bind(numberOfGridColumns);

.expansion-panel-content {
  display: flex;
  column-gap: 10px;

  &--container {
    :deep(.v-expansion-panel-text__wrapper) {
      display: grid;
      grid-template-columns: repeat($numberOfGridColumns, 1fr);
    }

  }
}

</style>