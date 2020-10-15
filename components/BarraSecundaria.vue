<template>
  <div>
    <header class="bg-white border">
      <div class="flex flex-auto sm:text-xs">
        <router-link class="sm:ml-2 justify-center flex-auto w-1/4 inline-flex" to="/cassette">
          <img class="sm:mr-1 mr-3 p-1 transform hover:-translate-y-1 transition ease-in duration-100" width="40" height="40" src="~/assets/icon/tape.png" />
          <div class="text-black sm:hidden pt-2 font-mono">Cassettes</div>
        </router-link>
        <router-link class="sm:ml-2 w-1/4 justify-center inline-flex" to="/">
          <img class="sm:mr-1 mr-3 p-1 transform hover:-translate-y-1 transition ease-in duration-100" width="40" height="40" src="~/assets/icon/cd.png" />
          <div class="text-black sm:hidden pt-2 font-mono">CD</div>
        </router-link>
        <router-link class="sm:ml-2 w-1/4 justify-center inline-flex" to="/">
          <img class="sm:mr-1 mr-3 p-1 transform hover:-translate-y-1 transition ease-in duration-100" width="40" height="40" src="~/assets/icon/vinyl.png" />
          <div class="text-black sm:hidden pt-2 font-mono">Vinyl LP</div>
        </router-link>
        <router-link class="sm:ml-2 w-1/4 justify-center inline-flex" to="/">
          <img class="sm:mr-1 mr-3  transform hover:-translate-y-1 transition ease-in duration-100" width="40" height="40" src="~/assets/icon/amplifier.png" />
          <div class="text-black sm:hidden pt-2 font-mono">Accesorios</div>
        </router-link>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  data: function () {
    return {};
  },
};
</script>
