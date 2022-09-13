<template>
  <div
    id="app"
    class="min-h-screen min-w-full bg-gradient-to-bl from-gray-100 to-[#dae2f1] text-gray-800 selection:bg-indigo-400 selection:text-white dark:from-[#070a11] dark:to-gray-900 dark:text-gray-200 dark:selection:bg-indigo-700 md:flex md:justify-center"
  >
    <div class="px-4 py-8 md:w-[48rem] md:py-16">
      <router-view />
    </div>
  </div>
</template>
