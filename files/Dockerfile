FROM ubuntu

MAINTAINER Wistity team <hack@wistity.co>

RUN apt-get update
RUN apt-get install -y build-essential libssl-dev git curl
RUN git clone https://github.com/creationix/nvm.git

ENV NODE_VERSION v0.12.6

RUN echo 'source /nvm/nvm.sh && nvm install ${NODE_VERSION}' | bash -l

ENV PATH /nvm/${NODE_VERSION}/bin:${PATH}

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
