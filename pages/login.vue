<script setup lang="ts">
import LoginForm from '~/components/login_form.vue';
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})
</script>

<template>
    <div class="bg-gradient-to-tr from-[#9c16e3] to-[#1866fd]">
        <div class="flex justify-center items-center w-full h-[100vh]">
            <LoginForm />
        </div>
    </div>
</template>