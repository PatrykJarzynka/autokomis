<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import {bodyType, driveType, fuelType} from "@/types/CarItem";

</script>

<template>
  <v-container>
    <v-form>
      <v-label class="section-label">{{'Informacje podstawowe'}}</v-label>
      <v-divider class="pb-4"/>

      <v-text-field
          label="Tytuł"
      />

      <v-number-input
          control-variant="split"
          label="Rok produkcji"
      />

      <v-select
          label="Typ nadwozia"
          :items="bodyType"
      />

      <v-select
          label="Napęd"
          :items="driveType"
      />

      <v-number-input
          control-variant="split"
          label="Przebieg"
      />

      <v-select
        label="Paliwo"
        :items="fuelType"
      />

      <v-number-input
          control-variant="split"
          label="Moc silnika"
      />

      <v-number-input
          control-variant="split"
          label="Pojemność silnika"
      />

      <v-number-input
          control-variant="split"
          label="Liczba drzwi"
      />

      <v-number-input
          control-variant="split"
          label="Liczba miejsc"
      />

      <v-text-field
          label="Kraj pochodzenia"
      />

      <v-number-input
          control-variant="split"
          label="Liczba właścicieli"
      />

      <v-text-field
          label="Numer VIN"
      />

      <v-text-field
          label="Numer rejestracyjny"
      />
    </v-form>
  </v-container>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

.section-label {
  color: $primaryColor;
  font-weight: 500;
  opacity: 1;
}

</style>