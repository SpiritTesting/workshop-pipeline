FROM python:3.10-alpine3.20 AS backend

WORKDIR /home/spirit/app
COPY backend/requirements.txt .

RUN python -m venv /opt/venv
RUN /opt/venv/bin/pip install --no-cache-dir -r requirements.txt

FROM oven/bun:1.1.29-alpine AS frontend

WORKDIR /home/spirit/app
COPY frontend/bun.lockb ./
COPY frontend/*.json ./
COPY frontend/src ./src

RUN apk add python3
RUN bun install --production
RUN bun run build -c production --verbose

FROM python:3.10-alpine3.20

RUN apk add nodejs npm
WORKDIR /home/spirit/app
EXPOSE 8000
COPY --chown=root:root --chmod=755 --from=backend /opt/venv /home/spirit/app/backend/.venv
COPY --chown=root:root --chmod=755 --from=frontend /home/spirit/app/dist/frontend/browser /home/spirit/app/frontend/dist/frontend/browser
COPY --chown=root:root --chmod=755 backend /home/spirit/app/backend
COPY --chown=root:root --chmod=755 start.sh .

CMD ["sh", "start.sh"]

# docker build .\conduit\ -t spiritindianer/workshop-pipeline
# docker run -d -p 8000:8000 -v $PWD/storage/:/home/spirit/app/backend/database/ spirit/conduit