// Backgroud Flipper/Changer App
// var btnBG = document.getElementById("btnchangebg");

// btnBG.addEventListener('click', function() {
//     let color = Math.floor(Math.random() * 360);
//     document.body.style.backgroundColor = `hsl(${color},100%,50%)`;
// })


// Night mode Toggler
// var toggler = document.getElementById("toggler");

// toggler.addEventListener('change', function(event) {
//     console.log(event.target)
//     if(event.target.checked) {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }
// })



// Github App
let wrapper = document.getElementById("wrapper");

let username = document.getElementById("username");

let button = document.getElementById("mybutton");

button.addEventListener('click', function() {
    const url = `https://api.github.com/users/${username.value}`;
    fetch(url).then(resp => resp.json().then(data123 => {
        console.table(data123)
        let Name = document.createElement("h1");
        Name.textContent = data123.name;
        let userImage = document.createElement("img");
        userImage.src = data123.avatar_url;
        wrapper.appendChild(userImage);
        wrapper.appendChild(Name);
    })
    )
    .catch(err => {
        console.log(err.message);
    })
})




