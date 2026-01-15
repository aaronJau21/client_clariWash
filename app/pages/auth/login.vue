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
const loading = ref(false);
const state = reactive({
  email: "",
  password: "",
});

const toast = useToast();
async function handleSubmit() {
  loading.value = true;
  try {
    const res = await $fetch(`${config.public.apiUrl}/auth/login`, {
      method: "POST",
      body: state,
      credentials: "include",
    });
    navigateTo("/dashboard");
  } catch (error: any) {
    toast.add({
      title: "Error al iniciar sesión",
      description: error?.data?.message || "Error al iniciar sesión",
      color: "error",
    });
  } finally {
    loading.value = false;
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
    <UButton type="submit" :loading="loading">Iniciar sesión</UButton>
  </UForm>
</template>
