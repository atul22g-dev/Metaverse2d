# 2D Metaverse Project

A modern 2D metaverse platform built with TypeScript and React using Turborepo.

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
- Node.js 18+
- pnpm 8.15.6+
- PostgreSQL database

### Installation
```sh
# Clone the repository
git clone https://github.com/atul22g-dev/Metaverse2d.git

# Install dependencies
cd Metaverse2d
pnpm install
```

### Database Setup
```sh
# Navigate to the database package
cd metaverse/packages/db

# Generate Prisma client
npx prisma generate

# Create and apply migrations (development)
npx prisma migrate dev --name init

# Deploy migrations to production
npx prisma migrate deploy

# Reset database (caution: this will delete all data)
npx prisma migrate reset --force --skip-seed
```

### Starting the Project
```sh
# Navigate to the project directory
cd metaverse

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
cd metaverse/apps/ws
pnpm build
pnpm start

# 3. Start Frontend (runs on http://localhost:5173) - open a new terminal
cd metaverse/apps/frontend
pnpm dev

# After starting all services, open your browser at:
http://localhost:5173
```

### Development Commands
```sh
# Start specific app (alternative approach, may not work in all environments)
pnpm dev --filter frontend
pnpm dev --filter http
pnpm dev --filter ws
```

### Building
```sh
# Build all packages and apps
pnpm build

# Build specific package or app
pnpm build --filter frontend
pnpm build --filter http
pnpm build --filter ws
pnpm build --filter @repo/db
```

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js with TypeScript
- **Real-time Communication**: WebSocket
- **Package Management**: pnpm
- **Build System**: Turborepo
- **Code Quality**: ESLint + Prettier

## Troubleshooting

### Port Conflicts
If you encounter port conflicts when starting the services, you can modify the port numbers in the following files:

- HTTP Server: `metaverse/apps/http/src/index.ts` - Change the port number (default: 3001)
- WebSocket Server: `metaverse/apps/ws/src/index.ts` - Change the PORT constant (default: 3002)
- Frontend: Update the WebSocket URL in `metaverse/apps/frontend/src/components/Arena.tsx` and the backend URL in `metaverse/apps/frontend/.env.local`

### Database Connection Issues
If you encounter database connection issues:

1. Verify your DATABASE_URL in `metaverse/packages/db/.env`
2. Ensure your database server is running
3. Check network connectivity to your database server
4. Try adding `?sslmode=require` to your connection string if using a cloud database

### Running the Project
If `pnpm dev` doesn't work, try starting each service individually as described in the "Starting the Project" section.

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