let users = JSON.parse(localStorage.getItem('user'));
let user = users[users.length - 1]
console.log(user);

let globalContainer = document.createElement('div')
globalContainer.classList.add('main_container')
document.body.appendChild(globalContainer)

let container = document.createElement('div')
container.classList.add('container')
globalContainer.appendChild(container)

function createdBlocks (object,div){
    for (const objectKey in object) {
        if (typeof object[objectKey] !== "object"){
            let p = document.createElement('p');
            let text = objectKey[0].toUpperCase() + objectKey.slice(1) + ': '
            p.innerHTML = `<b>${text}</b> ${object[objectKey]}`
            p.classList.add('user_paragraph')
            div.appendChild(p);
        }
        else{
            let smallContainer = document.createElement('div')
            smallContainer.classList.add('small_container')
            div.appendChild(smallContainer)
            let h5 = document.createElement('h5')
            h5.innerText = objectKey[0].toUpperCase() + objectKey.slice(1) + ':'
            smallContainer.appendChild(h5)
            createdBlocks(object[objectKey],smallContainer)
        }
    }

}
createdBlocks(user, container);

let btn = document.createElement('button');
btn.innerText = 'Title';
btn.classList.add('button')
globalContainer.appendChild(btn)
let globalDivForPosts = document.createElement('div')
globalDivForPosts.classList.add('global_posts')
document.body.appendChild(globalDivForPosts)

globalDivForPosts.classList.toggle('hidden_block')

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(json => {
        json.forEach(post => {

            let divPost = document.createElement('div')
            divPost.classList.add('post-title')
            globalDivForPosts.appendChild(divPost)

            let h3 = document.createElement('h3')
            h3.classList.add('title_text')
            h3.innerText = post.title[0].toUpperCase() + post.title.slice(1)
            divPost.appendChild(h3)

            let a = document.createElement('a')
            a.innerText = ('Information about post');
            divPost.appendChild(a)
            a.href = `/mini-project-JS/post-details/post-details.html?id=${post.id}`
            a.addEventListener('click', (event) => {
                let arr = []
                arr.push(post)
                localStorage.setItem('post', JSON.stringify(arr))

            })
        })
    });
btn.onclick = () => {
    globalDivForPosts.classList.toggle('hidden_block')
}
