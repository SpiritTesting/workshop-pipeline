FROM python:3.10 AS backend

WORKDIR /home/spirit/app
COPY backend .

# RUN python -m venv .venv
# RUN source .venv/bin/activate
RUN pip install --no-cache-dir -r requirements.txt
RUN python manage.py migrate

FROM node:23-slim AS frontend

WORKDIR /home/spirit/app
COPY frontend .

RUN npm install

FROM alpine:3.20.3

WORKDIR /home/spirit/app
EXPOSE 4200 8000
RUN apk add nodejs=20.15.1-r0 npm=10.9.1-r0 python3=3.12.7-r0
COPY start.sh .
RUN chmod +x start.sh
COPY --from=backend /home/spirit/app /home/spirit/app/backend
COPY --from=frontend /home/spirit/app /home/spirit/app/frontend

CMD ["sh", "start.sh"]

# docker build . -t spirit/conduit
# docker run -d -p4200:4200 -p8000:8000 spirit/conduit