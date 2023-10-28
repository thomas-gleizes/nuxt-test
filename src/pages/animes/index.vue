<script setup lang="ts">
import { css } from "../../../styled-system/css";
import { NuxtImg } from "#components";

type Anime = any;

const page = ref<number>(0);
const limit = 20;

const {
  data: animes,
  pending,
  error,
} = useAsyncData(
  "animes",
  () =>
    $fetch<{ data: Anime[] }>(`https://kitsu.io/api/edge/anime`, {
      params: {
        "page[offset]": page.value * limit,
        "page[limit]": limit,
        "filter[subtype]": "TV",
        sort: "popularityRank",
      },
    }).then((resp) => resp.data),
  { watch: [page] },
);
const handleClick = () => {
  page.value++;
};
</script>

<template>
  <div v-if="pending">
    <h1>loading</h1>
  </div>
  <div :class="css({ w: '800px', mx: 'auto' })">
    <div
      v-if="!pending"
      :class="
        css({
          py: 5,
          px: 3,
          display: 'grid',
          gridGap: 3,
          gridTemplateColumns: 3,
          sm: { gridTemplateColumns: 2 },
          xl: { gridTemplateColumns: 5 },
        })
      "
    >
      <div v-for="anime of animes">
        <div :class="css({ bgColor: 'blue.700', rounded: 'sm' })">
          <nuxt-img
            :class="css({ w: 'full', rounded: 'sm' })"
            :src="anime.attributes.posterImage.small"
          />
          <div :class="css({ w: 'full' })">
            <span
              :class="
                css({
                  color: 'white',
                  textAlign: 'center',
                  textOverflow: 'hidden',
                })
              "
            >
              #{{ anime.attributes.popularityRank }} -
              {{ anime.attributes.canonicalTitle }}
            </span>
          </div>
        </div>
      </div>
      <div>
        <button @click="handleClick">click</button>
      </div>
    </div>
  </div>
  <div v-if="error">
    <h1>error</h1>
  </div>
</template>
