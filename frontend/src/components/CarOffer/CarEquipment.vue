<script setup lang="ts">
import EquipementExpansionPanel from "@/components/CarOffer/EquipementExpansionPanel.vue";
import {tempCarEquipment} from "@/utils/temporary-car-equipment";
import {carEquipmentTranslations} from "@/translations/CarEquipmentTranslations";
import {onMounted, ref} from "vue";
import type {CarEquipment, CarEquipmentKeys, CarEquipmentValues} from "@/types/CarEquipment";

interface Props {
  equipment: CarEquipment;
  readonly :boolean
}

const props = defineProps<Props>();

// const objectsWithTruthyValues = ref<CarEquipment>(props.equipment)

// function setTruthyValues(): void {
//   for (const equipmentItem in tempCarEquipment) {
//     const typedEquipmentItem = equipmentItem as CarEquipmentKeys;
//
//     Object.keys(tempCarEquipment[typedEquipmentItem]).forEach(equipmentItemKey => {
//       const typedEquipmentItemKey = equipmentItemKey as CarEquipmentValues;
//       const equipmentValue = tempCarEquipment[typedEquipmentItem][typedEquipmentItemKey];
//
//
//       if(equipmentValue) {
//         objectsWithTruthyValues.value[typedEquipmentItem] = {
//           ...objectsWithTruthyValues.value[typedEquipmentItem],
//           [typedEquipmentItemKey]: equipmentValue
//         };
//       }
//     })
//   }
// }

onMounted(() => {
  // setTruthyValues();
})

</script>

<template>
    <v-expansion-panels
        class="expansion-panels-container"
        variant="accordion"
    >
      <EquipementExpansionPanel
          v-for="(equipmentValues, equipmentCategory) in equipment"
          :readonly="readonly"
          :title="carEquipmentTranslations[equipmentCategory].title"
          :translations="carEquipmentTranslations[equipmentCategory].values"
          :values="equipmentValues"
      />
    </v-expansion-panels>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.expansion-panels-container {
  border: 2px solid $primaryColor;
  border-radius: 5px;
}

</style>