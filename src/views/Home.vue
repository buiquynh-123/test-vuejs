<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-[#9DBBF8]">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[620px]"
    >
      <div
        class="font-sans w-full lg:flex xl:flex justify-center xl:pt-6 xl:pb-[9.5rem] lg:pt-6 lg:pb-[9.5rem] py-12 px-8"
      >
        <div class="lg:w-[56%]">
          <h1
            class="xl:text-6xl text-[2.8rem] leading-[3.25rem] lg:text-6xl font-bold mb-6 lg:mt-32"
          >
            Exprimez-vous librement
          </h1>
          <p class="lg:text-2xl xl:text-2xl text-[1.1rem] font-normal">
            Dites « Bonjour » à une expérience de messagerie différente. Un
            accent inattendu sur la confidentialité et la protection des données
            personnelles, combiné à toutes les fonctions auxquelles vous vous
            attendez.
          </p>
          <div
            class="text-xl font-semibold mt-3 bg-white lg:w-1/2 xl:w-1/2 md:w-1/3 flex items-center justify-center p-2 rounded-md"
          >
            <span class="text-blue-500 hover:text-blue-600 transition-all">
              Obtenir Signal
            </span>
            <font-awesome-icon
              class="ml-3"
              :icon="['fas', 'up-right-from-square']"
            />
          </div>
        </div>
        <div class="hidden w-3/4 lg:flex xl:flex ml-12 relative lg:mt-40">
          <img
            class="w-[9rem] xl:w-[19rem] lg:w-[14rem] lg:rotate-[18.5deg] absolute lg:left-[-0.5rem] lg:top-[-5rem]"
            src="https://signal.org/assets/features/signal-iphone-eee9210b058079bae2f5972f41b87c68a95cdca5e7bc8c878d9450663b5044c9.png"
            alt=""
          />
          <img
            class="w-[9rem] xl:w-[19rem] lg:w-[14rem] lg:rotate-[19deg] absolute lg:left-[15.5rem] lg:top-[-9rem]"
            src="https://signal.org/assets/features/signal-pixel-3ff95be5c1225215416ca118ad5adabce8b61a820f0550b2174ce3fe13831e03.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <div class="mt-[40px] pb-12 pt-20 px-8">
        <h1
          class="text-[39px] md:text-[39px] lg:text-[40px] xl:tex-[40px] leading-10 text-center font-bold mb-4"
        >
          Pourquoi utiliser Signal ?
        </h1>
        <p
          class="text-[1.15rem] md:text-[1.15rem] lg:text-xl xl:text-xl font-normal text-center"
        >
          Explorez ci-dessous afin de découvrir pourquoi Signal est une
          messagerie simple, puissante et sécurisée
        </p>
      </div>
      <div
        class="flex flex-col-reverse lg:flex-row xl:flex-row gap-10 lg:py-12 lg:px-8 px-4 py-6"
      >
        <div class="lg:w-1/3 xl:w-1/3">
          <h2
            class="lg:text-5xl xl:text-5xl text-[31px] font-bold lg:mb-8 xl:mb-8 py-3"
          >
            Partager sans insécurité
          </h2>
          <p class="lg:text-2xl xl:text-2xl text-base">
            Un chiffrement de bout en bout de pointe (propulsé par le protocole
            Signal à code source ouvert) assure la sécurité de vos
            conversations. Nous ne pouvons ni lire vos messages ni écouter vos
            appels, et personne d’autre que vous ne peut le faire. La
            confidentialité n’est pas proposée en option, c’est simplement la
            façon dont Signal fonctionne. Pour tous les messages, pour tous les
            appels, tout le temps.
          </p>
        </div>
        <div class="lg:w-[680px] xl:w-[680px] bg-[#A5CAD5] rounded-2xl">
          <div>
            <img
              src="https://signal.org/assets/features/Groups-2009b23758fe4fb3f6bb8e6cf61e41dedbeaa0a92b7734191a8565d2d7ee3cfc.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#F6F6F6]">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <div
        class="grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 justify-between gap-7 lg:py-12 lg:px-8 xl:py-12 xl:px-8 px-4 py-6"
      >
        <div
          class="shadow-md p-8 bg-white rounded-2xl"
          v-for="contentItem in contents"
          :key="contentItem.name"
        >
          <div>
            <img :src="contentItem.img" alt="" />
          </div>
          <div>
            <h3 class="text-center text-3xl font-bold">
              {{ contentItem.title }}
            </h3>
            <p class="text-center text-lg text-[#4a4a4a]">
              {{ contentItem.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <div
        class="flex flex-col-reverse lg:flex-row xl:flex-row gap-10 lg:py-12 lg:px-8 px-4 py-6"
      >
        <div class="lg:w-[35%]">
          <h1 class="lg:text-5xl xl:text-5xl text-[31px] font-bold mb-8">
            Aucune publicité, aucun traqueur, vraiment.
          </h1>
          <p class="text-xl">
            Dans Signal, il n’y a aucune publicité, aucun vendeur partenaire, ni
            aucun système de suivi inquiétant. Vous pouvez vous consacrer à
            partager les moments importants avec les personnes qui comptent pour
            vous.
          </p>
        </div>
        <div class="lg:w-[56%] rounded-2xl overflow-hidden">
          <img
            src="https://signal.org/assets/features/No-Ads-3d8c77d5daeadd4c02fd3f4343745812fd4f79406a01b4924cf53549957297e0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <div class="lg:flex xl:flex gap-10 lg:py-12 lg:px-8 px-4 py-6">
        <div class="lg:w-[56%] xl:w-[56%] rounded-2xl overflow-hidden">
          <img
            src="https://signal.org/assets/features/Nonprofit503-876fb51a00d7d9de8a2c23f94394278191947bd56a8048df5d0138cde497332f.png"
            alt=""
          />
        </div>
        <div class="lg:w-[35%] xl:w-[35%]">
          <h1
            class="lg:text-5xl xl:text-5xl text-[31px] font-bold lg:mb-8 xl:mb-8 my-4"
          >
            Gratuit pour tous
          </h1>
          <p class="lg:text-[1.4rem] xl:text-[1.4rem] text-[1.14rem]">
            Signal est un organisme à but non lucratif indépendant. Nous ne
            sommes reliés à aucune entreprise technologique importante et nous
            ne pourrons jamais être achetés par l’une d’elles. Le développement
            de notre plateforme est financé par des subventions et des dons de
            personnes comme vous.
          </p>
          <button
            class="bg-white text-xl text-[#2c6bed] border-2 border-blue-500 py-2 px-5 font-semibold mt-8 rounded-lg"
          >
            Faire un don à Signal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { CENTERED_CONTENT } from "@/constants/index";
export default {
  setup() {
    const contents = reactive(CENTERED_CONTENT);
    return { contents };
  },
};
</script>
