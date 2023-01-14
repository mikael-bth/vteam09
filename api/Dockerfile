FROM node:8

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY app.js .

COPY db ./db

COPY routes ./routes

ENTRYPOINT ["npm"]

CMD ["start"]