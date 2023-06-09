export default async function health_check(fastify, options) {
    fastify.get("/health", async (req, res) => {
        return "healthy";
    });
}
//# sourceMappingURL=health.js.map