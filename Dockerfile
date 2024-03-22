
# Dockerfile

# pull official base image
FROM nikolaik/python-nodejs:python3.9-nodejs18

# set working directory
COPY . /app
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install -g npm@8.19.2

RUN npm install

# start app
CMD ["npm", "run", "start"]
