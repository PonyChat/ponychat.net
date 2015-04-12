FROM ubuntu:trusty

ADD https://github.com/spf13/hugo/releases/download/v0.13/hugo_0.13_amd64.deb /hugo.deb

RUN dpkg -i hugo.deb

ADD . /hugo

EXPOSE 80

WORKDIR /hugo

ENV URL http://ponychat.net

CMD hugo server -p 80 -b=$URL
