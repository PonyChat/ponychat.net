FROM nginx

ADD https://github.com/spf13/hugo/releases/download/v0.13/hugo_0.13_amd64.deb /hugo.deb

RUN dpkg -i hugo.deb

ADD . /hugo

EXPOSE 80

WORKDIR /hugo

ADD https://github.com/PonyChat/webchat.ponychat.net/archive/master.tar.gz /pony.tar.gz
RUN mkdir /tmp/extract -p && cd /tmp/extract && tar zxf /pony.tar.gz &&\
    mkdir /usr/share/nginx/html/webchat -p &&\
    cp ./webchat.ponychat.net-master/public/* -vrf /usr/share/nginx/html/webchat &&\
    cp /usr/share/nginx/html/webchat/css -vrf /usr/share/nginx/html &&\
    cp /usr/share/nginx/html/webchat/config.js /usr/share/nginx/html/

RUN hugo -d /usr/share/nginx/html
