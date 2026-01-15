<script setup lang="ts">
import type { BreadcrumbItem, TableColumn } from "@nuxt/ui";
import FormCreate from "~/components/dashboard/services/FormCreate.vue";
import FormUpdate from "~/components/dashboard/services/FormUpdate.vue";
import type { IService } from "~/interface/services/service.interface";
definePageMeta({
  layout: "system",
  middleware: "auth",
});

const open = ref(false);

const toast = useToast();
const { data, refresh, error } = await useFetch<IService[]>("/api/services");

const columns = ref<TableColumn<IService>[]>([
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "price",
    header: "Precio",
    id: "price",
  },
  {
    accessorKey: "amount",
    header: "Cantidad",
  },
  {
    header: "Acciones",
    id: "action",
  },
]);

const items = ref<BreadcrumbItem[]>([
  {
    label: "Dashboard",
    icon: "i-lucide-layout-dashboard",
    to: "/dashboard",
  },
  {
    label: "Servicios",
    icon: "i-lucide-sparkles",
    to: "/dashboard/services",
  },
]);

const isModalOpen = ref(false);

async function handleServiceCreated() {
  await refresh();
  isModalOpen.value = false;
}

async function handleServiceUpdated() {
  await refresh();
}

watch(
  () => error.value,
  (newError) => {
    if (import.meta.client && newError?.data.statusCode === 401) {
      toast.add({
        title: "No tienes permisos para acceder a esta página",
        description: newError?.data.message,
        color: "error",
      });
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="p-9">
    <div class="mb-5 flex justify-between items-center">
      <UBreadcrumb :items="items" />

      <UModal
        v-model:open="open"
        v-model="isModalOpen"
        title="Agregar Servicio"
        description="Complete el formulario para agregar un nuevo servicio al sistema"
      >
        <UButton
          color="primary"
          icon="i-lucide-plus"
          size="sm"
          label="Agregar Servicio"
          @click="open = true"
        />

        <template #body>
          <div class="flex justify-center items-center">
            <FormCreate
              :on-success="handleServiceCreated"
              :on-close="() => (open = false)"
            />
          </div>
        </template>
      </UModal>
    </div>

    <UTable :data="data as IService[]" :columns="columns" class="flex-1">
      <template #price-cell="{ row }">
        <p>S/ {{ row.original.price }}</p>
      </template>

      <template #action-cell="{ row }">
        <UModal
          title="Editar Servicio"
          description="Modifique los datos del servicio seleccionado"
        >
          <UButton
            color="primary"
            variant="ghost"
            icon="i-lucide-edit"
            aria-label="Actions"
            class="cursor-pointer"
            label="Editar"
          />

          <template #body>
            <div class="flex justify-center items-center">
              <FormUpdate
                :service="row.original as IService"
                :on-success="handleServiceUpdated"
              />
            </div>
          </template>
        </UModal>
      </template>
    </UTable>
  </div>
</template>
