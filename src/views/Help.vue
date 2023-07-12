<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-[#9DBBF8]">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] h-[300px] py-20"
    >
      <h1 class="text-4xl font-bold text-center">How can we help?</h1>
      <div
        class="flex bg-white w-1/2 mx-auto py-2 px-3 items-center rounded-3xl mt-8"
      >
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          class="text-xl font-light text-[#777]"
        />
        <input
          type="text"
          class="w-full text-base ml-2 border-0 outline-0 text-[#777]"
          placeholder="search"
        />
      </div>
    </div>
  </div>
  <div class="bg-[rgba(255, 255, 255, 1)]">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] lg:px-4 md:max-w-[768px] sm:max-w-[640px] py-20 px-6 xl:px-0"
    >
      <div
        class="w-full grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 lg:gap-8 xl:gap-8 gap-5"
      >
        <div class="bg-white shadow-lg py-7 px-8 rounded-md">
          <h4 class="text-xl font-extrabold text-center">Getting Started</h4>
          <p class="text-lg text-center">
            Understand the basics of Signal on Android, iOS, and Desktop.
          </p>
        </div>
        <div class="bg-white shadow-lg py-7 px-8 rounded-md">
          <h4 class="text-xl font-extrabold text-center">Features</h4>
          <p class="text-lg text-center">
            Explore rich features of private messaging.
          </p>
        </div>
        <div class="bg-white shadow-lg py-7 px-8 rounded-md">
          <h4 class="text-xl font-extrabold text-center">Security</h4>
          <p class="text-lg text-center">
            This section contains common questions regarding safety and
            reliability of the technology in the apps.
          </p>
        </div>
      </div>

      <div
        class="w-full grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 lg:gap-8 xl:gap-8 gap-5 mt-8"
      >
        <div class="bg-white shadow-lg py-5 px-8 rounded-md">
          <h4 class="text-xl font-extrabold text-center">Troubleshooting</h4>
        </div>
        <div class="bg-white shadow-lg py-5 px-8 rounded-md">
          <h4 class="text-xl font-extrabold text-center">General</h4>
        </div>
      </div>
    </div>
  </div>
</template>
