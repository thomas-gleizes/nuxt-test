<script setup lang="ts">
const page = ref<number>(0);
const limit = 20;

const result = useAsyncData(
  () =>
    fetch(
      `https://kitsu.io/api/edge/anime?page[offset]=${
        page.value * limit
      }&page[limit]=${limit}`,
    ).then((resp) => resp.json()),
  { watch: page.value },
);
</script>

<template>
  <div>
    <h1>Animes</h1>
  </div>
</template>
