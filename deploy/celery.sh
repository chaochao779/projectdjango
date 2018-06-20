#!/bin/bash
#############################################################
#celery flower web ui controller script
# web reference : https://my.oschina.net/u/2306127/blog/420929
############################################################
CELERY_UI_PORT=10055

BROKER="redis://127.0.0.1:6379/1"
#BROKER="redis://172.16.245.100:6379/1"

APP_NAME="worker"

#start the celery ui web server.
start_celery_flower() {
   nohup celery flower --broker=$BROKER  --port=$CELERY_UI_PORT >./flower.log 2>./flower.log  &
   #nohup celery flower --broker=$BROKER  --port=$CELERY_UI_PORT >/dev/null 2>/dev/null  &
   #celery flower --broker=$BROKER  --port=$CELERY_UI_PORT  -A $APP_NAME &
   echo "start celery ui server ok with $CELERY_UI_PORT"
}

#start the celery app start
#params:
#    -A   app name
#    -l   log level
#    -c   concurrency num
start_celery_app() {
  #celery worker --workdir tasks -A  $APP_NAME  -l info
  nohup celery worker --workdir tasks  -A $APP_NAME  -l info -c 2 >./app.log 2>.app.log  &
  #celery worker -A  $APP_NAME  -l info -c 5
}

test_app(){
    python tasks/client.py
}

stop_celery_app(){
  killall celery
}

case $1 in
    flower)
        start_celery_flower
        ;;
    app)
        start_celery_app
        ;;
    test)
        test_app
        ;;
    stop)
        stop_celery_app
        ;;
    help)
        echo "./celery_ctl.sh flower | app  | test| stop "
        ;;
      *)
        echo "./celery_ctl.sh flower | app  | test | stop "
        exit 2
esac