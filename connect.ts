import { ConnectRouter } from "@bufbuild/connect";
import { ChatService } from "./gen/chat_connect";

export default (router: ConnectRouter) =>
  router.service(ChatService, {
    async say(req) {
      return {
        sentence: `You said: ${req.sentence}`
      }
    },
  });