# Using Ubuntu
FROM python:3.9
WORKDIR /app

# copy requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

RUN python3 -m pip install -U pip
RUN pip install -r requirements.txt

COPY . /app
EXPOSE 5000
ENTRYPOINT FLASK_APP=app.py flask run --host=0.0.0.0
