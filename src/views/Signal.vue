<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] lg:px-4 md:max-w-[768px] sm:max-w-[640px] py-10 px-6 xl:px-0"
  >
    <div class="grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-6">
      <div>
        <h2
          class="lg:text-[45px] xl:text-[45px] text-[28px] font-bold text-center pb-10"
        >
          Signal pour mobile
        </h2>
        <div
          class="bg-[#9dbbf8] lg:h-[300px] xl:h-[300px] rounded-xl flex items-center px-4 pt-4 flex-col justify-end mx-auto"
        >
          <img
            class="w-2/3"
            src="https://signal.org/assets/screenshots/download-mobile-63eef74262f1a3411d0e7bd2ffdcabfe863bbff53bbb394c64df572a44bb2b26.png"
            alt=""
          />
        </div>
        <div>
          <div class="grid grid-cols-2 gap-8 py-10">
            <button
              class="bg-[#2c6bed] text-white text-lg font-semibold px-3 py-2 rounded-lg"
            >
              Android
            </button>
            <button
              class="bg-[#2c6bed] text-white text-lg font-semibold px-3 py-2 rounded-lg"
            >
              IPhone ou IPad
            </button>
          </div>
          <p class="text-center text-lg">
            Ou visitez
            <a href="" class="text-blue-500">signal.org/install</a>

            à partir de votre téléphone
          </p>
        </div>
      </div>

      <div>
        <h2
          class="lg:text-[45px] xl:text-[45px] text-[28px] font-bold text-center pb-10"
        >
          Signal pour ordinateur
        </h2>
        <div
          class="bg-[#9dbbf8] lg:h-[300px] xl:h-[300px] rounded-xl flex items-center px-4 pt-4 flex-col justify-end mx-auto"
        >
          <img
            class="w-2/3"
            src="https://signal.org/assets/screenshots/download-desktop-windows-cdc181d589c36f2da3ddb9471a981c73bf7e60f6713a90a376ef731f474ab752.png"
            alt=""
          />
        </div>
        <div>
          <div class="flex justify-evenly py-10">
            <button
              class="bg-[#2c6bed] text-white text-lg font-semibold px-3 py-2 rounded-lg"
            >
              Telecharger pour Windows
            </button>
          </div>

          <div class="bg-slate-200 py-5 px-6 text-center text-[0.95rem]">
            Afin d’utiliser l’appli Signal pour ordinateur, Signal doit d’abord
            être installée sur votre téléphone.
          </div>
          <h3 class="text-center text-3xl font-bold py-5">
            Vous n’utilisez pas Windows ?
          </h3>
          <div class="text-center text-blue-500">
            <p>Signal pour Mac</p>
            <p>Signal pour Linux – distributions fondées sur Debian</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
