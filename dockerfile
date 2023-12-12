FROM node:latest
COPY . ./app
RUN yarn 
EXPOSE  3000
CMD ["yarn", "dev"]
