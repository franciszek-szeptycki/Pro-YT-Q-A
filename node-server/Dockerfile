# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 for the Node.js app to listen on
EXPOSE 3000

# Start the Node.js app when the container launches
CMD ["npm", "start"]
