FROM node:16.20-alpine as build

COPY package*.json .
RUN npm i

COPY . .

RUN npm run build

FROM nginx:1.19

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /build /usr/share/nginx/html