<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white font-sans fixed top-0 left-0 right-0 z-50">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] lg:py-4 md:py-4 xl:py-4 xl:pl-0 pl-4"
    >
      <div class="flex items-center">
        <div class="w-36">
          <img
            class="w-full"
            src="https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261c75220b9904da4d8b2ffc19a761ff.png"
            alt=""
          />
        </div>
        <div class="w-full">
          <ul class="w-full hidden lg:flex items-center justify-end">
            <li
              v-for="navItem in navItems"
              :key="navItem.name"
              class="py-2 px-4 text-base font-sans font-inter hover:text-blue-500 text-slate-950"
            >
              <router-link :to="{ name: navItem.name, params: {} }">
                {{ navItem.text }}
                <font-awesome-icon
                  :icon="['fab', navItem.icon]"
                  class="text-2xl"
                />
              </router-link>
            </li>
            <li
              class="py-2 px-4 text-base font-sans font-inter hover:text-blue-500 text-slate-950"
            >
              <font-awesome-icon :icon="['fas', 'globe']" />
              Français
            </li>
          </ul>
        </div>
        <div
          @click="handleToggle"
          class="flex lg:hidden justify-center items-center w-24 h-14 text-xl text-slate-400 font-light"
        >
          <font-awesome-icon
            :icon="['fas', icon]"
            :class="{ 'icon-transition': isElementVisible }"
          />
        </div>
      </div>
      <ul v-if="isElementVisible" class="w-full items-center" id="mobile-nav">
        <li
          v-for="navItem in navItems"
          :key="navItem.name"
          class="py-2 px-4 text-base font-sans font-inter hover:text-blue-500 text-slate-950"
        >
          <router-link :to="{ name: navItem.name, params: {} }">
            {{ navItem.text }}
            <font-awesome-icon :icon="['fab', navItem.icon]" class="text-2xl" />
          </router-link>
        </li>
        <li
          class="py-2 px-4 text-base font-sans font-inter hover:text-blue-500 text-slate-950"
        >
          <font-awesome-icon :icon="['fas', 'globe']" />
          Français
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { NAV_HEADER_ITEMS } from "@/constants/index";
export default {
  setup() {
    const isElementVisible = ref(false);
    const icon = ref("bars");
    const navItems = reactive(NAV_HEADER_ITEMS);

    const handleToggle = () => {
      isElementVisible.value = !isElementVisible.value;
      icon.value = isElementVisible.value ? "xmark" : "bars";
    };

    return { navItems, handleToggle, isElementVisible, icon };
  },
};
</script>
<style scoped>
.icon-transition {
  transition: color 0.3s;
}
</style>
