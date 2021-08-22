from logging import debug
import re
from flask import Flask, request
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

# Flask automatically returns a json response if returned message is a python dict
class MyFirst(Resource):
    def get(self):
        return {
            'Status': 'SUCESS',
            'Message': 'Hello World!'
            }
    
    def post(self):
        data = request.get_json(force=True)
        
        return data

api.add_resource(MyFirst, '/')

if __name__ == '__main__':
    app.run(debug=True)