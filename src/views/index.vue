<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="body">
    <img src="/images/frame.png" alt="frame" />
    <div class="btn-container">
      <button class="btn" @click="() => router.push('/countries')">
        <img src="/images/ico-countries.svg" alt="ico-countries" />
        Countries
      </button>
      <button class="btn">
        <img src="/images/ico-disciplines.svg" alt="ico-countries" />
        Disciplines
      </button>
    </div>
  </main>
</template>
