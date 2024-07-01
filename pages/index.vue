<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

function handleKeyDown(event: KeyboardEvent) {

  const shortkeys: Record<string, string> = {
    'b': 'pdv/',
    'F8': 'pdv/',
    'F9': 'login/',
  }

  if (Object.keys(shortkeys).includes(event.key)) {
    navigateTo(shortkeys[event.key])
  } else {
    return;
  }
}

function test() {
    console.log('foiii')
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
    <div class="w-full flex bg-gray-300">
        <div class="grid grid-cols-4 grid-rows-1 w-full m-5 gap-6 grid-flow-col auto-cols-max">
            <button ref="f3Button" v-on="test" class="w-full flex justify-center items-center bg-blue-500 rounded-md p-5">
                <div class="text-center">
                    <img src="../public/cart.svg" alt="Shopping cart icon" class="w-[200px]">
                    <p class="font-bold text-white text-xl">BALCÃO <br>(B)</p>
                </div>
            </button>
            <button class="w-full flex justify-center items-center bg-blue-700 rounded-md p-5">
                <div class="text-center">
                    <img src="../public/delivery-van.svg" alt="Truck icon" class="w-[200px]">
                    <p class="font-bold text-white text-xl">DELIVERY</p>
                </div>
            </button>
            <div class="w-full grid grid-rows-2 grid-cols-1 gap-y-2">
                <button class="bg-green-500 text-center flex justify-center items-center rounded-md p-5">
                    <div>
                        <img src="../public/customers.svg" alt="Customer icon" class="w-[150px]">
                        <p class="font-bold text-white text-xl">CLIENTES</p>
                    </div>
                </button>
                <button class="bg-green-800 text-center flex justify-center items-center rounded-md p-5">
                    <div>
                        <img src="../public/seller.svg" alt="Seller icon" class="w-[150px]">
                        <p class="font-bold text-white text-xl">VENDEDOR</p>
                    </div>
                </button>
            </div>
            <div class="w-full grid grid-rows-3 grid-cols-1 gap-y-2">
                <button class="bg-gray-400 text-center flex justify-center items-center rounded-md p-5">
                    <div class="flex flex-col justify-center items-center">
                        <img src="../public/briefcase.svg" alt="Briefcase icon" class="w-[100px]">
                        <p class="font-bold text-white text-xl">SANGRIA/REFORÇO DE CAIXA</p>
                    </div>
                </button>
                <button class="bg-gray-600 text-center flex justify-center items-center rounded-md p-5">
                    <div class="flex flex-col justify-center items-center">
                        <img src="../public/cart.svg" alt="Shopping cart icon" class="w-[100px]">
                        <p class="font-bold text-white text-xl">ÚLTIMAS VENDAS</p>
                    </div>
                </button>
                <button class="bg-gray-500 text-center flex justify-center items-center rounded-md p-5">
                    <div class="flex flex-col justify-center items-center">
                        <img src="../public/delivery-van.svg" alt="Truck icon" class="w-[100px]">
                        <p class="font-bold text-white text-xl">VENDAS DELIVERY</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>