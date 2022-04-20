import React from 'react'
import Layout from "../components/layout"

let link1 = "https://fullstackopen.com/"
let link2 = "https://www.gatsbyjs.com/docs/tutorial/part-2/"
let link3 = "https://leanpub.com/reactjsforthevisuallearner/read#leanpub-auto-chapter-1--what-is-this-all-about"
let link4 = "http://reactjs.org/tutorial"
let link5 = "https://github.com/PersianBlue/my-first-gatsby-site"
let link6 = "https://reactjs.org/docs/state-and-lifecycle.html"
let link7 = "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics"
let link8 = "https://overreacted.io/a-complete-guide-to-useeffect/";

const links = [
    {id: 0, link: link1, name: "Full Stack Open Tutorial"},
    {id: 1, link: link2, name: "Gatsby tutorial"},
    {id: 2, link: link3, name: "Visual react Tutorial"},
    {id: 3, link: link4, name: "Reactjs.org tutorial"},
    {id: 4, link: link5, name: "Github Link for this code"},
    {id: 5, link: link6, name: "React docs on state and lifecycle"},
    {id: 6, link: link7, name: "HTML Docs on Tables and styling tables"},
    {id: 7, link: link8, name: "Complete guide to useEffect"}

]
const displayElement = (element) => (
    <ul key ={element.id}>
        <li style = {{color: 'red', listStyleType: "disc"}}>
         <a href = {element.link} > {element.name} </a>
         </li>
    </ul>
   
)

const displayArrayElements = (arr) =>{
    return (
        arr.map(displayElement)
    )
}
const usefulLinks = () =>{
    
    return (
        <Layout pageTitle = "Useful Links">
                <h1>
                    Welcome to Useful Links!
                </h1>
                <h2>We're also using this page to store my to-do lists for now:  </h2>
                <p> 1. Move the to-do list to its own page </p>
                <p> 2. Find a way to display the bullet ponts for Useful Link </p>
                <p> 3. Learn about HTML input</p>
                <p> Here, we're using the map function to display an array of lists, no need for a loop function.</p>
                {displayArrayElements(links)}
        </Layout>
    )

}

export default usefulLinks