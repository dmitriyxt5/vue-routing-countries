<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const countries = ref("");
onMounted(() => {
  fetch("http://localhost:3000/countries")
    .then((res) => res.json())
    .then((res) => {
      countries.value = res;
    });
});
</script>

<template>
  <main class="body">
    <div class="btn-container">
      <button
        v-for="country in countries"
        :key="country"
        @click="
          router.push({
            path: '/country',
            query: { country: JSON.stringify(country) },
          })
        "
        class="btn"
      >
        <img
          :src="'/images/flags/' + country.name + '.png'"
          :alt="country.name"
        />
        {{ country.name }}
      </button>
    </div>
  </main>
</template>
