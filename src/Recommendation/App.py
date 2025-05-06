import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Load Data
courses_list = pickle.load(open('courses.pkl', 'rb'))
similarity = pickle.load(open('similarity.pkl', 'rb'))

# Convert to DataFrame if not already
if not isinstance(courses_list, pd.DataFrame):
    courses_list = pd.DataFrame(courses_list, columns=['course_name'])

# API to fetch all courses
@app.route('/api/courses', methods=['GET'])
def get_courses():
    return jsonify(courses_list['course_name'].tolist())

# Recommendation function
def recommend(course):
    if course not in courses_list['course_name'].values:
        return []

    index = courses_list[courses_list['course_name'] == course].index[0]
    distances = sorted(enumerate(similarity[index]), reverse=True, key=lambda x: x[1])
    
    recommended_course_names = [
        courses_list.iloc[i[0]].course_name for i in distances[1:6] if i[0] < len(courses_list)
    ]
    return recommended_course_names

# API to fetch recommended courses
@app.route('/api/recommend', methods=['POST'])
def get_recommendations():
    data = request.json
    course_name = data.get("course_name", "")

    recommendations = recommend(course_name)
    if not recommendations:
        return jsonify({"error": "Course not found"}), 400

    return jsonify({"recommended_courses": recommendations})

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Ensure Flask runs on port 5000
