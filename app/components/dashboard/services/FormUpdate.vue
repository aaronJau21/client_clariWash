<script setup lang="ts">
import { z } from "zod";
import type { IService } from "~/interface/services/service.interface";

interface IProps {
  service: IService;
  onSuccess?: () => void;
}

const props = defineProps<IProps>();

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
  name: props.service.name,
  description: props.service.description,
  price: props.service.price,
  amount: props.service.amount,
});

async function handleUpdate() {
  try {
    await $fetch(`${config.public.apiUrl}/services/${props.service.id}`, {
      method: "PUT",
      body: state,
      credentials: "include",
    });

    toast.add({
      title: "Servicio actualizado correctamente",
      description: "El servicio ha sido actualizado correctamente",
      color: "success",
    });

    if (props.onSuccess) {
      props.onSuccess();
    }
  } catch (error: any) {
    console.log(error);
    toast.add({
      title: "Error al actualizar el servicio",
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
    @submit="handleUpdate"
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
