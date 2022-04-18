import * as React from 'react'
import Layout from '../components/layout'
import App from './App'

let counter = 1;

const updateCounter = () =>{
  counter +=1;
}
const refresh = () =>{
  return (
    <div>
      <p>I'm calling my refresh function</p>
      <App counter = {counter}/>
      {/*updateCounter()*/}
    </div>
  )
}


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following the Gatsby Tutorial.</p>
      <App counter = {counter}/>
      {/*refresh()*/}
    </Layout>
  )
}
export default IndexPage