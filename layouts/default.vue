<template>
  <div class="py-32">
    <div class="border-black max-w-6xl bg-white mx-auto fixed inset-x-0 top-0">
      <div class="mt-2">
        <div class="sm:fixed sm:inset-x-0 sm:top-0">
          <barra-inicio></barra-inicio>
        </div>
      </div>
      <div class="mt-2">
        <div class="sm:fixed sm:inset-x-0 sm:bottom-0">
          <barraSecundaria></barraSecundaria>
        </div>
      </div>
    </div>
    <nuxt />
  </div>  
</template>

<script>
import barraInicio from "../components/BarraInicio.vue";
import barraSecundaria from "~/components/BarraSecundaria.vue";

export default {
  components: {
    barraInicio,
    barraSecundaria,
  },
};
</script>

<style>
</style>
