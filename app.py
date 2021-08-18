import flask
import pickle
from flask import Flask

# use pickle to load in the trained model
with open(f'model/irisrfclass.pkl','rb') as f:
    model = pickle.load(f)

# create flask object
app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return(flask.render_template('main.html'))

if __name__ == "__main__":
    # Set debug false when in production
    app.run(debug=True)