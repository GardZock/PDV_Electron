<script setup lang="ts">
function handleKeyDown(event: KeyboardEvent) {

const shortkeys: Record<string, () => void> = {
  'F1': () => {},
  'F2': () => {},
  'F4': () => {},
  'F10': () => {},
}

return shortkeys[event.key]();
}
onMounted(() => {
window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
    <footer class="flex w-full justify-between">
        <div class="flex gap-10 bg-gradient-to-tr from-[#9c16e3] to-[#1866fd] p-10 rounded-r-3xl text-white">
            <div class="border-r pr-10 border-r-white">
                <p class="font-bold">OPERADOR</p>
                <p><i>Lucas Vinicius</i></p>
            </div>
            <div>
                <p class="font-bold">PEDIDOS EM ABERTO</p>
                <p><i>[F10]</i></p>
            </div>
        </div>
        <div class="px-10 flex items-center">
            <ul class="flex gap-5">
                <li>
                    <UButton icon="i-heroicons-question-mark-circle" label="Ajuda [F1]" color="yellow" size="xl"></UButton>
                </li>
                <li>
                    <UButton icon="i-heroicons-x-circle" label="Cancelar [F2]" color="red" size="xl"></UButton>
                </li>
                <li>
                    <UButton icon="i-heroicons-shopping-cart" label="Realizar Pagamento [F4]" color="green" size="xl" :trailing="false"></UButton>
                </li>
            </ul>
        </div>
    </footer>
</template>