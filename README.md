<div align="center">
  <img src="https://raw.githubusercontent.com/guildpass/brand/main/logo-mobile.png" alt="GuildPass Mobile Logo" width="120" />
  <h1>GuildPass Mobile</h1>
  <p><strong>Secure, on-the-go access control and guild management.</strong></p>

  <p>
    <a href="https://expo.dev"><img src="https://img.shields.io/badge/platform-ios%20%7C%20android-000000?style=flat-square&logo=expo&logoColor=white" alt="platform" /></a>
    <a href="https://github.com/guildpass/guildpass-mobile/actions"><img src="https://img.shields.io/github/actions/workflow/status/guildpass/guildpass-mobile/test.yml?branch=main&style=flat-square" alt="build status" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license" /></a>
    <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/typescript-%23007acc.svg?style=flat-square&logo=typescript&logoColor=white" alt="typescript" /></a>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-roadmap">Roadmap</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>

---

## 📱 Experience the Protocol

GuildPass Mobile is the official gateway to the GuildPass ecosystem for iOS and Android. It empowers users to manage their digital memberships, verify on-chain roles, and unlock token-gated experiences directly from their mobile devices. Built with performance and security at its core, it leverages modern Web3 standards to provide a seamless user experience.

## ✨ Key Features

- **🛡️ Universal Membership**: View all your active guild memberships and assigned roles in a unified dashboard.
- **🔍 Instant Verification**: Execute real-time protocol checks for token-gated resources with zero friction.
- **🌐 Cross-Chain Support**: Explore guild configurations and role requirements across supported EVM networks.
- **⚡ High Performance**: Native-speed interactions powered by React Native and efficient server-state management.
- **🎨 Fluid Design**: A beautiful, accessible UI built with NativeWind, optimized for both light and dark environments.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0 or higher
- **Package Manager**: pnpm (recommended) or npm
- **Mobile Environment**: Expo Go installed on your device, or configured iOS/Android simulators.

### Installation

```bash
# Clone the repository
git clone https://github.com/guildpass/guildpass-mobile.git

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm start

# Launch on specific platforms
pnpm ios
pnpm android
```

## 🏗️ Architecture

The application is built on a robust, feature-driven foundation designed for long-term maintainability:

- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) for type-safe, file-based navigation.
- **State**: [Zustand](https://github.com/pmndrs/zustand) for client state and [TanStack Query](https://tanstack.com/query) for server synchronization.
- **Styling**: [NativeWind](https://www.nativewind.dev/) for high-performance Tailwind CSS utility styling.
- **SDK**: Seamless integration with the core [@guildpass/sdk](../guildpass-sdk).

## 🗺️ Roadmap

- [ ] **Native Wallet Integration**: Support for WalletConnect, MetaMask, and Coinbase Wallet.
- [ ] **Smart Onboarding**: Social login and embedded wallets for non-crypto native users.
- [ ] **Push Notifications**: Real-time alerts for role updates and access grants.
- [ ] **QR Gating**: Generate dynamic QR codes for physical event access.
- [ ] **Offline Resilience**: Advanced caching layer for viewing memberships without connectivity.

## 🤝 Contributing

We welcome contributions from the community. Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) to get started. Together, we're building the future of decentralized access control.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Crafted with precision by the <b>GuildPass</b> team</p>
  <a href="https://guildpass.xyz">guildpass.xyz</a>
</div>
