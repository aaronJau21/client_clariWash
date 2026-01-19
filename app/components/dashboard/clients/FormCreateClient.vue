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
    name: z.string().min(1, "El nombre es requerido"),
    phone: z.string().min(1, "El teléfono es requerido"),
    address: z.string().min(1, "La dirección es requerida"),
});



const state = reactive({
    name: "",
    phone: "",
    address: "",
});

async function handleSubmit() {

    try{
        const res = await $fetch(`${config.public.apiUrl}/clients`,{
            method: "POST",
            body: state,
            credentials: "include",
        })
        toast.add({
            title: "Cliente creado correctamente",
            description: "El cliente ha sido creado correctamente",
            color: "success",
        });
        state.name = "";
        state.phone = "";
        state.address = "";

    if(props.onSuccess){
        props.onSuccess();
        if(props.onClose){
            props.onClose();
        }
    }
    
    }
    catch(error: any){
        toast.add({
            title: "Error al crear el cliente",
            description: error.data.message,
            color: "error",
        });
    }

}

</script>

<template>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
        <UFormField name="name" label="Nombre">
            <UInput v-model="state.name" label="Nombre" />
        </UFormField>
        <UFormField name="phone" label="Teléfono">
            <UInput v-model="state.phone" label="Teléfono" />
        </UFormField>
        <UFormField name="address" label="Dirección">
            <UInput v-model="state.address" label="Dirección" />
        </UFormField>
        <UButton type="submit" color="primary" variant="outline"> Guardar </UButton>
    </UForm>
</template>