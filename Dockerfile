# x86_64-alpine linux, jre8u372-b07 adoptopenjdk의 이미지를 Base
FROM adoptopenjdk/openjdk8:x86_64-alpine-jre8u372-b07
# Language, Time zone 환경 변수값 설정
ENV LANG=ko_KR.UTF-8 LANGUAGE=ko_KR:ko LC_ALL=ko_KR.UTF-8 \
 TZ=Asia/Seoul \
 CATALINA_HOME=/usr/local/tomcat \
 PATH=/usr/local/tomcat/bin:$PATH \
 TOMCAT_VERSION=8.5.91

# font 추가, time zone 설정 추가
RUN apk add font-noto-cjk ; apk --update add fontconfig ttf-dejavu ; \
  apk add -U tzdata ; ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone ; \
  mkdir -p "$CATALINA_HOME" ; \
  addgroup -S appuser && adduser -S tomcat -G appuser;
# 기준디렉토리 /usr/local/tomcat
WORKDIR $CATALINA_HOME
# apache-tomcat-8.5.91 버전 파일을 /usr/local/tomcat 디렉토리로 복사
COPY ./tomcat .
# tomcat 하위디렉토리 파일 권한 설정
RUN chmod 755 ./bin/*.sh; \
  chmod -R +rX .; \
  chmod 777 logs temp work; \
  chown -R tomcat ./webapps ./conf;

USER tomcat
# port expose 8080:8080
EXPOSE 8080
# ENTRYPOINT ["catalina.sh", "run"]
CMD ["catalina.sh", "run"]
# 이미지 빌드하기 명령 :
# docker build -t tomcat8:8.5.91-alpine-jre8u372-b07 .
# 만들어진 이미지 결과 : docker.io/library/tomcat8:8.5.91-alpine-jre8u372-b07
