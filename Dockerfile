# base image
FROM node:12.11.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json yarn.lock ./
RUN yarn install --silent
COPY . ./

# run app
EXPOSE 3000
CMD ["yarn", "start"]

