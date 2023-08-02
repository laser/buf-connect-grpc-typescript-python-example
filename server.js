"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const connect_fastify_1 = require("@bufbuild/connect-fastify");
const connect_1 = __importDefault(require("./connect"));
const fs_1 = require("fs");
const server = (0, fastify_1.fastify)({
    http2: true,
    https: {
        key: (0, fs_1.readFileSync)("localhost+2-key.pem", "utf8"),
        cert: (0, fs_1.readFileSync)("localhost+2.pem", "utf8"),
    }
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield server.register(connect_fastify_1.fastifyConnectPlugin, {
            routes: connect_1.default,
        });
        // can still register regular, non-RPC routes
        server.get("/", (_, reply) => {
            reply.type("text/plain");
            reply.send("Hello World!");
        });
        yield server.listen({ host: "localhost", port: 8080 });
        console.log("HTTP/2 server is listening:", server.addresses());
    });
}
void main();
