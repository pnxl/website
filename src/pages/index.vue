<template>
  <Navbar />
  <main class="flex flex-col gap-12">
    <section id="introduction" class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h3 class="text-3xl font-semibold">{{ randomiseGreeting() }} 👋🏼</h3>
        <h1
          class="w-fit animate-gradient-x bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent"
        >
          {{ randomiseIntro() }}
        </h1>
      </div>
      <p class="text-grey-700 font-medium dark:text-gray-300">
        Welcome to my small cozy corner of the internet! I'm a 13-year-old guy
        based in Indonesia, and is a self-taught developer. Currently, pursuing
        full-stack development. Make yourself comfortable, and I hope you enjoy
        your stay!
      </p>
    </section>
    <section id="what-i-do" class="flex flex-col gap-4">
      <div class="flex gap-2">
        <IconThoughtBubble class="my-auto text-3xl" />
        <h2 class="my-auto text-4xl font-semibold">What do I do?</h2>
      </div>
      <p class="text-grey-700 dark:text-gray-300">
        I like everything that involves technology; from designing and
        programming different kinds software, to understanding how the internet
        works together, to cybersecurity, systems, and so much more. I strive to
        learn more about these things every day, and utilize my knowledge to
        further understand how or why the technology around us works.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import IconThoughtBubble from "virtual:icons/mdi/thought-bubble";

const randomiseGreeting = () => {
  const greetings: Array<string> = [
    "Howdy!",
    "Hey there!",
    "Hi there!",
    "Hello!",
    "Hello there!",
    "Nice to meet you!",
    "Good to see you!",
    "It's great to see you!",
    "Lovely to meet you!",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
};

const randomiseIntro = () => {
  const intro: Array<String> = [
    "Name's {{NAME}}.",
    "I'm {{NAME}}.",
    "{{NAME}} here.",
    "My name is {{NAME}}.",
  ];
  return intro[Math.floor(Math.random() * intro.length)].replace(
    "{{NAME}}",
    "Jason"
  );
};
</script>
