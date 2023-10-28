<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>animes : {{ route.params.id }}</div>
</template>

<style scoped></style>
