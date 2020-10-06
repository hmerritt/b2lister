FROM nginx:latest

RUN apt-get update && apt-get install nodejs npm -y
RUN npm install pm2 -g

COPY /api /app/api
COPY /client /app/client
WORKDIR /app

RUN cd /app/api && npm install --only=prod
RUN cd /app/client && npm install --only=prod

ENV PORT 8000

EXPOSE 80
EXPOSE 8000

COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf

COPY ./docker-entrypoint.sh /app/docker-entrypoint.sh
CMD ["sh", "docker-entrypoint.sh"]
