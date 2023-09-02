


let postsElement = document.querySelector('#post')
let fecthPosts = async() => {
    let reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await reponse.json()
    return posts
} 
let renderPosts = async () =>{
    let post = await fecthPosts()
     post.map(post => {

     postsElement.innerHTML += `<h3>${post.id}, ${post.title}<h3><p>${post.title} </p>`
    })
}
renderPosts()