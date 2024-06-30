<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import {bodyType, type CarItem, driveType, fuelType} from "@/types/CarItem";
import useStringConverter from "@/composables/useStringConverter";
import {ref} from "vue";
import CarEquipment from "@/components/CarOffer/CarEquipment.vue";

interface Props {
  carModel: CarItem;
}

const { upperCaseFirstLetter } = useStringConverter();

const props = defineProps<Props>()

const rules = {
  required: (value:string | number) => !!value || 'To pole nie może pozostać puste',
}

const carDialogModel = ref<CarItem>(props.carModel);

function submit(): void {
  console.log(carDialogModel.value);
}

</script>

<template>
  <v-container>
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-label class="section-label">{{'Informacje podstawowe'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>
        <v-text-field
            v-model="carModel.title"
            class="pb-3"
            variant="outlined"
            label="Tytuł*"
            :rules="[rules.required]"
        />

        <div class="dialog-content--basic-info">

          <v-select
              v-model="carModel.nadwozie"
              variant="outlined"
              label="Typ nadwozia*"
              :items="bodyType"
              :rules="[rules.required]"
          />

          <v-select
              v-model="carModel.naped"
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
              v-model="carModel.paliwo"
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
              v-model="carModel.rocznik"
              variant="outlined"
              control-variant="split"
              label="Rok produkcji*"
              :rules="[rules.required]"
          />

          <v-number-input
              v-model="carModel.przebieg"
              variant="outlined"
              control-variant="split"
              label="Przebieg [km]*"
              :rules="[rules.required]"
          />

          <v-number-input
              v-model="carModel.moc"
              variant="outlined"
              control-variant="split"
              label="Moc silnika [KM]*"
              :rules="[rules.required]"

          />

          <v-number-input
              v-model="carModel.pojemnosc"
              variant="outlined"
              control-variant="split"
              label="Pojemność silnika [cm³]*"
              :rules="[rules.required]"
          />

          <v-number-input
              v-model="carModel.liczbaDrzwi"
              variant="outlined"
              control-variant="split"
              label="Liczba drzwi*"
              :rules="[rules.required]"
          />

          <v-number-input
              v-model="carModel.liczbaMiejsc"
              variant="outlined"
              control-variant="split"
              label="Liczba miejsc*"
              :rules="[rules.required]"
          />

          <v-number-input
              v-model="carModel.liczbaWlacicieli"
              variant="outlined"
              control-variant="split"
              label="Liczba właścicieli*"
              :rules="[rules.required]"
          />

          <v-text-field
              v-model="carModel.kraj"
              variant="outlined"
              label="Kraj pochodzenia*"
              :rules="[rules.required]"

          />

          <v-text-field
              v-model="carModel.vin"
              variant="outlined"
              label="Numer VIN*"
              :rules="[rules.required]"
          />

          <v-text-field
              v-model="carModel.rejestracja"
              variant="outlined"
              label="Numer rejestracyjny*"
              :rules="[rules.required]"
          />
        </div>

      </v-container>

      <v-label class="section-label">{{'Wyposażenie'}}</v-label>
      <v-divider class="pb-4"/>

      <v-container>
        <CarEquipment
            :readonly="false"
            :equipment="carDialogModel.equipment"
        />
      </v-container>

      <v-btn type="submit">{{'Submit'}}</v-btn>
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