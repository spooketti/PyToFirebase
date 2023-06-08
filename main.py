import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import random

cred = credentials.Certificate("credent.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://pytojs-dc469-default-rtdb.firebaseio.com/"
})
ref = db.reference("Books/" + str(random.randint(1,100)))
ref.set({

		"Best_Sellers": 100
})