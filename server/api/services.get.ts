export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    return await $fetch(`${config.public.apiUrl}/services`, {
      headers: {
        cookie: event.node.req.headers.cookie || "",
      },
    });
  } catch (error: any) {
    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage: error?.response?.statusText || "Internal Server Error",
    });
  }
});
