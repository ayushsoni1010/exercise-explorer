FROM node:14.9

# set working directory
WORKDIR /app

# install app depenedencies
COPY package.json package-lock.json* ./

RUN npm install

# add app
COPY . .

# expose app on port
EXPOSE 5000

# start app
CMD [ "npm","run","server" ]