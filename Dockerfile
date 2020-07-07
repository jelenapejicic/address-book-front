# Extending image
FROM node:carbon

#RUN apt-get update
#RUN apt-get upgrade -y
#RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

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

CMD cp lll.sh /usr/src/test

#RUN npm install
#RUN npm install eslint@6.6.0 -g
#CMD eslint -c .eslintrc.js -f checkstyle . --ext .js,.jsx -o /usr/src/test/eslint.xml

#RUN dos2unix lll.sh; chmod 755 lll.sh

#CMD [ "sh", "lll.sh" ]
CMD echo aaaaaaaaaaa > /usr/src/test/marica.txt
