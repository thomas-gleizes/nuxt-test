<script setup lang="ts">
import AppHeader from "~/components/ui/AppHeader.vue";
</script>

<template>
  <app-header />
  <main class="m-2">
    <slot />
  </main>
</template>
