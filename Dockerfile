# Extending image
FROM node

# RUN apt-get update
# RUN apt-get upgrade -y
# RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/test
WORKDIR /usr/src/app

# Versions
RUN npm -v
RUN node -v

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY .eslintrc.js /usr/src/app/
COPY lll.sh /usr/src/app/

RUN npm install
RUN npm install eslint -g

#RUN dos2unix lll.sh; chmod 755 lll.sh
CMD eslint .eslintrc.js -f checkstyle  > /usr/src/test/eslint.xml
