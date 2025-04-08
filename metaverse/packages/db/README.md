# Database Package

This package contains the database utilities and Prisma client for the 2D Metaverse project.

## Setup

### Prerequisites
- PostgreSQL database
- Node.js 18+
- pnpm 8.15.6+

### Environment Configuration

Create a `.env` file in this directory with your database connection string:

```
# postgresql url
DATABASE_URL=postgresql://username:password@hostname:port/database
```

Example:
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/metaverse
```

For production, make sure to use a secure connection string with proper credentials.

## Database Commands

### Generate Prisma Client

This command generates the Prisma client based on your schema:

```sh
# Using pnpm script
pnpm db:generate

# Using npx directly
npx prisma generate
```

### Create and Apply Migrations (Development)

This command creates a new migration based on changes to your schema and applies it to your database:

```sh
# Using pnpm script
pnpm db:migrate

# Using npx directly
npx prisma migrate dev --name <migration_name>
```

Example:
```sh
npx prisma migrate dev --name init
npx prisma migrate dev --name add_user_fields
```

### Deploy Migrations (Production)

This command applies existing migrations to your production database:

```sh
# Using pnpm script
pnpm db:deploy

# Using npx directly
npx prisma migrate deploy
```

### Reset Database

This command resets your database by dropping all tables and applying all migrations from scratch:

```sh
# Using pnpm script
pnpm db:reset

# Using npx directly
npx prisma migrate reset --force --skip-seed
```

**Warning**: This will delete all data in your database. Use with caution.

## Schema

The database schema is defined in `prisma/schema.prisma`. It includes the following models:

- User
- Space
- spaceElements
- Element
- Map
- MapElements
- Avatar

## Usage in Code

Import the Prisma client in your code:

```typescript
import client from "@repo/db/client";

// Example: Query all users
const users = await client.user.findMany();
```

## Troubleshooting

### Connection Issues

If you encounter connection issues:

1. Verify your DATABASE_URL is correct
2. Check that your database server is running
3. Ensure network connectivity to your database server
4. Check firewall settings that might block database connections

### Migration Issues

If migrations fail:

1. Check the Prisma migration logs
2. Ensure your database user has sufficient privileges
3. For development, you might need to reset the database if schema changes are incompatible
