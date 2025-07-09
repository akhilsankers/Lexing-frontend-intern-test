import React, { useState } from 'react'
import Header from './Components/Header'
import QueryForm from './Components/QueryForm'
import AnswerCard from './Components/AnswerCard'
import { simulateLegalQueryAPI } from './Api/mockApi';

function App() {
  const [query, setQuery] = useState("");
  const [responce, setResponce] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    const data = await simulateLegalQueryAPI(query);
    setResponce(data);
    setLoading(false);

  }
  return (
    <div>
      <Header />
      <QueryForm
        query={query}
        setQuery={setQuery}
        onSubmit={handleSubmit}
        loading={loading} />
      {responce && <AnswerCard answer={responce.answer} citations={responce.citations} />}
    </div>
  )
}

export default App