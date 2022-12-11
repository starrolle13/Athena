import './App.css';
import CardContainer from './components/CardContainer';
import {data} from '././data/nineCardData'
// import { useEffect } from 'react';
// import fetchMoviesJSON  from './data/fetch';

function App() {
// useEffect(()=>{
//  fetchMoviesJSON()
// }, [])

// function fetchMoviesJSON() {
//   fetch('https://pgf7hywzb5.execute-api.us-east-1.amazonaws.com/users/1', {mode:'cors'})
//   .then(data => {
//     console.log(data)
//   return data.json();
//   })
// }
//  fetchMoviesJSON()

// const URL = 'https://pgf7hywzb5.execute-api.us-east-1.amazonaws.com/users/1'

// fetch(URL,
//   {
//       method: "POST",
//       body: JSON.stringify(data),
//       mode: 'cors',
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   }
// ).then(response => response.json())
// .then(data => {
//  console.log(data)
// })
// .catch((err) => {
//  console.log(error)
//   })
// })


  return (
    <div className='App'>
      <div className='socialSecurity'></div>
       <div className='nineCards'>   
        {data.map((item, index)=>{
          return(       
        <CardContainer key={index} title={item.title} subtitle={item.subtitle} content={item.content}/>  
        )})}
      </div>
    </div>
  )
}

export default App;
