# Use the official Node.js 18 image as a parent image
FROM node:24-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Make port 4000 available outside the container
EXPOSE 4000

# Define environment variable to tell Node.js to run in production mode
ENV NODE_ENV=production

# Run the application
CMD ["npm", "start"]
