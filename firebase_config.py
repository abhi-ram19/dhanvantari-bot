import firebase_admin
from firebase_admin import credentials, firestore

# Path to your downloaded service account key
cred = credentials.Certificate("serviceAccountKey.json")

# Initialize Firebase app (only once)
firebase_admin.initialize_app(cred)

# Get Firestore database instance
db = firestore.client()
