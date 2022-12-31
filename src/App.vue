<template>
  <div id="app">
    <div
      class="min-h-screen absolute min-w-full bg-gradient-to-bl  from-[#070a11] to-gray-900 text-gray-200 selection:bg-indigo-400 selection:text-white md:flex md:justify-center"
    >
    <Fireworks class="absolute z-10 opacity-20" />
      <div class="px-4 py-8 md:w-[48rem] md:py-16 z-20">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Fireworks from "@/components/global/Fireworks.vue";
</script>
