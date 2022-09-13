<template>
  <Navbar />
  <main class="flex flex-col gap-16">
    <section id="introduction" class="flex flex-col gap-8">
      <div class="flex flex-col gap-6">
        <div class="flex gap-4 text-5xl">
          <IconScriptText class="my-auto hidden md:block" />
          <h1 class="my-auto w-fit font-bold">Licenses and Credits</h1>
        </div>
      </div>
      <p class="font-medium text-gray-700 dark:text-gray-300">
        This website takes advantage of external packages using open-source
        licenses, and I would like to give attribution to them.
      </p>
    </section>
    <section id="libraries" class="flex flex-col gap-4">
      <h2 class="my-auto w-fit text-4xl font-bold">License Notices</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <div
          class="flex flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 dark:border-gray-700"
        >
          <div class="flex flex-col gap-1">
            <h4 class="text-lg font-semibold">Vue</h4>
            <p>© 2013-present Yuxi (Evan) You</p>
            <p>Licensed under the MIT license.</p>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 dark:border-gray-700"
        >
          <div class="flex flex-col gap-1">
            <h4 class="text-lg font-semibold">vue-router</h4>
            <p>© 2013-present Yuxi (Evan) You</p>
            <p>Licensed under the MIT license.</p>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 dark:border-gray-700"
        >
          <div class="flex flex-col gap-1">
            <h4 class="text-lg font-semibold">Tailwind CSS</h4>
            <p>© Tailwind Labs, Inc.</p>
            <p>Licensed under the MIT license.</p>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 dark:border-gray-700"
        >
          <div class="flex flex-col gap-1">
            <h4 class="text-lg font-semibold">Unplugin Icons</h4>
            <p>© 2020 Anthony Fu</p>
            <p>Licensed under the MIT license.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="artwork" class="flex flex-col gap-4">
      <h2 class="my-auto w-fit text-4xl font-bold">Artwork Credits</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <div
          class="flex flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 dark:border-gray-700"
        >
          <div class="flex flex-col gap-1">
            <h4 class="text-lg font-semibold">Material Design Icons</h4>
            <p>© Google, Inc.</p>
            <p>Licensed under the Apache 2.0 license.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import Footer from "@/components/global/Footer.vue";

import IconScriptText from "virtual:icons/mdi/script-text";
</script>
