FROM node:16.6.1

WORKDIR /usr/app

# Copy source files from host computer to the container
COPY . .

# Install dependencies
RUN npm install

# Run the app
CMD [ "npm", "start" ]