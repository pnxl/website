<template>
  <div
    id="app"
    class="min-h-screen min-w-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
