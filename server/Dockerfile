# pull official base image
FROM node:10-alpine

# set working directory
RUN npm install -g yarn
# set working directory
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn --pure-lockfile

# add `/app/node_modules/.bin` to $PATH
ENV NODE_PATH=/app/node_modules
ENV PATH /app/node_modules/.bin:$PATH

RUN npm config set "strict-ssl" false && cd /app && npm install --silent

WORKDIR /app

EXPOSE 8080
# start app
CMD ["npm", "start"]