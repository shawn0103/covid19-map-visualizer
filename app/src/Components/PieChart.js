import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import vaccines from '../data/vaccines.json'

const PieChart = () => {
   
    ChartJS.register(ArcElement, Tooltip, Legend);
//15

const data = {
  labels: ['Pfizer', 'Moderna','Oxford','Sinopharm','Johnson&Johnson','Others'],
  datasets: [
    {
      label: 'Vaccines administered',
      data: [vaccines['Pfizer/BioNTech'], vaccines['Moderna'], vaccines['Oxford/AstraZeneca'], vaccines['Sinopharm/Beijing'], vaccines['Johnson&Johnson'],vaccines['Others']],
      backgroundColor: [
        'rgba(191, 97, 106, 0.5)',
        'rgba(136,192,208,0.5)',
        'rgba(235,203,139,0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(191, 97, 106, 1)',
        'rgba(136,192,208,1)',
        'rgba(235,203,139,1)',
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