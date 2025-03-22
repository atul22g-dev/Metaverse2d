# 2D Metaverse Project

A modern 2D metaverse platform built with TypeScript and React.

## Project Structure

This is a monorepo using Turborepo with the following structure:

### Apps
- `frontend` - React/Vite application for the client interface
- `http` - HTTP server backend
- `ws` - WebSocket server for real-time communication

### Packages
- `db` - Database utilities and models
- `ui` - Shared React component library
- `eslint-config` - Shared ESLint configurations
- `typescript-config` - Shared TypeScript configurations

## Getting Started

### Prerequisites
- Node.js 16+
- pnpm (Package Manager)

### Installation
```sh
# Clone the repository
git clone https://github.com/atul22g-dev/Metaverse2d.git

# Install dependencies
cd Metaverse2d
pnpm install
```

### Development
```sh
# Start all services in development mode
pnpm dev

# Start specific app
pnpm dev --filter frontend
```

### Building
```sh
# Build all packages and apps
pnpm build
```

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js with TypeScript
- **Real-time Communication**: WebSocket
- **Package Management**: pnpm
- **Build System**: Turborepo
- **Code Quality**: ESLint + Prettier

## Testing

Run tests using:
```sh
pnpm test
```

## Project Structure

```
metaverse/
├── apps/
│   ├── frontend/    # React client application
│   ├── http/        # HTTP server
│   └── ws/          # WebSocket server
└── packages/
    ├── db/          # Database utilities
    ├── ui/          # Shared UI components
    ├── eslint-config/
    └── typescript-config/
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.