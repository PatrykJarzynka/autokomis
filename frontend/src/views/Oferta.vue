<script setup lang="ts">

</script>

<template>
    <v-container class="offer-container">
      <h1 class="main-title">{{'OFERTA'}}</h1>

      <div class="offer-items-container">

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
  }
</style>