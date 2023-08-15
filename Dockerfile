FROM nginx:latest

RUN apt update && apt install curl bash -y
ENV NODE_VERSION=14.17.3
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
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
