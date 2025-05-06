
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/courses")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  const fetchRecommendations = () => {
    if (!selectedCourse) return;
    
    fetch("http://127.0.0.1:5000/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ course_name: selectedCourse }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setRecommendations([]);
          alert(data.error);
        } else {
          setRecommendations(data.recommended_courses);
        }
      })
      .catch(error => console.error("Error fetching recommendations:", error));
  };

  return (
    <div style={{ textAlign: "center", fontSize: '18px', padding: "20px", color: "white", fontFamily: "serif"}}>
      <h2>Study Notion Course Recommendation System</h2>
      <p style={{marginBottom: '10px'}}>Find similar courses from a dataset of several courses!</p>

      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse} 
        style={{ backgroundColor: "white", color: "black", fontSize: '15px', padding: "4.5px 1px" }}>
        <option value="">Select a Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>{course}</option>
        ))}
      </select>

      <button onClick={fetchRecommendations} 
        style={{ marginLeft: "15px", padding: "2.5px 10px", border: '1px solid white', borderRadius: '5px', fontSize: '15px'}}>
        Show Recommended Courses
      </button>

      {recommendations.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>Recommended Courses:</h4>
          <ul>
            {recommendations.map((course, index) => (
              <li key={index} style={{ cursor: "pointer", color: "lightblue", textDecoration: "underline" }}
                onClick={() => navigate(`/course/${encodeURIComponent(course)}`)}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Course Details Page
const CourseDetail = () => {
  const { courseName } = useParams();
  return (
    <div style={{ textAlign: "center", fontSize: '20px', padding: "50px", color: "white" }}>
      <h2>Course Details for: {decodeURIComponent(courseName)}</h2>
      <p>More information about the selected course will be displayed here.</p>
      <a href="/">Go Back</a>
    </div>
  );
};

// App Component with Routing (No Router Here)
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:courseName" element={<CourseDetail />} />
    </Routes>
  );
};

export default App;
