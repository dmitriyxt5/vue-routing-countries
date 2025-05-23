<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const countries = ref("");
const selectedCountry = JSON.parse(route.query.country);
const selectedSum =
  selectedCountry.medals.gold +
  selectedCountry.medals.silver +
  selectedCountry.medals.bronze;
onMounted(() => {
  console.log(selectedCountry);
});
</script>

<template>
  <main class="body">
    <div class="body__country-head">
      <h1 class="body__h1">{{ selectedCountry.name }}</h1>
      <img
        width="130"
        :src="'/images/flags/' + selectedCountry.name + '.png'"
        :alt="selectedCountry.name + 'img'"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>Gold</th>
          <th>Silver</th>
          <th>Bronze</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ selectedCountry.medals.gold }}</td>
          <td>{{ selectedCountry.medals.silver }}</td>
          <td>{{ selectedCountry.medals.bronze }}</td>
          <td>{{ selectedSum }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-container">
      <button
        @click="
          router.push({
            path: '/medals',
            query: { medals: 'gold', country: route.query.country },
          })
        "
        class="btn"
      >
        <img src="/images/medals/gold.png" :alt="gold" />
        Medals
      </button>
    </div>
  </main>
</template>

<style>
table {
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid white;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
}
.body__country-head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  gap: 10px;
}
.body__h1 {
  color: white;
  font-weight: 600;
  text-align: center;
}
</style>
