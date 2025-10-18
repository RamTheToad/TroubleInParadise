from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/questions', methods=['GET'])
def get_questions():
    questions =[
        {"category": "Science", "difficulty": 100, "question": "What is the chemical symbol for water?", "answer": "H2O"},
        {"category": "Science", "difficulty": 100, "question": "What is the chemical symbol for water?", "answer": "H2O"},
    ]
    return jsonify(questions)
