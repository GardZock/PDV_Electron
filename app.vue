<script setup lang="ts">
useHead({
  title: 'PDV - App',
  meta: [
    { name: 'description', content: 'A PDV site.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

</script>

<template>
  <div>
    <div class="flex flex-col min-h-[100vh] max-h-[100vh] w-full">
      <NuxtPage page-key="static" class="grow h-[390px] md:h-[545px] !cursor-none" />
    </div>
    <UNotifications />
  </div>
</template>
