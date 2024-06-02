import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const categoryCounts = data.reduce((acc, curr) => {
    const category = curr.alert?.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: 'Alert Categories',
        data: Object.values(categoryCounts),
        backgroundColor: '#CF9FFF',
        borderColor: '#CF9FFF',
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="bg-grey p-6 rounded-lg shadow-lg backdrop-blur-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Alert Categories</h2>
      <div className="chart-container" style={{ margin: 'auto', maxWidth: '600px' }}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            aspectRatio: 2, // Set the aspect ratio to make the chart square
            plugins: {
              legend: {
                display: true,
                labels: {
                  font: {
                    size: 14,
                  },
                },
              },
              tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                bodyColor: '#000',
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    size: 12,
                  },
                  align: 'center', // Align category labels to center
                },
              },
              y: {
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                  font: {
                    size: 12,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
