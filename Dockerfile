FROM nginx

ADD https://github.com/spf13/hugo/releases/download/v0.13/hugo_0.13_amd64.deb /hugo.deb

RUN dpkg -i hugo.deb

ADD . /hugo

EXPOSE 80

WORKDIR /hugo

RUN hugo -d /usr/share/nginx/html
