export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  try {
    return await $fetch(`${config.public.apiUrl}/auth/me`, {
      headers: {
        cookie: event.node.req.headers.cookie || "",
      },
    });
  } catch (error: any) {
    throw createError({
      statusCode: 401,
      statusMessage: "No autenticado",
    });
  }
});
