FROM alpine

COPY ./functions/lib /lib
COPY ./qa_public /qa_public
COPY ./prod_public /prod_public