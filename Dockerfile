FROM node:8.4.0
ENV NODE_ENV dev
WORKDIR /app
COPY . .
RUN npm install -g yarn
EXPOSE 3000 3001 5858
VOLUME [ "/app" ]
RUN echo "Successfully built ads-webapp-baseline"
