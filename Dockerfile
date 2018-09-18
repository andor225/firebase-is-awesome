FROM alpine

COPY ./functions/lib /functions_lib
COPY ./functions/node_modules /function_modules

COPY ./qa_public /qa_public
COPY ./prod_public /prod_public
COPY ./webapp/node_modules /webapp_modules

COPY ./appengine/lib /appengine_lib