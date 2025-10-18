import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("/api/questions")
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Linear Algebra Jeopardy</h1>
      <ul>
        {questions.map(q => (
          <li key={q.prompt}>{q.category}: {q.prompt}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
