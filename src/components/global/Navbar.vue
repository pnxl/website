<template>
  <div class="mb-16 w-full">
    <div class="flex gap-8 font-mono">
      <router-link
        to="/"
        :class="
          $route.path === '/'
            ? `cursor-default font-semibold text-indigo-300`
            : `underline transition hover:text-indigo-200`
        "
      >
        ~/index
      </router-link>
      <router-link
        to="/about"
        :class="
          $route.path.startsWith('/about')
            ? `cursor-default font-semibold text-indigo-300`
            : `underline transition hover:text-indigo-200`
        "
      >
        ~/about
      </router-link>
      <a
        href="https://notes.pnxl.tech"
        class="underline transition hover:text-indigo-200"
      >
        ../notes
    </a>
    </div>
  </div>
</template>
