<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const { signIn } = useAuth()

const schema = object({
    username: string().lowercase("O nome de usuário deve ser minúsculo.").required('Preencha este campo.'),
    password: string().required('Preencha este campo.')
})

type Schema = InferType<typeof schema>;


const state = reactive({
    username: "",
    password: ""
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    const credentials = {
        username: state.username,
        password: state.password
    }

    try {
      await signIn(credentials, { callbackUrl: "/pdv" })
      alert('Logado com sucesso!')
    } catch (error) {
      console.error(error)
    }
}
</script>


<template>
    <div class="w-[400px] md:w-2/5 shadow-2xl">
        <UCard
            :ui="{ divide: 'divide-y divide-gray-100', background: 'bg-white/5 backdrop-blur-xl', base: 'text-white' }">
            <template #header>
                <h2 class="text-xl text-center font-semibold">LOGIN</h2>
            </template>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Nome de Usuário" name="text" :ui="{ label: 'text-white text-lg' }">
                    <template #default>
                        <UInput v-model="state.username" placeholder="Insira seu nome de usuário." size="xl" color="gray" />
                    </template>
                </UFormGroup>
                <UFormGroup label="Senha" name="password" :ui="{ label: 'text-white text-lg' }">
                    <template #default>
                        <UInput v-model="state.password" type="password" placeholder="Digite sua senha." size="xl"
                            color="gray" />
                    </template>
                </UFormGroup>
                <UButton type="submit" size="xl" class="w-full justify-center" color="blue" variant="solid">
                    Enviar
                </UButton>
            </UForm>
        </UCard>
    </div>
</template>