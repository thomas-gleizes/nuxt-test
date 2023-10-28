<script setup lang="ts">
const links = ref([
  { name: "Animes", path: "/animes" },
  { name: "Mangas", path: "/mangas" },
]);
</script>

<template>
  <header class="py-2 w-10/12 mx-auto relative">
    <div
      class="flex justify-between bg-gradient-to-br from-blue-700 to-blue-950 rounded px-4 py-2 bg-opacity-75 backdrop-blur shadow"
    >
      <h2 class="text-white font-bold">
        <nuxt-link to="/">Nuxt</nuxt-link>
      </h2>
      <nav class="flex space-x-3">
        <div v-for="link of links">
          <nuxt-link class="cursor-pointer text-white" :to="link.path">{{
            link.name
          }}</nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
