# Mobile Development Guide

Guidelines for contributing to the GuildPass Mobile application.

## Development Environment

1. **Expo Go**: Download the Expo Go app on your physical device.
2. **Simulators**: Install Xcode (iOS) or Android Studio (Android) for local emulation.
3. **Node Version**: Use Node.js 18 or 20.

## Component Development

When creating new components:
- Place them in `src/components/` if they are reusable.
- Use `NativeWind` for styling.
- Ensure components handle `isLoading` and `error` states gracefully.
- Follow the existing pattern of using functional components and hooks.

## Adding a New Feature

1. Define types in `src/features/your-feature/your-feature.types.ts`.
2. Implement hooks in `src/features/your-feature/useYourFeature.ts`.
3. Create a new screen in `app/`.
4. Update navigation if necessary.

## Testing Strategy

- **Unit Tests**: Test utility functions and hooks using Vitest.
- **Component Tests**: Test UI components using React Native Testing Library.
- **Mocking**: Always mock the `@guildpass/sdk` responses in tests to avoid network calls.
- **Location**: Place tests in the `tests/` directory.

## Common Tasks

### Updating the SDK
```bash
pnpm update @guildpass/sdk
```

### Running Linting
```bash
pnpm lint
pnpm format
```

### Type Checking
```bash
pnpm typecheck
```
