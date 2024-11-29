FROM python:3.10-alpine3.20 AS backend

WORKDIR /home/spirit/app
COPY backend/requirements.txt .

RUN python -m venv /opt/venv
RUN /opt/venv/bin/pip install --no-cache-dir -r requirements.txt

FROM node:22.3.0 AS frontend

WORKDIR /home/spirit/app
COPY frontend .

RUN npm install

FROM python:3.10-alpine3.20

WORKDIR /home/spirit/app
EXPOSE 4200 8000
RUN apk add nodejs npm
COPY start.sh .
RUN chmod +x start.sh
COPY --from=backend /opt/venv /home/spirit/app/backend/.venv
COPY --from=frontend /home/spirit/app /home/spirit/app/frontend
COPY backend /home/spirit/app/backend
RUN /home/spirit/app/backend/.venv/bin/python backend/manage.py migrate

CMD ["sh", "start.sh"]

# docker build . -t spirit/conduit
# docker run -d -p 4200:4200 -p 8000:8000 spirit/conduit