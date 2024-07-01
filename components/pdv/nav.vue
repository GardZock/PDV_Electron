<script setup lang="ts">
const { signOut } = useAuth()
async function logout() {
    signOut({ callbackUrl: '/' })
}
</script>

<template>
    <div
        class="flex w-full h-[80px] px-8 gap-x-0 justify-between items-center bg-gradient-to-tr from-[#9c16e3] to-[#1866fd]">
        <div class="flex items-center p-3">
            <img src="../../public/logo.png" class="h-[45px]" alt="LOGO">
            <span class="text-white text-[1.5rem] font-[Poppins-Italic] font-bold">1.0</span>
        </div>
        <div class="text-center font-bold text-[1.3rem] font-[Poppins-Bold] text-white">
            <div>
                <p>ESTABELECIMENTO</p>
            </div>
            <div>
                <p>CAIXA 01</p>
            </div>
        </div>
        <div class="flex gap-2">
            <div>
                <UButton icon="i-heroicons-cog-6-tooth-solid" size="sm" color="gray" square variant="solid" />
            </div>
            <div>
                <UButton icon="i-heroicons-arrow-right-start-on-rectangle" size="sm" color="gray" variant="solid" label="Sair" @click="logout" trailing />
            </div>
        </div>
    </div>
</template>