import flask
from flask import Flask

import pickle
import pandas as pd


# use pickle to load in the trained model
with open(f'model/iris_rfclass.pkl','rb') as f:
    model = pickle.load(f)

# create flask object
app = Flask(__name__, template_folder='templates')

@app.route('/', methods=['GET','POST'])
def main():
    if flask.request.method == 'GET':
        return(flask.render_template('main.html'))

    if flask.request.method == 'POST':
        SepalL = flask.request.form['Sepal.Length']
        SepalW = flask.request.form['Sepal.Width']
        PetalL = flask.request.form['Petal.Length']
        PetalW = flask.request.form['Petal.Width']

        input_variables = pd.DataFrame([[SepalL, SepalW, PetalL, PetalW]], columns=['Sepal.Length','Sepal.Width','Petal.Length','Petal.Width'], dtype=float)

        prediction = model.predict(input_variables)[0]

        return flask.render_template('main.html', original_input={'Sepal.Length':SepalL,'Sepal.Width':SepalW,'Petal.Length':PetalL,'Petal.Width':PetalW}, result=prediction)

if __name__ == "__main__":
    # Set debug false when in production
    app.run(debug=True)