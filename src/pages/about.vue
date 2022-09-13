<template>
  <Navbar />
  <main class="flex flex-col gap-16">
    <section id="introduction" class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h1 class="w-fit text-5xl font-bold">About Me</h1>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import Footer from "@/components/global/Footer.vue";
</script>
