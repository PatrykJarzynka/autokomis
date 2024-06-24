<script setup lang="ts">
  import type {CarItem} from "@/types/CarItem";

  interface Props {
    item: CarItem;
  }


  const props = defineProps<Props>()
</script>

<template>
  <v-container class="h-100 d-flex flex-column">
    <p class="car-title text-truncate">
      {{item.title}}
    </p>

    <div class="flex-1-1">
      <ul class="car-data-list-container">
        <li class="list-item">
          <span>Rok produkcji: </span>
          <span>{{item.rocznik}}</span>
        </li>

        <li class="list-item">
          <span>Typ nadwozia: </span>
          <span>{{item.nadwozie}}</span>
        </li>

        <li class="list-item">
          <span>Napęd: </span>
          <span>{{item.naped}}</span>
        </li>

        <li class="list-item">
          <span>Przebieg: </span>
          <span>{{item.przebieg}}</span>
        </li>

        <li class="list-item">
          <span>Paliwo: </span>
          <span>{{item.paliwo}}</span>
        </li>

        <li class="list-item">
          <span>Moc silnika: </span>
          <span>{{item.moc}}</span>
        </li>

        <li class="list-item">
          <span>Pojemność silnika: </span>
          <span>{{item.pojemnosc}}</span>
        </li>

        <li class="list-item">
          <span>Liczba drzwi: </span>
          <span>{{item.liczbaDrzwi}}</span>
        </li>

        <li class="list-item">
          <span>Liczba miejsc: </span>
          <span>{{item.liczbaMiejsc}}</span>
        </li>

        <li class="list-item">
          <span>Kraj pochodzenia: </span>
          <span>{{item.kraj}}</span>
        </li>

        <li class="list-item">
          <span>Liczba właścicieli: </span>
          <span>{{item.liczbaWlacicieli}}</span>
        </li>
      </ul>
    </div>


  </v-container>
</template>

<style scoped lang="scss">
@import '../utils/colors.scss';

  .car-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: $primaryColor;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 17px;
      color: $primaryColor;
      font-weight: 500;
    }
  }

  .list-item:nth-child(even) {
    background-color: rgba($secondaryColor, 0.5)
  }
  .car-data-list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 5px;
  }
</style>