<script setup lang="ts">

import {TempCarEquipment} from "@/utils/temporary-car-equipment";
</script>

<template>
  <v-container>
    <p class="equipment-label">{{'Wyposażenie'}}</p>
    <v-divider/>

        <v-expansion-panels>
          <v-expansion-panel
              v-for="item in Object.entries(TempCarEquipment)"
              :title="item[0]"
          >

          </v-expansion-panel>
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