# 2D Metaverse Project

A modern 2D metaverse platform built with TypeScript and React using Turborepo.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8.15.6+
- PostgreSQL database

### Installation

```sh
# Install dependencies
pnpm install
```

### Database Setup

```sh
# Navigate to the database package
cd packages/db

# Make sure your .env file contains the correct DATABASE_URL
# Example: DATABASE_URL=postgresql://username:password@localhost:5432/metaverse

# Generate Prisma client
pnpm db:generate
# or
npx prisma generate

# Create and apply migrations (development)
pnpm db:migrate
# or
npx prisma migrate dev --name init

# Deploy migrations to production
pnpm db:deploy
# or
npx prisma migrate deploy
```
### Project Start Commands

```sh
# Install dependencies (if not already done)
pnpm install

# Build all packages and apps
pnpm build

# Start each service individually (recommended approach)

# 1. Start HTTP Server (runs on http://localhost:3001)
cd apps/http
pnpm build
pnpm start

# 2. Start WebSocket Server (runs on ws://localhost:3002) - open a new terminal
cd ../ws  # or full path: cd /path/to/metaverse/apps/ws
pnpm build
pnpm start

# 3. Start Frontend (runs on http://localhost:5173) - open a new terminal
cd ../frontend  # or full path: cd /path/to/metaverse/apps/frontend
pnpm dev

# After starting all services, open your browser at:
http://localhost:5173
```



## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: React/Vite application for the client interface
- `http`: HTTP server backend (Express.js)
- `ws`: WebSocket server for real-time communication
- `@repo/db`: Database utilities and Prisma client
- `@repo/ui`: Shared React component library
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Development

To develop all apps and packages, run the following command from the root directory:

```sh
# Start all services in development mode
pnpm dev

# Start specific app
pnpm dev --filter frontend
pnpm dev --filter http
pnpm dev --filter ws
```

#### Starting Individual Services Manually

```sh
# Frontend (runs on http://localhost:5173 by default)
cd apps/frontend
pnpm dev

# HTTP Server (runs on http://localhost:3001)
cd apps/http
pnpm build && pnpm start

# WebSocket Server (runs on ws://localhost:3002)
cd apps/ws
pnpm build && pnpm start
```

### Build

To build all apps and packages, run the following command from the root directory:

```sh
pnpm build

# Build specific package or app
pnpm build --filter frontend
pnpm build --filter http
pnpm build --filter ws
pnpm build --filter @repo/db
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
