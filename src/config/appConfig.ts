import { z } from "zod";
import Constants from "expo-constants";

const AppEnvSchema = z.enum(["development", "preview", "production"]).default("development");

const ConfigSchema = z.object({
  apiUrl: z.string().url("EXPO_PUBLIC_API_URL must be a valid URL"),
  chainId: z.coerce.number().finite("EXPO_PUBLIC_CHAIN_ID must be a finite number"),
  appEnv: AppEnvSchema,
  walletConnectProjectId: z.string().optional(),
});

export type AppConfig = z.infer<typeof ConfigSchema>;

function loadConfig(): AppConfig {
  const rawConfig = {
    apiUrl: Constants.expoConfig?.extra?.apiUrl ?? process.env.EXPO_PUBLIC_API_URL,
    chainId: Constants.expoConfig?.extra?.chainId ?? process.env.EXPO_PUBLIC_CHAIN_ID,
    appEnv: Constants.expoConfig?.extra?.appEnv ?? process.env.EXPO_PUBLIC_APP_ENV,
    walletConnectProjectId:
      Constants.expoConfig?.extra?.walletConnectProjectId ??
      process.env.EXPO_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  };

  const parsed = ConfigSchema.safeParse(rawConfig);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("\n");
    throw new Error(`Invalid application configuration:\n${errorMessages}`);
  }

  return parsed.data;
}

export const appConfig = loadConfig();
