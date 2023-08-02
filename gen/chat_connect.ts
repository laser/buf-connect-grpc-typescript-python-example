// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=ts"
// @generated from file chat.proto (package connectrpc.chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SayRequest, SayResponse } from "./chat_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service connectrpc.chat.v1.ChatService
 */
export const ChatService = {
  typeName: "connectrpc.chat.v1.ChatService",
  methods: {
    /**
     * @generated from rpc connectrpc.chat.v1.ChatService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
