import type { UserType } from "@/app/(auth)/auth";
import type { ChatModel } from "./models";

type Entitlements = {
  maxMessagesPerDay: number;
  availableChatModelIds: ChatModel["id"][];
};

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    // no daily cap
    maxMessagesPerDay: Number.POSITIVE_INFINITY,
    availableChatModelIds: ["chat-model", "chat-model-reasoning"],
  },

  /*
   * For users with an account
   */
  regular: {
    // no daily cap
    maxMessagesPerDay: Number.POSITIVE_INFINITY,
    availableChatModelIds: ["chat-model", "chat-model-reasoning"],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
