<script setup lang="ts">
import {HEADER_HEIGHT} from "@/utils/constants";

const headerItems = [
    'STRONA GŁÓWNA',
    'OFERTA',
    'INFORMACJE'
]

</script>

<template>
  <v-app-bar
      class="position-fixed"
      :height="HEADER_HEIGHT"
  >
    <div class="header-container">
      <v-row justify="center" class="ma-0 h-100">
        <div v-for="item in headerItems">
          <v-btn
              flat
              class="header-item h-100">
            <p>
              {{item}}
            </p>
          </v-btn>
        </div>
      </v-row>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import '../utils/colors.scss';

  .header-container {
    width: 100%;
    height: 100%;
    border-bottom: 0.125rem solid $primaryColor;
  }

  .header-item {
    p {
      font-weight: 700;
      color: $primaryColor;
    }
  }

  .logo-img {
    width: 450px;
    position: absolute;
    height: 100%;
    left: 0;
  }

</style>