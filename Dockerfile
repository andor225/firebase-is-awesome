FROM alpine

COPY ./functions/lib /functions/lib
COPY ./qa_public /qa_public
COPY ./prod_public /prod_public

COPY ./appengine/lib /appengine/lib