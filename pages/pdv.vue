<script setup lang="ts">
import Nav from '~/components/pdv/nav.vue';
import Content from '~/components/pdv/content.vue';
import Footer from '~/components/pdv/footer.vue';
definePageMeta({ middleware: 'auth' })
</script>

<template>
    <div class="flex flex-col min-h-[100vh] w-full">
        <div>
            <Nav />
        </div>
        <div class="flex w-full mt-5 gap-x-6 px-8">
            <Content />
        </div>
        <div class="mt-auto">
            <Footer />
        </div>
    </div>
</template>