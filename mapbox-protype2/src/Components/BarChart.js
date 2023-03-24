import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import './map.css'

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Vaccine Data',
      color: '#E5E9F0',
      font: {
        family: "Roboto, sans-serif",
        size: 20
      }
    },
  },
  scales: {
    x: {
      ticks: {
        display: false
      }
    },
    y:{
      ticks:{
        color: '#E5E9F0',
        font: {
          family: "Roboto, sans-serif",
          size: 12
        }
      }
    }
  }
};




const BarChart = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

  //const labels = ['', '','','','', ''];

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

  /*
    const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'Pfizer',
        data: [939904167926],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        barWidth : 1,
        barPercentage: 2,
        categoryPercentage: 1
      },
      {
        label: 'Moderna',
        data: [263357674637],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        barWidth : 1,
        barPercentage: 2,
        categoryPercentage: 1
      },
      {
        label: 'Johnson&Johnson',
        data: [26013600382],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        barWidth : 1,
        barPercentage: 2,
        categoryPercentage: 1
      },
      {
        label: 'Sinopharm',
        data: [31021031484],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        barWidth : 1,
        barPercentage: 2,
        categoryPercentage: 1
      },
      {
        label: 'Oxford',
        data: [82093563042],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        barWidth : 1,
        barPercentage: 2,
        categoryPercentage: 1
      },
      {
        label: 'Others',
        data: [31018721338],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        barWidth : 1,
        barPercentage: 2,
        categoryPercentage: 1
      },
    ],
  };
  
  */
  
  
  
  return (
    <Bar options={options} data={data}/>
  )
}

export default BarChart