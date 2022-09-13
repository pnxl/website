<template>
  <div class="mb-16 w-full">
    <div class="flex gap-8 font-mono">
      <router-link
        to="/"
        :class="
          $route.path === '/'
            ? `cursor-default font-semibold text-indigo-600 dark:text-indigo-300`
            : `transition hover:text-indigo-700 hover:underline dark:hover:text-indigo-200`
        "
      >
        /index
      </router-link>
    </div>
  </div>
</template>
