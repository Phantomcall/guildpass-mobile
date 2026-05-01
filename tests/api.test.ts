import { describe, it, expect, vi } from "vitest";
import { guildPassClient } from "../src/lib/guildpassClient";

// Mock the SDK
vi.mock("@guildpass/sdk", () => {
  return {
    GuildPassClient: vi.fn().mockImplementation(() => ({
      access: {
        checkAccess: vi.fn().mockResolvedValue({
          hasAccess: true,
          matchedRoles: ["member"],
          requiredRoles: ["member"],
        }),
      },
      guilds: {
        getGuild: vi.fn().mockResolvedValue({
          id: "guild_1",
          name: "Test Guild",
          ownerAddress: "0x123",
          chainId: 1,
        }),
      },
    })),
  };
});

describe("API Integrations", () => {
  it("should call checkAccess with correct parameters", async () => {
    const params = {
      walletAddress: "0x123",
      guildId: "guild_1",
      resourceId: "res_1",
    };
    
    const result = await guildPassClient.access.checkAccess(params);
    
    expect(result.hasAccess).toBe(true);
    expect(guildPassClient.access.checkAccess).toHaveBeenCalledWith(params);
  });

  it("should fetch guild data", async () => {
    const guild = await guildPassClient.guilds.getGuild({ guildId: "guild_1" });
    
    expect(guild.name).toBe("Test Guild");
    expect(guildPassClient.guilds.getGuild).toHaveBeenCalledWith({ guildId: "guild_1" });
  });
});
