<script setup lang="ts">
import EquipementExpansionPanel from "@/components/EquipementExpansionPanel.vue";
import {tempCarEquipment} from "@/utils/temporary-car-equipment";
import {carEquipmentTranslations} from "@/translations/CarEquipmentTranslations";
import {onMounted, ref} from "vue";
import type { CarEquipmentKeys, CarEquipmentValues} from "@/types/CarEquipment";

const objectsWithTruthyValues = ref<Record<CarEquipmentKeys, Partial<CarEquipmentValues>>>({
  audioMultimedia: {},
  comfort: {},
  driveAssistance: {},
  electric: {},
  safety: {},
  performance: {}
})

function setTruthyValues(): void {
  for (const equipmentItem in tempCarEquipment) {
    const typedEquipmentItem = equipmentItem as CarEquipmentKeys;

    Object.keys(tempCarEquipment[typedEquipmentItem]).forEach(equipmentItemKey => {
      const typedEquipmentItemKey = equipmentItemKey as keyof CarEquipmentValues;
      const equipmentValue = tempCarEquipment[typedEquipmentItem][typedEquipmentItemKey];


      if(equipmentValue) {
        objectsWithTruthyValues.value[typedEquipmentItem] = {
          ...objectsWithTruthyValues.value[typedEquipmentItem],
          [typedEquipmentItemKey]: equipmentValue
        };
      }
    })
  }
}

onMounted(() => {
  setTruthyValues();
})

</script>

<template>
  <v-container>
    <p class="equipment-label">{{'Wyposażenie'}}</p>
    <v-divider/>

        <v-expansion-panels>
          <EquipementExpansionPanel
              v-for="equipmentEntry in Object.entries(tempCarEquipment)"
              :title="carEquipmentTranslations[equipmentEntry[0]].title"
              :translations="carEquipmentTranslations[equipmentEntry[0]].values"
              :values="objectsWithTruthyValues[equipmentEntry[0]]"
          />
        </v-expansion-panels>
  </v-container>
</template>

<style scoped lang="scss">
@import '../utils/colors.scss';

.equipment-label {
  font-size: 1.438rem;
  color: $secondaryColor;
}

</style>