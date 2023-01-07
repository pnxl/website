<template>
  <div class="mt-16 flex w-full flex-col gap-8">
    <hr class="border-t-2 border-dashed border-gray-600" />
    <div
      class="flex flex-col justify-center gap-1 md:flex-row md:justify-between md:gap-0"
    >
      <div class="flex flex-col gap-1">
        <div class="flex justify-center gap-1 font-semibold md:justify-start">
          <p class="my-auto">Made</p>
          <p class="my-auto">with</p>
          <IconHeart class="my-auto text-indigo-400" />
          <p class="my-auto">by</p>
          <p class="my-auto">Jason.</p>
        </div>
        <span
          class="text-center text-sm text-gray-400 md:text-left"
          >Copyright © 2023 Pix3l_</span
        >
      </div>
      <div class="flex flex-col gap-1 text-center md:text-right">
        <a
          href="https://github.com/pnxl/website"
          class="hidden w-full justify-end gap-1 transition hover:text-indigo-200 md:flex"
        >
          <p class="underline">This project is open source!</p>
          <IconOpenInNew class="my-auto text-sm" />
        </a>
        <router-link
          to="licenses"
          :class="
            $route.path.startsWith('/licenses')
              ? `flex w-full cursor-default justify-center gap-1 text-sm text-indigo-300 md:justify-end`
              : `flex w-full justify-center gap-1 text-sm underline transition text-gray-400 hover:text-indigo-300 md:justify-end`
          "
        >
          <p>Licenses and credits</p>
          <IconArrowRight class="my-auto hidden md:block" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "virtual:icons/mdi/heart";
import IconOpenInNew from "virtual:icons/mdi/open-in-new";
import IconArrowRight from "virtual:icons/mdi/arrow-right";
</script>
