FROM nikolaik/python-nodejs:python3.10-nodejs23-bullseye

USER pn
WORKDIR /home/pn/app

COPY . .

RUN python -m venv .venv
RUN source .venv/bin/activate

RUN pip install -r backend/requirements.txt
#RUN python backend/manage.py migrate
#RUN python backend/manage.py runserver