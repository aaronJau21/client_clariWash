<script setup lang="ts">
import { z } from "zod";

definePageMeta({
  layout: "auth",
});

const schema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

const config = useRuntimeConfig();
const state = reactive({
  email: "",
  password: "",
});

const toast = useToast();
async function handleSubmit() {
  try {
    const res = await $fetch(`${config.public.apiUrl}/auth/login`, {
      method: "POST",
      body: state,
      credentials: "include",
    });
    console.log(res);
  } catch (error: any) {
    console.log(error);
    toast.add({
      title: "Error al iniciar sesión",
      description: error.data.message,
      color: "error",
    });
  }
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 border p-3 rounded-lg flex justify-center items-center flex-col w-96"
    @submit="handleSubmit"
  >
    <h1 class="text-2xl font-bold text-primary">Ingresa tus credenciales</h1>
    <UFormField name="email" label="Email">
      <UInput v-model="state.email" label="Email" type="email" class="w-full" />
    </UFormField>
    <UFormField name="password" label="Contraseña">
      <UInput
        v-model="state.password"
        label="Contraseña"
        type="password"
        class="w-full"
      />
    </UFormField>
    <UButton type="submit">Iniciar sesión</UButton>
  </UForm>
</template>
