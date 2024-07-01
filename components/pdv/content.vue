<script setup lang="ts">
const columns = [{
    key: 'name',
    label: 'PRODUTO/SERVICO'
}, {
    key: 'quantity',
    label: 'QUANTIDADE'
}, {
    key: 'value',
    label: 'VALOR'
}, {
    key: 'discount',
    label: 'DESCONTO'
}, {
    key: 'total',
    label: 'TOTAL'
}]

interface Product {
    id: number,
    name: string,
    quantity: number,
    value: number,
    discount: number,
    total: number
}

let products: Product[] = [
    { id: 1, name: 'Abóbora', quantity: 1, value: 21.23, discount: 1.23, total: 20.00 },
    { id: 2, name: 'Maçã', quantity: 2, value: 4.50, discount: 0.50, total: 8.50 },
    { id: 3, name: 'Banana', quantity: 6, value: 1.10, discount: 0.10, total: 6.00 },
    { id: 4, name: 'Laranja', quantity: 3, value: 3.30, discount: 0.30, total: 9.60 },
    { id: 5, name: 'Tomate', quantity: 4, value: 2.75, discount: 0.25, total: 10.00 },
    { id: 6, name: 'Batata', quantity: 5, value: 1.80, discount: 0.20, total: 8.00 },
    { id: 7, name: 'Cenoura', quantity: 3, value: 2.50, discount: 0.50, total: 7.00 },
    { id: 8, name: 'Cebola', quantity: 2, value: 3.40, discount: 0.40, total: 6.80 },
    { id: 9, name: 'Alface', quantity: 1, value: 4.00, discount: 0.50, total: 3.50 },
    { id: 10, name: 'Pepino', quantity: 4, value: 1.70, discount: 0.20, total: 6.60 },
]

function addToOdd(products: Product[]) {
    return products.map(product => {
        if (product.id % 2 !== 0) {
            return { ...product, class: 'bg-gray-100' };
        }

        return product;
    });
}

products = addToOdd(products)


const q = ref('')

const filteredRows = computed(() => {
    if (!q.value) {
        return products
    }

    return products.filter((product) => {
        return Object.values(product).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})


onMounted(() => {document.getElementById('search')?.focus()})

function handleKeyDown(event: KeyboardEvent) {

const shortkeys: Record<string, () => void> = {
  'F3': () => {
    onMounted(() => {document.getElementById('search')?.focus()})
},
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
    <div class="w-1/2">
        <div>
            <p class="font-bold pb-2">Pesquisar Código do Produto [F3]</p>
            <UInput v-model="q" type="number" class="w-full" size="xl" color="white" :ui="{ size: { xl: 'text-2xl' }, color: { white: { outline: 'focus:ring-black' } } }" id="search" />
        </div>
        <div class="flex mt-10 gap-6">
            <div class="">
                <p class="font-bold pb-2">Quantidade</p>
                <UInput v-model="q" type="number" class="w-full" size="xl" color="white" :ui="{ size: { xl: 'text-2xl' }, color: { white: { outline: 'focus:ring-black' } } }" id="quantity" />
            </div>
            <div class="flex items-end">
                <p class="font-bold pr-2 text-5xl font-[Poppins-Bold]">TOTAL:</p>
                <UInput v-model="q" type="number" class="w-full" size="xl" color="gray" :ui="{ size: { xl: 'text-2xl' }, color: { gray: { outline: 'bg-gray-200' } } }" disabled/>
            </div>
        </div>
        <div class="mt-10">
            <UButton size="xl" color="blue" :ui="{ size: { xl: 'w-full h-[80px] text-xl' }}" block>INCLUIR <i>(Enter)</i></UButton>
        </div>
    </div>
    <div class="w-1/2">
        <UTable :rows="filteredRows" :columns="columns" :ui="{
            base: 'h-[390px] md:max-2xl:h-[445px] block overflow-y-auto',
            thead: 'bg-black table w-full table-fixed',
            tbody: 'table w-full table-fixed',
            th: {
                color: 'text-white',
                font: 'font-bold text-lg',
                size: 'text-xs'
            },
            td: {
                padding: 'p-2',
                size: 'text-xs',
            }
        }">
            <template #quantity-data="{ row }">
                <div class="text-center">
                    <span>{{ row.quantity }}</span>
                </div>
            </template>

            <template #value-data="{ row }">
                <div>
                    <span>{{ row.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</span>
                </div>
            </template>
            <template #discount-data="{ row }">
                <div>
                    <span>{{ row.discount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</span>
                </div>
            </template>
            <template #total-data="{ row }">
                <div>
                    <span>{{ row.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</span>
                </div>
            </template>
        </UTable>
    </div>
</template>