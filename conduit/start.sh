#!/bin/bash
/home/spirit/app/backend/.venv/bin/python backend/manage.py migrate
/home/spirit/app/backend/.venv/bin/python backend/manage.py runserver '0.0.0.0:8000' &
npm --prefix=frontend start &
wait -n
exit $?