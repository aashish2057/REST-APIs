import Fastify from "fastify";
import health_check from "./routes/health/health.js";

const server = Fastify({ logger: true });

server.register(health_check);

const start = async () => {
  try {
    await server.listen({ port: 8080 });
  } catch (err) {
    server.log.error(err);
    process.exit();
  }
};
start();
