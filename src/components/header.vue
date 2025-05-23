<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const thisPath = ref("");
watch(route, () => {
  thisPath.value = route.path;
});

const pushBack = () => {
  console.log(thisPath.value);
  if (thisPath.value == "/countries") {
    router.push("/");
  } else if (thisPath.value == "/country") router.push("/countries");
  else if (thisPath.value == "/medals") router.push("/country");
  else {
    router.push("/");
  }
};
</script>
<template>
  <header v-if="thisPath === '/'" class="header">
    <img class="header__logo" src="/images/logo-white.png" alt="logo" />
  </header>
  <header class="header__another" v-else>
    <img
      class="ago"
      @click="() => pushBack()"
      src="/images/ico-prev.svg"
      alt="ico-prev"
    />
    <img class="header__logo-sm" src="/images/logo-sm-white.png" alt="logo" />
  </header>
</template>
<style>
.ago {
  cursor: pointer;
}
.header {
  padding: 20px 10px;
}

.header__another {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
}
.header__logo-sm {
  display: flex;
  /* justify-content: space-b; */
  align-items: center;
  /* margin: 0 auto; */
}
.header__logo {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
