# Stage 1: Build stage
FROM node:18 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if applicable, e.g., for frontend or transpilation)
# RUN npm run build

# Stage 2: Production stage
FROM node:18-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=builder /usr/src/app ./

# Install only production dependencies
RUN npm install --production

# Expose the application port
EXPOSE ${PORT}

# Start the application
CMD ["npm", "run", "dev"]
