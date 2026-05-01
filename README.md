# GuildPass Mobile 📱

The official MVP mobile application for **GuildPass**, a Web3 membership and access-control protocol.

Built with **React Native**, **Expo**, and **NativeWind**, this app allows users to manage their guild memberships and verify resource access on the go.

## Features

- **🌐 Wallet Preview**: Manually enter wallet addresses to explore memberships (MVP mode).
- **🛡️ Membership View**: See all your active guild memberships and assigned roles.
- **🔍 Access Verification**: Real-time protocol checks for token-gated resources.
- **🏗️ Guild Exploration**: View guild details, configurations, and role requirements.
- **⚡ Performance**: Powered by React Query for efficient data fetching and caching.

## Tech Stack

- **Framework**: Expo (React Native)
- **Navigation**: Expo Router (File-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: Zustand & React Query
- **Protocol SDK**: `@guildpass/sdk`
- **Testing**: Vitest & React Native Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm or npm
- Expo Go app on your mobile device (for local testing)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   Create a `.env` file or use `app.json` extra fields.

### Development

```bash
# Start the Expo development server
pnpm start

# Run on iOS simulator
pnpm ios

# Run on Android emulator
pnpm android
```

## Project Structure

- `app/`: Expo Router screens and layouts.
- `src/components/`: Reusable UI components.
- `src/features/`: Domain-specific logic, hooks, and stores.
- `src/lib/`: External library initializations (SDK, QueryClient).
- `tests/`: Component and logic tests.

## MVP Limitations & Roadmap

This is an MVP application. Future improvements include:

- [ ] **Production Wallets**: Integration with WalletConnect, MetaMask, and Coinbase Wallet.
- [ ] **Embedded Wallets**: Seamless onboarding with Privy or Dynamic.
- [ ] **Push Notifications**: Real-time alerts for new guild roles or access grants.
- [ ] **Offline Mode**: Local caching for viewing memberships without connectivity.
- [ ] **Dark Mode**: Full system-aware dark theme support.
- [ ] **QR Access**: Generate QR codes for physical event access gating.

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

MIT © [GuildPass](https://guildpass.xyz)
