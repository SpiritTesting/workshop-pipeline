#!/bin/bash
python backend/manage.py runserver 0.0.0.0:8000 &
npm --prefix=frontend start &
wait -n
exit $?