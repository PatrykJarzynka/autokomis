<script setup lang="ts">
import CompanyMainTile from "@/components/CompanyMainTile.vue";
import CompanyOffer from "@/components/CompanyOffer.vue";
import CompanyContactCard from "@/components/CompanyContactCard.vue";

</script>

<template>
  <CompanyMainTile/>
  <div class="content-container">
    <CompanyOffer/>
    <CompanyContactCard/>
  </div>

</template>


<style lang="scss" scoped>
@import '../utils/colors.scss';

  .content-container {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    padding-inline: 150px;
    padding-block: 80px;
  }
</style>