import './App.css';
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data1 = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [50, 50, 20],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


function App() {
  return (
    <div className="App">
<div className="ex1">
<h2>Pie Example</h2>
        <Pie data={data1} />
        
        

        <h2>Bar Example (custom size)</h2>    

        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />

</div>
        
    

    </div>
  );
}

export default App;
