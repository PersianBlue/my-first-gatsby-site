import React from 'react'
import Layout from "../components/layout"

let link1 = "https://fullstackopen.com/"
let link2 = "https://www.gatsbyjs.com/docs/tutorial/part-2/"
let link3 = "https://leanpub.com/reactjsforthevisuallearner/read#leanpub-auto-chapter-1--what-is-this-all-about"
let link4 = "http://reactjs.org/tutorial"
let link5 = "https://github.com/PersianBlue/my-first-gatsby-site"
const links = [
    {id: 0, link: link1, name: "Full Stack Open Tutorial"},
    {id: 1, link: link2, name: "Gatsby tutorial"},
    {id: 2, link: link3, name: "Visual react Tutorial"},
    {id: 3, link: link4, name: "Reactjs.org tutorial"},
    {id: 4, link: link5, name: "Github Link for this code"}
]
const displayElement = (element) => (
    <ul key ={element.id}>
         <a href = {element.link} > {element.name} </a>
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
                <p>Here, we're using the map function to display an array of lists, no need for a loop function.</p>
                {displayArrayElements(links)}
        </Layout>
    )

}

export default usefulLinks