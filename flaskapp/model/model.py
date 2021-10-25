from pydataset import data
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
import pickle

# Making a simple RandomForest Classfication model

# load dataframe using iris dataset from pydataset package
df = data('iris')

# featuers
x = df[['Sepal.Length', 'Sepal.Width', 'Petal.Length', 'Petal.Width']]
# labels
y = df['Species']

# Split into training and testing data
# 70/30 split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3)

# creating the classifier
clf = RandomForestClassifier(n_estimators=100)

# training the model (note that there is no train test split)
clf.fit(x_train, y_train)

# make predictions using test dataset
y_pred = clf.predict(x_test)

print("Accuracy: ", metrics.accuracy_score(y_test,y_pred))

# saving trained model to disk
with open('iris_rfclass.pkl', 'wb') as file:
    pickle.dump(clf, file)