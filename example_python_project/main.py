import grpc

import chat_pb2
import chat_pb2_grpc


def main():
    request = chat_pb2.SayRequest(sentence="bar")

    # Load the server's certificate
    with open("../localhost+2.pem", "rb") as f:
        cert = f.read()

    # Create a credentials object
    creds = grpc.ssl_channel_credentials(root_certificates=cert)

    # Create a secure channel using the credentials
    with grpc.secure_channel("localhost:8080", creds) as channel:
        stub = chat_pb2_grpc.ChatServiceStub(channel)
        response = stub.Say(request)

    print(response)

if __name__ == "__main__":
    main()
