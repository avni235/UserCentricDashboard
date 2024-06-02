import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    fetch('./data/sampleData.jsonl')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const jsonData = lines.map(line => JSON.parse(line));
        setData(jsonData);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-white text-white dark:text-black p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-centre">Dashboard</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {data.length > 0 && (
        <div className="grid grid-cols-1 gap-8">
          <div className="h-1/4">
            <PieChart data={data} />
          </div>
          <div className="h-1/3">
            <BarChart data={data} />
          </div>
          <div className="h-1/3">
            <LineChart data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
