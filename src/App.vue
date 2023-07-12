<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constants/index";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    console.log(route);
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
