<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const countries = ref("");
const selectedCountry = JSON.parse(route.query.country);
const medals = route.query.medals;
const selectedSum =
  selectedCountry.medals.gold +
  selectedCountry.medals.silver +
  selectedCountry.medals.bronze;

const parseMedals = ref("");
onMounted(() => {
  console.log(selectedCountry.disciplines);

  parseMedals.value = selectedCountry.disciplines.map((element) => {
    return {
      name: element.name,
      medals: element.gold + element.silver + element.bronze,
    };
  });
  console.log(parseMedals.value, "parseMedals");
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
      <div class="body__medals">
        <p class="body__p">{{ medals }} medals</p>
        <p class="body__p body__p-sum">{{ selectedSum }}</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Discipline</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medals in parseMedals" :key="medals">
          <td>{{ medals.name }}</td>
          <td>{{ medals.medals }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style>
.body__medals {
  display: flex;
  flex-direction: column;
}
.body__p-sum {
  font-size: 32px;
  line-height: 32px;
}
.body__p {
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
}
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
}
</style>
