<script setup lang="ts">

import {temporaryCarItems} from "@/utils/temporary-car-items";
</script>

<template>
    <v-container class="offer-container">
      <h1 class="main-title">{{'OFERTA'}}</h1>

      <div class="offer-items-container">
        <v-card v-for="car in temporaryCarItems">
            <v-img
                :src="car.img"
                :height="400"
                cover
            />

          <v-card-title>{{car.title}}</v-card-title>

          <div class="card-info">
            <v-card-subtitle>{{car.rocznik}}</v-card-subtitle>
            <v-card-subtitle>{{car.przebieg + ' km'}}</v-card-subtitle>
            <v-card-subtitle>{{car.paliwo}}</v-card-subtitle>
            <v-card-subtitle>{{car.moc + 'KM'}}</v-card-subtitle>
            <v-card-subtitle>{{car.pojemnosc + ' cm3'}}</v-card-subtitle>
          </div>

          <v-card-text class="price">4000PLN</v-card-text>

        </v-card>
      </div>
    </v-container>
</template>

<style scoped lang="scss">
@import '../utils/colors.scss';

  .offer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .main-title {
    font-size: 40px;
    font-weight: 500;
    color: $primaryColor;
    height: fit-content;
  }

  .offer-items-container {
    display: grid;
    width: 100%;
    flex: 1;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  .card-info {
    display: flex;

    .v-card-subtitle {
      font-size: 15px;
    }
  }

  .price {
    font-size: 22px;
    font-weight: 500;
    color: $accentColor;
  }
</style>