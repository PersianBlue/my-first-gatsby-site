import * as React from 'react'
import Layout from '../components/layout'
import App from '../components/App'
import ButtonMaster from '../components/ButtonMaster'
import "../components/indexBackground.css";

let counter = 1;

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <body>
        <p>Hey guys, welcome back to my Youtube channel!</p>
        <App counter = {counter}/>
        <ButtonMaster />
      </body>
      
      
    </Layout>
  )
}
export default IndexPage