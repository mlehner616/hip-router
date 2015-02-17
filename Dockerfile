############################################################
# HIPACHE
############################################################

FROM node:0.12.0-slim

RUN npm i -g hipache

COPY . /hipache

WORKDIR /hipache

EXPOSE 80

CMD ["sh", "startup.sh"]
