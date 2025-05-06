
# <==== Importing Dependencies ====>

import os
import pickle
import streamlit as st

# <==== Code starts here ====>

courses_list = pickle.load(open('courses.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))

def recommend(course):
    index = courses_list[courses_list['course_name'] == course].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_course_names = []

    for i in distances[0:5]:
        if (i[0] < len(courses_list)):  # Ensure index exists
            course_name = courses_list.iloc[i[0]].course_name
            recommended_course_names.append(course_name)

    return recommended_course_names

st.markdown("<h2 style='text-align: center; color: white; font-family: Georgia, serif;'>Study Notion Course Recommendation System</h2>", unsafe_allow_html=True)

st.markdown("<h6 style='text-align: center; color: white; margin-bottom: 30px;'>Find similar courses from a dataset of over several courses from Study notion!</h6>", unsafe_allow_html=True)

course_list = courses_list['course_name'].values

selected_course = st.selectbox(
    "Type or select a course you like :",
    courses_list
)

if st.button('Show Recommended Courses'):
    st.write("Recommended Courses based on your interests are :")
    recommended_course_names = recommend(selected_course)
    # st.text(recommended_course_names[0])
    st.text(recommended_course_names[1])
    st.text(recommended_course_names[2])
    st.text(recommended_course_names[3])
    st.text(recommended_course_names[4])