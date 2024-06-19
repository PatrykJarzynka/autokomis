<script setup lang="ts">

import useRouteHandler from "@/composables/routeHandler";
import {onMounted, ref} from "vue";
import type {CarItem} from "@/types/CarItem";
import {temporaryCarItems} from "@/utils/temporary-car-items";

const { getRouteParam } = useRouteHandler();
const carItem = ref<CarItem>();

onMounted(() => {
  const itemId = getRouteParam("id")
  carItem.value = temporaryCarItems.find(carItem => carItem.id === itemId );
  console.log(carItem.value);
})

</script>

<template>
  <v-container class="container">
    <v-row class="container--row">
      <v-col
          cols="7"
          class="car-photo-column"
      >
        <v-row v-if="carItem">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="img in carItem.imgs"
              :key="img"
              :src="img"
              cover
            />
          </v-carousel>
        </v-row>

        <v-row>

        </v-row>
      </v-col>

      <v-col
          cols="5"
          class="car-data-column"
      >

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">

.container {
  height: 100%;

  &--row {
    height: 100%;
  }
}

.car-photo-column {
  background-color: red;
}

.car-data-column {
  background-color: #153962;
}

</style>