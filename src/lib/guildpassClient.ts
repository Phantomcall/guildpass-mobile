import { GuildPassClient } from "@guildpass/sdk";
import { appConfig } from "../config/appConfig";

export const guildPassClient = new GuildPassClient({
  apiUrl: appConfig.apiUrl,
  chainId: appConfig.chainId,
});
