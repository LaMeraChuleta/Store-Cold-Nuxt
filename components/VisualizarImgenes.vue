 <template>
  <div>
    <div class="-mx-3 border border-gray-400 rounded-md mb-3 mt-3">
      <div class="w-full rounded-md h-12 text-gray-700 px-8">
        <h1>Visualizar Imagenes</h1>
        <div v-for="(item, key) in img" :key="key">
            <img :src="item" />
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

