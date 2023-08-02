import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import routes from "./connect";
import { readFileSync } from "fs";

const server = fastify({
  http2: true,
  https: {
    key: readFileSync("localhost+2-key.pem", "utf8"),
    cert: readFileSync("localhost+2.pem", "utf8"),
  }
});

async function main() {
  await server.register(fastifyConnectPlugin, {
    routes,
  });

  // can still register regular, non-RPC routes
  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  });

  await server.listen({ host: "localhost", port: 8080 });

  console.log("HTTP/2 server is listening:", server.addresses());
}

void main();
