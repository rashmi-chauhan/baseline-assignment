FROM node:8.4.0
ENV NODE_ENV dev
WORKDIR /app
COPY . .
RUN npm install -g yarn
RUN yarn install
EXPOSE 3000 3001 5858
RUN echo "Successfully built ads-webapp-baseline"
