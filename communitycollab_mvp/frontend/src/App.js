import React from 'react';
import ProjectList from './components/ProjectList';
import ChatPanel from './components/ChatPanel';

function App(){
  return (
    <div className="app">
      <header className="header">CommunityCollab (MVP Demo)</header>
      <main className="main">
        <div className="left">
          <ProjectList />
        </div>
        <div className="right">
          <ChatPanel />
        </div>
      </main>
    </div>
  )
}

export default App;
