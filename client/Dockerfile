# pull official base image
FROM node:13.12.0-alpine

RUN npm install -g yarn
# set working directory
RUN mkdir /app
WORKDIR /app
COPY . /app
COPY package.json ./
RUN yarn --pure-lockfile

# add `/app/node_modules/.bin` to $PATH
ENV NODE_PATH=/app/node_modules
ENV PATH /app/node_modules/.bin:$PATH

RUN npm config set "strict-ssl" false && cd /app && npm install --silent && npm run build

WORKDIR /app

EXPOSE 3000
# start app
CMD ["yarn", "docker:start"]