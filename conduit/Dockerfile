FROM python:3.10-alpine3.20 AS backend

WORKDIR /home/spirit/app
COPY backend/requirements.txt .

RUN python -m venv /opt/venv
RUN /opt/venv/bin/pip install --no-cache-dir -r requirements.txt

FROM node:22.3.0 AS frontend

WORKDIR /home/spirit/app
COPY frontend .

RUN npm install --ignore-scripts

FROM python:3.10-alpine3.20

RUN apk add nodejs npm && \
    adduser -S spirit
USER spirit
WORKDIR /home/spirit/app
EXPOSE 4200 8000
COPY --chown=spirit --chmod=755 --from=backend /opt/venv /home/spirit/app/backend/.venv
COPY --chown=spirit --chmod=755 --from=frontend /home/spirit/app /home/spirit/app/frontend
COPY --chown=spirit --chmod=755 backend /home/spirit/app/backend
COPY --chown=spirit --chmod=755 start.sh .
RUN chmod +x start.sh

CMD ["sh", "start.sh"]

# docker build .\conduit\ -t spirit/conduit
# docker run -d -p 4200:4200 -p 8000:8000 -v $PWD/storage/:/home/spirit/app/backend/database/ spirit/conduit