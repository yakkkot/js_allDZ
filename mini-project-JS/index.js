
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>{
        let wrap = document.createElement('div')
        wrap.classList.add('wrap');
        document.body.appendChild(wrap)
        json.forEach(users =>{
            let container = document.createElement('div')
            container.classList.add('container');
            wrap.appendChild(container);
            let h3 = document.createElement('h3')
            h3.innerText = `${users.id}. ${users.name}`

            let a = document.createElement('a')
            a.innerText = 'Information'
            a.href = `user-details/user-details.html?id=${users.id}`
            a.onclick = () =>{
                let arr = [];
                arr.push(users)
                localStorage.setItem('user',JSON.stringify(arr))
            }
            container.append(h3, a);
        })
    })