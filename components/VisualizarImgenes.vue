 <template>
  <div>
    <div class="w-full max-w-lg flex flex-col mt-3 border h-72 sm:h-auto">
       <h1
        class="text-center p-3 text-lg block uppercase tracking-wide text-gray-700 font-bold"
      >Imagenes</h1>
    <div class=" overflow-y-auto sm:overflow-auto appearance-none p-5">
      <div class=" inline-block sm:inline-flex rounded-md w-64 sm:w-screen m-1">
        <div v-for="(item, key) in img" :key="key">
          <div class="border border-purple-700 object-contain mb-4 mr-3 sm:m-1 sm:w-56">
            <img class="w-full " :src="item" />
          </div>
        </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {

    props: {

        img: {
            type: Array,
            required: true
        }
    },
}
</script>

