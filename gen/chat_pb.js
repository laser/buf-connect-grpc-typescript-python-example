"use strict";
// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file chat.proto (package connectrpc.chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayResponse = exports.SayRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message connectrpc.chat.v1.SayRequest
 */
class SayRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sentence = 1;
         */
        this.sentence = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SayRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SayRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SayRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SayRequest, a, b);
    }
}
exports.SayRequest = SayRequest;
SayRequest.runtime = protobuf_1.proto3;
SayRequest.typeName = "connectrpc.chat.v1.SayRequest";
SayRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message connectrpc.chat.v1.SayResponse
 */
class SayResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sentence = 1;
         */
        this.sentence = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SayResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SayResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SayResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SayResponse, a, b);
    }
}
exports.SayResponse = SayResponse;
SayResponse.runtime = protobuf_1.proto3;
SayResponse.typeName = "connectrpc.chat.v1.SayResponse";
SayResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
