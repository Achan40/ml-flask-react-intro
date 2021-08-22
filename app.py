import flask
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS # comment out on deployment
from api.myapi import MyFirst

import pickle
import pandas as pd

# create flask object
app = Flask(__name__, static_url_path='', static_folder='frontend/front')
CORS(app) # comment out on deployment
api = Api(app)

@app.route('/', defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(MyFirst, '/')

if __name__ == "__main__":
    # Set debug false when in production
    app.run(debug=True)