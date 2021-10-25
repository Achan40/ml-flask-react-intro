# ml-flask-react-intro

This project is a test project utilizing APIs, REACT, and websockets.

A machine learning model is built using a sample dataset. This model is saved using pickle, and served with a REST API built with Flask. Users can fill out a form on a REACT application and return a result from the model by a POST request to the API. 

Seperate from the model, a websocket is used so that users can view when other users have clicked a certain button.

Finally, I have dockerized each of the separate parts and linked them all together using docker compose.

Data analysis and model accuracy are not important for this project. I just wanted to practice deploying a model to a web application, front-end design using javascript, and other interesting technologies.
