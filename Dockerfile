# Use official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code
COPY ./src ./src
COPY ./public ./public

# Build the React app
RUN npm run build

# Start the app
CMD ["npm", "start"]

# Expose the port the app runs on
EXPOSE 3000
