


let postsElement = document.querySelector('#post')
let createPosts = async() => {
    let post = {
        userId :1,
        title:"Notre post",
        body:"Nous avons nous même creer ce post",

    }

    let response= await fetch ('https://jsonplaceholder.typicode.com/'{ 
        method: 'POST',
        headers :{
            'content-type': 'application/json'
        },
        body :JSON.stringify(post)
    })
    let data= await response.json()
    console.log(data)

} 

createPost()

let getposts=async()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/')
    let data= await response.json()
    console.log(data);
    data.forEach(post =>{
        let postElement.innerHTML= `
        <h3>${post.title}</h3>
        <p> ${post.body} </p>`


    })




} 