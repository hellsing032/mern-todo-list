import React from 'react';

import Header from 'components/Header';
import TaskList from 'components/TaskList';

const App: React.FC = () => {
  return (
    <main className="container relative bg-purple-600	 mx-auto max-w-lg p-4 box-border min-h-screen">
      <Header/>
      <TaskList />
    </main>
  );
};

export default App;
