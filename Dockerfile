FROM node:16.9.0

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies

COPY package.json ./

RUN yarn

# If you are building your code for production
# RUN npm ci --only=production

# Copy over the project directory
COPY . .

# Expose the port being used by the express server
EXPOSE 8990
CMD ["node", "index.js" ]
