from logging import debug
from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class MyFirst(Resource):
    def get(self):
        return {
            'Status': 'SUCESS',
            'Message': 'Hello World!'
            }
    
    def post(self,text):
        return {'Message': text}

api.add_resource(MyFirst, '/')

if __name__ == '__main__':
    app.run(debug=True)