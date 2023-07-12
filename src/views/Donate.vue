<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] border-b-2 border-slate-100"
    >
      <div>
        <h1 class="text-3xl font-bold text-center my-6">Donate to Signal</h1>
        <div class="flex justify-center items-center">
          <p class="text-lg hover:underline text-[#3273dc]">
            Or donate with cryptocurrency
          </p>
          <font-awesome-icon
            :icon="['fas', 'angles-right']"
            class="text-xs ml-1 text-[#3273dc]"
          />
        </div>
      </div>
      <div
        class="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 py-10"
      >
        <div class="lg:p-4 xl:p-4 mx-auto lg:w-4/5 xl:w-4/5 md:w-4/5 w-1/2">
          <div
            class="h-[150px] bg-[#3273dc]"
            :class="{ 'h-[90px]': currentStep !== 3 }"
          >
            <div class="flex justify-around items-center py-6">
              <font-awesome-icon
                :icon="['fas', 'arrow-left']"
                class="cursor-pointer text-[rgba(255,255,255,0.7)] text-xl"
              />
              <div>
                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="cursor-pointer text-[rgba(255,255,255,0.7)]"
                  @click="handleChangePage(1)"
                />
                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="cursor-pointer text-[rgba(255,255,255,0.7)] mx-3"
                  @click="handleChangePage(2)"
                />
                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  class="cursor-pointer text-[rgba(255,255,255,0.7)]"
                  @click="handleChangePage(3)"
                />
              </div>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="cursor-pointer text-[rgba(255,255,255,0.7)] text-xl"
              />
            </div>

            <div
              class="grid grid-cols-3 justify-around items-center"
              v-if="currentStep === 3"
            >
              <div class="text-center text-white">
                <font-awesome-icon :icon="['fas', 'credit-card']" />
                <p class="font-bold">CARTE</p>
              </div>
              <div class="text-center text-white">
                <font-awesome-icon :icon="['fab', 'paypal']" />
                <p class="font-bold">PAYPAL</p>
              </div>
              <div class="text-center text-white">
                <font-awesome-icon :icon="['fas', 'building-columns']" />
                <p class="font-bold">BANK TRANSFER</p>
              </div>
            </div>
          </div>

          <div class="border border-slate-200">
            <div
              class="hidden pb-8"
              :class="{
                'show-block': currentStep === 1,
                'hidden-block': currentStep === 2 || currentStep === 3,
              }"
            >
              <form
                action=""
                @submit.prevent="onSubmit"
                class="flex justify-center"
              >
                <div class="mt-4">
                  <select
                    name=""
                    id=""
                    class="w-full outline-none bg-inherit border-b border-slate-50 px-4 py-2"
                  >
                    <option class="opacity-10" value="">
                      Australian Dollar (AUD)
                    </option>
                    <option class="opacity-10" value="">
                      US Dollars (USD)
                    </option>
                    <option class="opacity-10" value="">
                      Brazilian Real (BRL)
                    </option>
                    <option class="opacity-10" value="">
                      British Pound Sterling (GBP)
                    </option>
                  </select>
                  <div class="grid grid-cols-3 gap-4 my-8">
                    <div
                      class="border border-slate-300 h-14 flex items-center text-center rounded-md"
                    >
                      <div class="w-full mx-1">
                        <span class="text-xl">$</span>
                        <span class="text-xl">5</span>
                      </div>
                    </div>
                    <div
                      class="border border-slate-300 h-14 flex items-center text-center rounded-md"
                    >
                      <div class="w-full mx-1">
                        <span class="text-xl">$</span>
                        <span class="text-xl">5</span>
                      </div>
                    </div>
                    <div
                      class="border border-slate-300 h-14 flex items-center text-center rounded-md"
                    >
                      <div class="w-full mx-1">
                        <span class="text-xl">$</span>
                        <span class="text-xl">5</span>
                      </div>
                    </div>
                    <div
                      class="border border-slate-300 h-14 flex items-center text-center rounded-md"
                    >
                      <div class="w-full mx-1">
                        <span class="text-xl">$</span>
                        <span class="text-xl">5</span>
                      </div>
                    </div>
                    <div
                      class="border border-slate-300 h-14 flex items-center text-center rounded-md"
                    >
                      <div class="w-full mx-1">
                        <span class="text-xl">$</span>
                        <span class="text-xl">5</span>
                      </div>
                    </div>
                    <div
                      class="border border-slate-300 h-14 flex items-center text-center rounded-md"
                    >
                      <div class="w-full mx-1">
                        <span class="text-xl">$</span>
                        <span class="text-xl">5</span>
                      </div>
                    </div>
                  </div>
                  <div class="border border-slate-300 p-4">
                    <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                    <input
                      type="text"
                      class="outline-none ml-2"
                      placeholder="Montant personnalise"
                    />
                  </div>
                  <div class="my-4">
                    <input
                      type="checkbox"
                      class="outline-none h-4 w-4"
                      placeholder="Montant personnalise"
                    />
                    <label for="" class="ml-2"
                      >Écrivez-nous un commentaire</label
                    >
                  </div>
                  <div>
                    <button class="bg-[#2C6BED] w-full py-4 text-xl text-white">
                      Suivant
                      <font-awesome-icon
                        :icon="['fas', 'arrow-right']"
                        class="ml-2"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="hidden pb-8"
              :class="{
                'show-block': currentStep === 2,
                'hidden-block': currentStep === 1 || currentStep === 3,
              }"
            >
              <form
                action=""
                @submit.prevent="onSubmit"
                class="w-full flex justify-center"
              >
                <div class="w-full px-6 mt-4">
                  <div class="border-b-2 border-blue-500 pb-2 my-8">
                    <div>
                      <font-awesome-icon
                        :icon="['fas', 'user']"
                        class="text-slate-400"
                      />
                      <input
                        type="text"
                        class="outline-none ml-2 text-lg"
                        placeholder="Prenom"
                      />
                    </div>
                  </div>
                  <div class="border-b-2 border-blue-500 pb-2">
                    <div>
                      <input
                        type="text"
                        class="outline-none text-lg"
                        placeholder="Nom de famille"
                      />
                    </div>
                  </div>
                  <div class="my-6">
                    <input
                      type="checkbox"
                      class="outline-none h-4 w-4"
                      placeholder="Montant personnalise"
                    />
                    <label for="" class="ml-2"
                      >Écrivez-nous un commentaire</label
                    >
                  </div>
                  <div class="border-b-2 border-blue-500 pb-2 my-8">
                    <div>
                      <font-awesome-icon
                        :icon="['fas', 'envelope']"
                        class="text-slate-400"
                      />
                      <input
                        type="text"
                        class="outline-none ml-2 text-lg"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <button class="bg-[#2C6BED] w-full py-4 text-xl text-white">
                      Suivant
                      <font-awesome-icon
                        :icon="['fas', 'arrow-right']"
                        class="ml-2"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="hidden pb-8"
              :class="{
                'show-block': currentStep === 3,
                'hidden-block': currentStep === 1 || currentStep === 2,
              }"
            >
              <div class="grid grid-cols-7 p-6 gap-4">
                <img
                  src="https://donorbox.org/assets/visa-003e26ca10b66da766feafa59752e25523253424c7734fbd49b8fcb2c056aa8e.png"
                  alt=""
                />
                <img
                  src="https://donorbox.org/assets/mc-2f54071b2daed0510090e26c28e419ea2256a9165c871cde2c8f641fb99b6bd1.png"
                  alt=""
                />
                <img
                  src="https://donorbox.org/assets/amex-1620a53c38e3c3c8b0c63804542a9fccc86ffc845bb2366df5aab8ecd9eee9fc.png"
                  alt=""
                />
                <img
                  src="https://donorbox.org/assets/discover-edf845bfbafa10095e5ca5371d08e26705f63266afb77da278ab796786c55dd2.png"
                  alt=""
                />
                <img
                  src="https://donorbox.org/assets/jcb-55226217bb4f70c2d2426471154f92cc3ce5ff5e977bba3902c9832ce885f350.png"
                  alt=""
                />
                <img
                  src="https://donorbox.org/assets/diner_club-cc60a2034ba15d22ad6977daa5cadfc09a105a0c49c40897ae892220b5490140.png"
                  alt=""
                />
                <img
                  src="https://donorbox.org/assets/unionpay-e2bedaa15102d613885b04f5a1ccd1696cec6565daea822d2cae0dff06e1e98f.png"
                  alt=""
                />
              </div>
              <form action="" class="w-full flex">
                <div class="w-full px-6 mt-4">
                  <div class="border-b-2 border-blue-500 pb-2 my-8">
                    <div class="flex justify-around items-center">
                      <font-awesome-icon
                        :icon="['fas', 'credit-card']"
                        class="text-slate-500"
                      />
                      <input
                        type="text"
                        placeholder="Numero de carte"
                        class="outline-none ml-1 w-full"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'money-check']"
                        class="text-2xl text-slate-400"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="border-b-2 border-blue-500 pb-2 my-8">
                      <div class="flex justify-around items-center">
                        <font-awesome-icon
                          class="text-slate-500"
                          :icon="['fas', 'calendar']"
                        />
                        <input
                          type="text"
                          placeholder="MM/AA"
                          class="outline-none ml-1 w-full"
                        />
                      </div>
                    </div>
                    <div class="border-b-2 border-blue-500 pb-2 my-8">
                      <div class="flex justify-around items-center">
                        <font-awesome-icon
                          class="text-slate-500"
                          :icon="['fas', 'unlock-keyhole']"
                        />
                        <input
                          type="text"
                          placeholder="Numero de carte"
                          class="outline-none ml-1 w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="border-b-2 border-blue-500 pb-2 my-8">
                    <div class="flex justify-around items-center">
                      <font-awesome-icon
                        :icon="['fas', 'location-dot']"
                        class="text-slate-500"
                      />
                      <input
                        type="text"
                        placeholder="MM/AA"
                        class="outline-none ml-1 w-full"
                      />
                    </div>
                  </div>
                  <button class="flex bg-[#29B473] p-3 rounded-md text-white">
                    <font-awesome-icon
                      class="text-slate-200 mt-1 text-xl"
                      :icon="['fas', 'unlock-keyhole']"
                    />
                    <p class="lg:text-xl xl:text-xl text-base ml-1">
                      Faire un don unique de $10
                    </p>
                  </button>
                </div>
              </form>
              <div class="text-center p-3 text-xm">
                Ce formulaire est protégé par reCAPTCHA et les
                <a href="" class="text-blue-500">Règles de Confidentialité</a>
                et les
                <a href="" class="text-blue-500">Conditions d'Utilisation</a> de
                Google s'appliquent.
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 pb-4 order-1">
          <p class="text-[1.43rem] mb-4">
            The team at Signal is committed to the mission of developing open
            source privacy technology that protects free expression and enables
            secure global communication. Your contribution fuels this cause. No
            ads. No trackers. No kidding.
          </p>
          <p class="text-[1.43rem] my-4">
            Your donation helps pay for the development, servers, and bandwidth
            of an app used by millions around the world for private and
            instantaneous communication.
          </p>
          <p class="text-[1.43rem] my-4">
            If you provide an email, you will receive an email confirmation for
            your tax records. Signal Technology Foundation is an independent
            nonprofit charity and tax-exempt under section 501c3 of the Internal
            Revenue Code. Our Federal Tax ID Number is 82-4506840.
          </p>
          <p class="text-[1.43rem] my-4">
            Note: Signal is unable to offer badges if you donate here as opposed
            to using Google Pay or Apple Pay inside the Signal app.
          </p>
        </div>
      </div>
    </div>
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] py-10"
    >
      <div
        class="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1"
      >
        <div
          class="lg:p-4 xl:p-4 p-2 w-4/5 lg:w-3/5 xl:w-3/5 mx-auto shadow-md"
        >
          <div class="flex bg-green-700 p-4 rounded">
            <div
              class="rounded-md overflow-hidden lg:h-16 xl:h-16 lg:w-20 xl:w-20 h-12 w-18"
            >
              <img
                class="w-full h-full"
                src="https://static.tgbwidget.com/SignalTechnologyFoundation.jpg"
                alt=""
              />
            </div>
            <div class="ml-4">
              <h6
                class="xl:text-xl lg:text-xl text-base font-semibold text-white"
              >
                Signal Technology Foundation
              </h6>
            </div>
          </div>
          <div class="w-full flex justify-center py-20">
            <div class="w-full px-8">
              <h2 class="text-xl font-bold text-center pb-8">Choose Method</h2>
              <button
                class="lg:px-20 xl:px-20 w-full py-3 my-2 rounded-lg bg-amber-300 text-xl font-bold"
              >
                Crypto
              </button>
              <div class="grid grid-cols-2 gap-2">
                <button class="bg-slate-200 rounded-lg py-2">
                  <font-awesome-icon :icon="['fas', 'credit-card']" />
                  <span class="text-lg font-medium ml-2">Card</span>
                </button>
                <button class="bg-slate-200 rounded-lg py-2">
                  <font-awesome-icon :icon="['fas', 'chart-simple']" />
                  <span class="text-lg font-medium ml-2">Stock</span>
                </button>
              </div>
              <button class="w-full my-2 bg-slate-200 rounded-lg py-2">
                <font-awesome-icon :icon="['fas', 'chart-simple']" />
                <span class="text-lg font-medium ml-2">DAF</span>
              </button>
            </div>
          </div>
        </div>
        <div class="p-4 order-1">
          <h3 class="text-2xl font-bold text-[#363636]">
            Donate Cryptocurrency
          </h3>
          <p class="text-[1.43rem] my-4 text-[#1b1b1b]">
            Cryptocurrency donations to Signal are processed through
            <a href="" class="text-blue-500">The Giving Block.</a>
          </p>
          <p class="text-[1.43rem] my-4">
            If you want to receive a tax deduction in the US for the fair market
            value of your cryptocurrency donation, you can optionally provide an
            email address to receive a tax receipt. The Giving Block also
            supports anonymous donations.
          </p>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex xl:flex md:flex justify-center">
      <p class="text-lg text-blue-600 font-normal">
        Câu hỏi thường gặp về Nhà Ủng hộ
      </p>
      <p class="bg-slate-400 h-6 w-[1px] mx-2"></p>
      <p class="text-lg text-blue-600 font-normal">
        Chính sách Riêng tư cho Nhà Ủng hộ
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let currentStep = ref(1);
    const handleChangePage = (index) => {
      currentStep.value = index;
      console.log(currentStep);
    };
    return { handleChangePage, currentStep };
  },
};
</script>
<style scoped>
.show-block {
  display: block;
}
.hidden-block {
  display: hidden;
}
</style>
