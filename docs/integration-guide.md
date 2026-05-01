# Integration Guide

How to integrate and extend the GuildPass Mobile application.

## SDK Integration

The app uses a singleton instance of the `GuildPassClient` located in `src/lib/guildpassClient.ts`.

To use the protocol in a new hook:

```typescript
import { guildPassClient } from "@/lib/guildpassClient";

const data = await guildPassClient.guilds.getGuild({ guildId: "123" });
```

## Environment Configuration

Configuration is managed via `app.json` and Expo Constants.

```json
{
  "expo": {
    "extra": {
      "apiUrl": "https://api.guildpass.xyz",
      "chainId": 8453
    }
  }
}
```

## Adding Custom Gating Logic

If you need to add custom gating logic that isn't provided by the SDK:
1. Add a utility function in `src/utils/validation.ts`.
2. Wrap the SDK call in a custom hook in `src/features/access/`.
3. Update the `AccessCheck` screen to include the new logic.

## Theming

Global colors and spacing are defined in `tailwind.config.js`. To update the app's look and feel, modify the `extend.colors` section in the tailwind config.

```javascript
// tailwind.config.js
extend: {
  colors: {
    primary: "#your-new-color",
  }
}
```
