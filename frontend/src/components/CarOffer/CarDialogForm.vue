<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import {bodyType, driveType, fuelType} from "@/types/CarItem";
import useStringConverter from "@/composables/useStringConverter";

const { upperCaseFirstLetter } = useStringConverter();

const rules = {
  required: (value:string | number) => !!value || 'To pole nie może pozostać puste',
}

</script>

<template>
  <v-container>
    <v-form>
      <v-label class="section-label">{{'Informacje podstawowe'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>
        <v-text-field
            class="pb-3"
            variant="outlined"
            label="Tytuł*"
            :rules="[rules.required]"
        />

        <div class="dialog-content--basic-info">

          <v-select
              variant="outlined"
              label="Typ nadwozia*"
              :items="bodyType"
              :rules="[rules.required]"
          />

          <v-select
              variant="outlined"
              label="Napęd*"
              :items="driveType"
              :rules="[rules.required]"
          >
            <template #item="{props,item}">
              <v-list-item
                  v-bind="props"
                  :title="upperCaseFirstLetter(item.title)"
              />
            </template>
          </v-select>

          <v-select
              variant="outlined"
              label="Paliwo*"
              :items="fuelType"
              :rules="[rules.required]"
          >
            <template #item="{props,item}">
              <v-list-item
                  v-bind="props"
                  :title="upperCaseFirstLetter(item.title)"
              />
            </template>
          </v-select>

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Rok produkcji*"
              :rules="[rules.required]"
          />

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Przebieg [km]*"
              :rules="[rules.required]"
          />

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Moc silnika [KM]*"
              :rules="[rules.required]"

          />

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Pojemność silnika [cm³]*"
              :rules="[rules.required]"
          />

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Liczba drzwi*"
              :rules="[rules.required]"
          />

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Liczba miejsc*"
              :rules="[rules.required]"
          />

          <v-number-input
              variant="outlined"
              control-variant="split"
              label="Liczba właścicieli*"
              :rules="[rules.required]"
          />

          <v-text-field
              variant="outlined"
              label="Kraj pochodzenia*"
              :rules="[rules.required]"

          />

          <v-text-field
              variant="outlined"
              label="Numer VIN*"
              :rules="[rules.required]"
          />

          <v-text-field
              variant="outlined"
              label="Numer rejestracyjny*"
              :rules="[rules.required]"
          />
        </div>

      </v-container>

      <v-label class="section-label">{{'Wyposażenie'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>

      </v-container>
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

.dialog-content {
  &--basic-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px
  }
}

</style>