#!/bin/sh

# Wait for database to be ready (optional but good practice)
echo "Waiting for database..."
sleep 3

# Run Prisma schema push to sync database
echo "Running Prisma DB Push..."
npx prisma db push --accept-data-loss

# Start the application
echo "Starting application..."
if [ "$NODE_ENV" = "production" ]; then
  npm start
else
  npm run dev
fi
