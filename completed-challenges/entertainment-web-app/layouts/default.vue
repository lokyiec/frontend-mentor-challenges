<script setup lang="ts"></script>

<template>
  <div class="flex flex-col lg:flex-row h-screen gap-1 overflow-visible">
    <AppNavigation class="lg:sticky lg:top-0 flex-none md:m-6 lg:m-8" />
    
    <main class="flex-1 overflow-y-auto py-16 overflow-x-visible">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
