<template>
  <div class="mt-16 flex w-full flex-col gap-8">
    <hr class="border-t-2 border-dashed border-gray-600" />
    <div>
      <div class="flex gap-1 font-semibold">
        <h6 class="my-auto">Made</h6>
        <h6 class="my-auto">with</h6>
        <IconHeart class="my-auto text-indigo-600 dark:text-indigo-400" />
        <h6 class="my-auto">by</h6>
        <h6 class="my-auto">Jason.</h6>
      </div>
      <span class="text-sm text-gray-600 dark:text-gray-400"
        >Copyright (c) 2022 Pix3l_</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "virtual:icons/mdi/heart";
</script>
