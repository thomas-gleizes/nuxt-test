<script setup lang="ts">
import { css } from "../../../styled-system/css";

const links = ref([
  { name: "Animes", path: "/animes" },
  { name: "Mangas", path: "/mangas" },
]);
</script>

<template>
  <header :class="css({ mt: 3, w: '95%', mx: 'auto' })">
    <div
      :class="
        css({
          px: 5,
          py: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgGradient: 'to-br',
          gradientFrom: 'blue.700',
          gradientTo: 'blue.950',
          backdropBlur: 'shadow',
          shadow: 'md',
          rounded: 'md',
        })
      "
    >
      <h2 :class="css({ color: 'white', fontWeight: 'bold', fontSize: 'xl' })">
        <nuxt-link to="/">Nuxt</nuxt-link>
      </h2>
      <nav :class="css({ display: 'flex' })">
        <div v-for="link of links">
          <nuxt-link
            :class="css({ cursor: 'pointer', color: 'white', mx: 2 })"
            :to="link.path"
            >{{ link.name }}
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
