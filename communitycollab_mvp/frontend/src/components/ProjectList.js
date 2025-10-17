import React, { useEffect, useState } from 'react';

export default function ProjectList(){
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/projects')
      .then(r=>r.json())
      .then(setProjects)
      .catch(err=>console.error(err));
  },[])

  return (
    <div>
      <h2>Projects</h2>
      {projects.map(p=> (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <ul>
            {p.tasks.map(t=> <li key={t.id}>{t.title} {t.done ? '✅' : ''}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
