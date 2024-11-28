FROM nikolaik/python-nodejs:python3.10-nodejs23-alpine

WORKDIR /home/spirit/app

COPY . .

RUN pip install -r backend/requirements.txt && \
python backend/manage.py migrate

RUN npm --prefix=frontend install

RUN chmod +x start.sh
EXPOSE 4200 8000
CMD ["sh", "start.sh"]

# docker build . -t spirit/conduit
# docker run -d -p4200:4200 -p8000:8000 spirit/conduit