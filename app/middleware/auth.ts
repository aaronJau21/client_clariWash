export default defineNuxtRouteMiddleware(async (to) => {
  // Evitar loop
  if (to.path === "/auth/login") return;

  const { error } = await useFetch("/api/me");

  if (error.value) {
    return navigateTo("/auth/login");
  }
});
