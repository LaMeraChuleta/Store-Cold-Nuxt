<template>
  <div>
    <div
      class="max-w-3xl mx-auto flex flex-auto justify-center rounded-full sm:mt-2 sm:mb-2 h-12 border"
    >
    <div class=" inline-flex mt-3">
      <div class="w-1/8 inline justify-center ml-3">
        <button type="image" class="inline w-6 text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div class="w-72 inline">
        <input class="border-black w-full ml-2 mr-2" placeholder="   Buscar" />
      </div>
      <div class="w-1/8 appearance-none inline justify-center mr-3">
        <select class=" text-xs">
          <option value="1">Seleccionar</option>
          <option value="2">CD</option>
          <option value="3">Cassette</option>
          <option value="4">Accesorios</option>
        </select>
      </div>
      </div>
    </div>
  </div>
</template>
    