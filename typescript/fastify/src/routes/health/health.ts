export default async function health_check(fastify) {
  fastify.get("/health", async () => {
    return "healthy";
  });
}
