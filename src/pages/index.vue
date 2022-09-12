<template>
  <Navbar />
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-semibold">{{ randomiseGreeting() }} 👋🏼</h2>
      <h1
        class="w-fit animate-gradient-x bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent"
      >
        {{ randomiseIntro() }}
      </h1>
    </div>
    <p class="text-grey-700 font-medium dark:text-gray-300">
      Welcome to my small cozy corner of the internet! I'm a 13-year-old guy
      based in Indonesia, and is a self-taught developer. I'm currently pursuing
      full-stack development, aiming to create great user interfaces on the
      front-end, with scalable and secure systems for the back-end. Make
      yourself comfortable, and I hope you enjoy your stay!
    </p>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";

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
