<script setup lang="ts">
import { z } from "zod";

interface Props {
  onSuccess?: () => void;
  onClose?: () => void;
}

const props = defineProps<Props>();

const config = useRuntimeConfig();
const toast = useToast();

const schema = z.object({
  name: z.string("El nombre es requerido").min(1, "El nombre es requerido"),
  description: z
    .string("La descripción es requerida")
    .min(1, "La descripción es requerida"),
  price: z.number("El precio es requerido").min(1, "El precio es requerido"),
  amount: z
    .number("La cantidad es requerida")
    .min(1, "La cantidad es requerida"),
});

const state = reactive({
  name: "",
  description: "",
  price: 0,
  amount: 0,
});

async function handleSubmit() {
  try {
    const res = await $fetch(`${config.public.apiUrl}/services`, {
      method: "POST",
      body: state,
      credentials: "include",
    });

    console.log(res);
    toast.add({
      title: "Servicio creado correctamente",
      description: "El servicio ha sido creado correctamente",
      color: "success",
    });

    // Resetear el formulario
    state.name = "";
    state.description = "";
    state.price = 0;
    state.amount = 0;

    // Llamar a la función de éxito si existe
    if (props.onSuccess) {
      props.onSuccess();
      if (props.onClose) {
        props.onClose();
      }
    }
  } catch (error: any) {
    toast.add({
      title: "Error al crear el servicio",
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
    class="space-y-4"
    @submit="handleSubmit()"
  >
    <UFormField name="name" label="Nombre">
      <UInput v-model="state.name" label="Nombre" />
    </UFormField>

    <UFormField name="description" label="Descripción">
      <UInput v-model="state.description" label="Descripción" />
    </UFormField>

    <UFormField name="price" label="Precio">
      <UInput v-model="state.price" label="Precio" type="number" />
    </UFormField>

    <UFormField name="amount" label="Cantidad">
      <UInput v-model="state.amount" label="Cantidad" type="number" />
    </UFormField>

    <UButton type="submit"> Guardar </UButton>
  </UForm>
</template>
