# Use the official Node.js 14 base image
FROM node:20-alpine3.17

RUN npm install -g npm@9.7.2

RUN rm -f /usr/local/bin/yarn

RUN npm install -g yarn --force

# Set Yarn version
ENV YARN_VERSION=1.22.19

# Install Yarn
RUN npm install -g yarn@${YARN_VERSION}


# Set the working directory inside the Docker image
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json yarn*.lock ./

# Install project dependencies
RUN yarn

# Copy the entire application code to the working directory
COPY . .

# Build the Nuxt.js app
RUN yarn build

# Expose the port that the Nuxt.js app will run on
EXPOSE 3000

# Set the startup command to run the Nuxt.js app
CMD ["node", ".output/server/index.mjs"]