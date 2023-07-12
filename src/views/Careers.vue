<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-[#e7dfe0]">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-8"
    >
      <div class="px-3 py-16">
        <h1 class="lg:text-6xl xl:text-6xl text-[2.7rem] font-bold mb-8">
          Work that sends a message
        </h1>
        <p class="text-[1.3rem]">
          Millions of people use Signal every day to share the moments that
          matter in their lives. Join an organization that empowers users by
          making private communication simple.
        </p>
      </div>
      <div class="p-3">
        <img
          src="https://signal.org/assets/header/header-careers-63d1ed052f083ed4c0898714b73bf509de7f15598e79d7e85a04dc462431046e.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="bg-white lg:py-12 lg:px-6 xl:py-12 xl:px-6">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <div
        class="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
      >
        <div
          class="p-4"
          v-for="careersItem in careersItems"
          :key="careersItem.name"
        >
          <font-awesome-icon
            :icon="['fas', careersItem.icon]"
            class="text-4xl text-blue-600"
          />
          <h3 class="text-[1.9rem] font-bold my-4">{{ careersItem.title }}</h3>
          <p class="text-base">
            {{ careersItem.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white lg:py-12 lg:px-6 xl:py-12 xl:px-6 p-4">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <h1 class="text-[2.5rem] text-center font-bold">Open Roles</h1>
      <table class="w-full">
        <tbody>
          <tr class="">
            <td class="text-lg font-bold py-2 px-3">Product Designer</td>
            <td class="text-lg py-2 px-3">Remote (US Timezones)</td>
            <td class="text-blue-500 text-lg py-2 px-3">
              <a href="">View Role</a>
            </td>
          </tr>
          <tr class="border-y border-slate-200 py-2 px-3 bg-slate-50">
            <td class="text-lg font-bold py-2 px-3">Android Engineer</td>
            <td class="text-lg py-2 px-3">Remote (US Timezones)</td>
            <td class="text-blue-500 text-lg py-2 px-3">
              <a href="">View Role</a>
            </td>
          </tr>
          <tr>
            <td class="text-lg font-bold py-2 px-3">Desktop Engineer</td>
            <td class="text-lg py-2 px-3">Remote (US Timezones)</td>
            <td class="text-blue-500 text-lg py-2 px-3">
              <a href="">View Role</a>
            </td>
          </tr>
          <tr class="border-y border-slate-200 py-2 px-3 bg-slate-50">
            <td class="text-lg font-bold py-2 px-3">iOS Engineer</td>
            <td class="text-lg py-2 px-3">Remote (US Timezones)</td>
            <td class="text-blue-500 text-lg py-2 px-3">
              <a href="">View Role</a>
            </td>
          </tr>
          <tr class="">
            <td class="text-xl font-bold py-2 px-3">
              Calling & Core Libraries Engineer
            </td>
            <td class="text-lg py-2 px-3">Remote (US Timezones)</td>
            <td class="text-blue-500 text-lg py-2 px-3">
              <a href="">View Role</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-center text-xl mt-6">
        Sorry, we are not seeking interns at this time.
      </p>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { CAREERS_ITEMS } from "@/constants/index";
export default {
  setup() {
    const careersItems = reactive(CAREERS_ITEMS);
    return { careersItems };
  },
};
</script>
