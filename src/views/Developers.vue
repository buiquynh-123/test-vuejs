<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-[#f6f6f6]">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 p-4"
    >
      <div>
        <h1
          class="lg:text-6xl xl:text-6xl text-[40px] font-bold lg:mt-24 xl:mt-24 xl:mb-7 lg:mb-7"
        >
          Technical information
        </h1>
        <p class="lg:text-2xl xl:text-2xl text-[16px]">
          Specifications and software libraries for developers
        </p>
      </div>
      <div>
        <img
          src="https://signal.org/assets/header/header-developers-bb72dc08f75987fe11d7afa37b5e21f0cf7dcf124c412b09633eddc7c72ef9af.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="bg-white lg:py-12 lg:px-6 xl:py-12 xl:px-6">
    <div
      class="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]"
    >
      <div class="lg:w-1/2 xl:w-1/2 p-4">
        <h1 class="lg:text-5xl xl:text-5xl text-3xl font-bold mb-4">
          Specifications
        </h1>
        <p class="lg:text-[1.5rem] xl:text-[1.5rem] text-lg">
          Encryption in messaging environments integrates many ideas which often
          need to be composed separately in different applications. We make an
          effort to break out ideas into independent specifications so that they
          can be integrated as appropriate for different projects.
        </p>
      </div>
      <div
        class="p-4 grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 xl:gap-8 gap-6"
      >
        <div>
          <div>
            <h1
              class="lg:text-[1.04rem] xl:text-[1.04rem] text-lg font-bold text-blue-600 mb-4"
            >
              XEdDSA and VXEdDSA
            </h1>
            <p class="text-base font-normal">
              This document describes how to create and verify EdDSA-compatible
              signatures using public key and private key formats initially
              defined for the X25519 and X448 elliptic curve Diffie-Hellman
              functions. This document also describes "VXEdDSA" which extends
              XEdDSA to make it a verifiable random function, or VRF.
            </p>
          </div>
          <div class="mt-10">
            <h1 class="text-[1.04rem] font-bold text-blue-600 mb-4">X3DH</h1>
            <p class="text-base font-normal">
              This document describes the "X3DH" (or "Extended Triple
              Diffie-Hellman") key agreement protocol. X3DH establishes a shared
              secret key between two parties who mutually authenticate each
              other based on public keys. X3DH provides forward secrecy and
              cryptographic deniability.
            </p>
          </div>
        </div>

        <div>
          <div>
            <h1 class="text-[1.04rem] font-bold text-blue-600 mb-4">
              Double Ratchet
            </h1>
            <p class="text-base font-normal">
              This document describes the Double Ratchet algorithm, which is
              used by two parties to exchange encrypted messages based on a
              shared secret key. The parties derive new keys for every Double
              Ratchet message so that earlier keys cannot be calculated from
              later ones. The parties also send Diffie-Hellman public values
              attached to their messages. The results of Diffie-Hellman
              calculations are mixed into the derived keys so that later keys
              cannot be calculated from earlier ones. These properties give some
              protection to earlier or later encrypted messages in case of a
              compromise of a party's keys.
            </p>
          </div>
          <div class="lg:mt-10 mt-10">
            <h1 class="text-[1.04rem] font-bold text-blue-600 mb-4">Sesame</h1>
            <p class="text-base font-normal">
              This document describes the Sesame algorithm for managing message
              encryption sessions in an asynchronous and multi-device setting.
            </p>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h1 class="lg:text-[40px] xl:text-[40px] text-[28px] font-bold">
          Software libraries
        </h1>
        <p class="text-base text-blue-600 font-bold">Signal Protocol library</p>
      </div>
    </div>
  </div>
</template>
