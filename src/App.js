import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from './components/Hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const { isLoading, error, sendRequest: fetchTasks } = useHTTP();
  useEffect(() => {
    const transformTasks = tarsksObj => {
      const loadedTasks = [];

      for (const taskKey in tarsksObj) {
        loadedTasks.push({ id: taskKey, text: tarsksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks({url: 'https://react-backend-26d42-default-rtdb.firebaseio.com/tasks.json'}, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
