FROM node:8.4.0
ENV NODE_ENV local
WORKDIR /app
COPY . .
RUN npm install -g yarn
RUN yarn install
EXPOSE 3000
VOLUME [ "/app" ]
RUN echo "Successfully built ads-webapp-baseline"
