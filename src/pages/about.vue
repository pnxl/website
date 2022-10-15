<template>
  <Navbar />
  <main class="flex flex-col gap-16">
    <section id="about" class="flex flex-col gap-8">
      <div class="flex flex-col gap-6">
        <div class="flex gap-4 text-5xl">
          <IconHandPeace class="my-auto hidden md:block" />
          <h1 class="my-auto w-fit font-bold">About Me</h1>
        </div>
        <figure
          class="flex flex-col gap-2 text-gray-500 transition hover:text-gray-800 dark:hover:text-gray-400"
        >
          <img
            src="@/assets/images/pages/about/banner.png"
            class="aspect-[21/9] rounded-xl object-cover"
            alt="A trip to Central Park with some friends"
          />
          <figcaption>A trip to Central Park with some friends</figcaption>
        </figure>
      </div>

      <div class="flex flex-col gap-8">
        <p class="font-medium text-gray-700 dark:text-gray-300">
          Hey there! I'm a full-stack engineer from Indonesia. I care about
          almost everything that involves technology; from designing and
          programming different kinds software, to understanding how the
          internet works together, and lots of more things!
        </p>
        <p class="font-medium text-gray-700 dark:text-gray-300">
          I love learning more about these things every day, and aim to use my
          knowledge to further understand how or why the technology around us
          works. Coding since ten, I've learned a lot about core programming
          principles, collaboration with multiple people, and so much more.
        </p>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import Footer from "@/components/global/Footer.vue";

import IconHandPeace from "virtual:icons/mdi/hand-peace";
</script>
