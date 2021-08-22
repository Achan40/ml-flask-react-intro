import pickle
import pandas as pd

from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

# use pickle to load in the trained model
with open(f'model/iris_rfclass.pkl','rb') as f:
    model = pickle.load(f)

# Flask automatically returns a json response if returned message is a python dict
class MyFirst(Resource):
    def get(self):
        return {
            'Status': 'SUCESS',
            'Message': 'Hello World!'
            }
    
    def post(self):
        data = request.get_json(force=True)

        # Requires keys SepalL,SepalW,PetalL,PetalW (parameters for model) in order to return the output of the model
        input_variables = pd.DataFrame([[data['SepalL'], data['SepalW'], data['PetalL'], data['PetalW']]], columns=['Sepal.Length','Sepal.Width','Petal.Length','Petal.Width'], dtype=float)
        prediction = model.predict(input_variables)[0]

        data['Prediction'] = prediction

        return data

api.add_resource(MyFirst, '/')

if __name__ == '__main__':
    app.run(debug=True)