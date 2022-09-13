<template>
  <Navbar />
  <main class="flex flex-col gap-16">
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
    <section id="technologies" class="flex flex-col gap-4">
      <div class="flex gap-2">
        <IconAtomVariant class="my-auto text-3xl" />
        <h2 class="my-auto text-4xl font-semibold">Technologies</h2>
      </div>
      <p class="text-grey-700 dark:text-gray-300">
        I use a wide range of tools to streamline my development process and
        increase the quality of my code. Below is a list of technologies and
        languages I've had experience with in the past and/or currently use.
      </p>
      <div class="grid justify-between gap-4 md:grid-cols-4">
        <div class="flex gap-2">
          <IconLanguageHtml5 class="my-auto text-xl" />
          <span class="my-auto">HTML</span>
        </div>
        <div class="flex gap-2">
          <IconLanguageCss3 class="my-auto text-xl" />
          <span class="my-auto">CSS</span>
        </div>
        <div class="flex gap-2">
          <IconLanguageJavascript class="my-auto text-xl" />
          <span class="my-auto">JavaScript</span>
        </div>
        <div class="flex gap-2">
          <IconLanguageTypescript class="my-auto text-xl" />
          <span class="my-auto">TypeScript</span>
        </div>
        <div class="flex gap-2">
          <IconNodejs class="my-auto text-xl" />
          <span class="my-auto">Node.js</span>
        </div>
        <div class="flex gap-2">
          <IconTailwind class="my-auto text-xl" />
          <span class="my-auto">Tailwind CSS</span>
        </div>
        <div class="flex gap-2">
          <IconReact class="my-auto text-xl" />
          <span class="my-auto">React</span>
        </div>
        <div class="flex gap-2">
          <IconVuejs class="my-auto text-xl" />
          <span class="my-auto">Vue</span>
        </div>
        <div class="flex gap-2">
          <IconLanguagePython class="my-auto text-xl" />
          <span class="my-auto">Python</span>
        </div>
        <div class="flex gap-2">
          <IconBash class="my-auto text-xl" />
          <span class="my-auto">Bash</span>
        </div>
        <div class="flex gap-2">
          <IconPowershell class="my-auto text-xl" />
          <span class="my-auto">PowerShell</span>
        </div>
        <div class="flex gap-2">
          <IconGit class="my-auto text-xl" />
          <span class="my-auto">Git</span>
        </div>
      </div>
    </section>
    <section id="projects" class="flex flex-col gap-4">
      <div class="flex gap-2">
        <IconTools class="my-auto text-3xl" />
        <h2 class="my-auto text-4xl font-semibold">My projects</h2>
      </div>
      <p class="text-grey-700 dark:text-gray-300">
        In my free time, I like to code. I like working on open-source projects
        that I've published on GitHub, or that I've contributed to other
        projects!
      </p>
      <div class="grid justify-between gap-4 md:grid-cols-2">
        <a
          href="https://github.com/pnxl/website"
          class="flex h-36 flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 transition hover:border-indigo-500 dark:border-gray-700 dark:hover:border-indigo-400"
        >
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold">website</h4>
            <p class="text-ellipsis text-sm">
              This repository contains this website, the one you're currently
              viewing!
            </p>
          </div>
          <div class="flex gap-4">
            <div class="flex gap-2">
              <div
                class="my-auto aspect-square h-fit rounded-full bg-green-500 p-1"
              ></div>
              <span class="my-auto text-sm">Vue</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/trobonox/pokaimon"
          class="flex h-36 flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 transition hover:border-indigo-500 dark:border-gray-700 dark:hover:border-indigo-400"
        >
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold">pokaimon</h4>
            <p class="text-ellipsis text-sm">
              Genshin Impact themed collectible game with mechanics similar to
              Pokemon.
            </p>
          </div>
          <div class="flex gap-4">
            <div class="flex gap-2">
              <div
                class="my-auto aspect-square h-fit rounded-full bg-green-500 p-1"
              ></div>
              <span class="my-auto text-sm">Vue</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/pnxl/d.js"
          class="flex h-36 flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 transition hover:border-indigo-500 dark:border-gray-700 dark:hover:border-indigo-400"
        >
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold">d.js</h4>
            <p class="text-ellipsis text-sm">template for d.js bots</p>
          </div>
          <div class="flex gap-4">
            <div class="flex gap-2">
              <div
                class="my-auto aspect-square h-fit rounded-full bg-yellow-500 p-1"
              ></div>
              <span class="my-auto text-sm">JavaScript</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/pnxl/start"
          class="flex h-36 flex-col justify-between gap-4 rounded-xl border-2 border-gray-400 p-4 transition hover:border-indigo-500 dark:border-gray-700 dark:hover:border-indigo-400"
        >
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <h4 class="font-semibold">start</h4>
              <div class="flex gap-1">
                <IconSourceBranch
                  class="my-auto text-sm text-gray-600 dark:text-gray-400"
                />
                <p class="my-auto text-sm text-gray-600 dark:text-gray-400">
                  Forked from trobonox/startpage
                </p>
              </div>
            </div>
            <p class="text-ellipsis text-sm">
              custom startpage with useful links
            </p>
          </div>
          <div class="flex gap-4">
            <div class="flex gap-2">
              <div
                class="my-auto aspect-square h-fit rounded-full bg-orange-500 p-1"
              ></div>
              <span class="my-auto text-sm">HTML</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/global/Navbar.vue";
import Footer from "@/components/global/Footer.vue";

import IconThoughtBubble from "virtual:icons/mdi/thought-bubble";
import IconAtomVariant from "virtual:icons/mdi/atom-variant";

import IconLanguageHtml5 from "virtual:icons/mdi/language-html5";
import IconLanguageCss3 from "virtual:icons/mdi/language-css3";
import IconLanguageJavascript from "virtual:icons/mdi/language-javascript";
import IconLanguageTypescript from "virtual:icons/mdi/language-typescript";
import IconNodejs from "virtual:icons/mdi/nodejs";
import IconTailwind from "virtual:icons/mdi/tailwind";
import IconReact from "virtual:icons/mdi/react";
import IconVuejs from "virtual:icons/mdi/vuejs";
import IconLanguagePython from "virtual:icons/mdi/language-python";
import IconBash from "virtual:icons/mdi/bash";
import IconPowershell from "virtual:icons/mdi/powershell";
import IconGit from "virtual:icons/mdi/git";

import IconTools from "virtual:icons/mdi/tools";
import IconSourceBranch from "virtual:icons/mdi/source-branch";

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
