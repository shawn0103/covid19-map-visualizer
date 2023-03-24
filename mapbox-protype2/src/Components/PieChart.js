import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
//import vaccines from '../../../server/vaccines.json'

const PieChart = () => {
   
    ChartJS.register(ArcElement, Tooltip, Legend);
//15

const data = {
  labels: ['Pfizer', 'Moderna','Oxford','Sinopharm','Johnson&Johnson','Others'],
  datasets: [
    {
      label: 'Vaccines administered',
      data: [939904167926, 263357674637, 82093563042, 31021031484, 26013600382,31018721338],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }
  ]
};

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#E5E9F0',
          font: {
            family: "Roboto, sans-serif",
            size: 15
          }
        }
      }
    }
  };

  return (
    <Pie data={data} options={options}/>
  )
}

export default PieChart