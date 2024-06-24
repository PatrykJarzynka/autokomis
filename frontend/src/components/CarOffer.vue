<script setup lang="ts">

import useRouteHandler from "@/composables/routeHandler";
import {computed, onMounted, ref} from "vue";
import type {CarItem} from "@/types/CarItem";
import {temporaryCarItems} from "@/utils/temporary-car-items";
import CarOfferBasicData from "@/components/CarOfferBasicData.vue";
import CarEquipment from "@/components/CarEquipment.vue";
import ImgDialog from "@/components/ImgDialog.vue";

const { getRouteParam } = useRouteHandler();
const carItem = ref<CarItem>();
const selectedItemIndex = ref<number>(0);
const imgDialog = ref<InstanceType<typeof ImgDialog>>();

onMounted(() => {
  const itemId = getRouteParam("id")
  carItem.value = temporaryCarItems.find(carItem => carItem.id === itemId );
})

const imgPreviewTranslateNumber = computed((): string => {
  const columnWidth = document.getElementById('img-preview-0')?.clientWidth;
  const numberOfVisibleColumns = 6;

  if (columnWidth) {
    if (selectedItemIndex.value > 5 ) {
      const difference = Math.abs((numberOfVisibleColumns - selectedItemIndex.value)) + 1 ;
      return -(columnWidth * difference) + 'px';
    }
  }

  return '0px';
})

function handleUpdate(index: number): void {
  selectedItemIndex.value = index;
}

function handleImgClick(index: number): void {
  selectedItemIndex.value = index;
}

function handleSelectedImgClick(): void {
  imgDialog.value?.openDialog();
}



</script>

<template>
  <v-container class="container">
    <v-row
        v-if="carItem"
        class="container--row">
        <v-col
            cols="7"
            class="car-photo-column"
        >
          <v-row class="flex-0-0 pt-5 pb-5">
            <v-carousel
                v-model="selectedItemIndex"
                hide-delimiters
                @update:modelValue="handleUpdate"
            >
              <v-carousel-item
                  v-for="img in carItem.imgs"
                  :key="img"
                  :src="img"
                  @click="handleSelectedImgClick"
              />
            </v-carousel>
          </v-row>

          <v-row class="img-preview-row">
            <v-col
                v-for="(img, imgIndex) in carItem.imgs"
                :id="'img-preview-' + imgIndex"
                cols="2"
                class="img-preview-column"
                @click="handleImgClick(imgIndex)"
            >
              <v-img
                  :class="selectedItemIndex !== imgIndex ? 'no-selected' : ''"
                  :src="img"
              />
            </v-col>
          </v-row>

          <template>
            <ImgDialog
                ref="imgDialog"
                :car-img-srcs="carItem.imgs"
            />
          </template>
        </v-col>


      <v-col
          cols="5"
          class="car-data-column"
      >
        <CarOfferBasicData
          :item="carItem"
        />
      </v-col>
    </v-row>

    <v-row>
      <CarEquipment/>
    </v-row>
  </v-container>
</template>


<style scoped lang="scss">
$translationNumber: v-bind(imgPreviewTranslateNumber);


.container {
  padding-block: 80px;
  height: 100%;

  &--row {
    height: 100%;
  }
}

.car-photo-column {
  display: flex;
  flex-direction: column;
}

.no-selected::after {
  content: '';
  width: 100%;
  background-color: white;
  opacity: 0.5;
}

.car-data-column {
  background-color: white;
}

.img-preview-row {
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  margin: 0;
}

.img-preview-column {
  transition: transform 0.5s;
  transform: translate($translationNumber, 0px);
  cursor: pointer;
}

</style>