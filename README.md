# buf-connect-grpc-typescript-python-example

## Layout

* The `proto` directory contains the proto3 service definition.
* The `server.ts` and `connect.ts` files define the TypeScript/Node.js server.
* The `example_python_project` shows how a generated Python client can be used to talk to the running server.

## Getting Started

### Generate Certificate

First, go follow the instructions on the [Buf Connect Website](https://connectrpc.com/docs/node/getting-started). Most
importantly, you'll need to install `mkcert` and generate a certificate (search the codebase for `.pem` files).

### Run the Node.js Server

Run the HTTP/2 server with Buf Connect handlers:

```shell
$ npm run server
```

If all goes well, you'll see something like:

```shell
> buf-connect-grpc-typescript-python-example@0.0.1 server
> tsx ./server.ts

HTTP/2 server is listening: [
  { address: '127.0.0.1', family: 'IPv4', port: 8080 },
  { address: '::1', family: 'IPv6', port: 8080 }
]
```

### Run the Python Client

In a new shell, navigate to the root of the `example_python_project` and run:

```shell
$ poetry run python ./main.py
```

If all goes well, you'll see something like:

```shell
sentence: "You said: bar"
```

### Regenerate from Protobuf Files

Run the following command to generate the Python and TypeScript code:

```shell
$ npm run gen
```