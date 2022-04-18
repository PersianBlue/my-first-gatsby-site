import React from 'react'
import Layout from "../components/layout"

let link1 = "https://fullstackopen.com/"
let link2 = "https://www.gatsbyjs.com/docs/tutorial/part-2/"
let link3 = "https://leanpub.com/reactjsforthevisuallearner/read#leanpub-auto-chapter-1--what-is-this-all-about"
let link4 = "http://reactjs.org/tutorial"
const links = [
    {id: 0, link: link1, name: "Full Stack Open Tutorial"},
    {id: 1, link: link2, name: "Gatsby tutorial"},
    {id: 2, link: link3, name: "Visual react Tutorial"},
    {id: 3, link: link4, name: "Reactjs.org tutorial"}
]
const displayElement = (element) => (
    <ul>
         <a href = {element.link}> {element.name} </a>
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
                {displayArrayElements(links)}
        </Layout>
    )

}

export default usefulLinks