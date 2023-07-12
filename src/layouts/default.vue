<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
  <div class="mt-[80px] z-0">
    <slot />
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Header, Footer },
};
</script>
