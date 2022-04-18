import * as React from 'react'
import Layout from '../components/layout'
import App from '../components/App'
import ButtonMaster from '../components/ButtonMaster'

let counter = 1;

/*const updateCounter = () =>{
  counter +=1;
}
const refresh = () =>{
  return (
    <div>
      <p>I'm calling my refresh function</p>
      <App counter = {counter}/>
      {updateCounter()}
    </div>
  )
}*/


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hey guys, welcome back to my Youtube channel!</p>
      <App counter = {counter}/>
      <ButtonMaster />
      
    </Layout>
  )
}
export default IndexPage