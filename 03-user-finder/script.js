const users = [
    {
        name: "John Doe",
        bio: "Too cool to be true, always chasing new adventures.",
        image: "https://i.pinimg.com/1200x/52/bf/6c/52bf6ca380ccf69eb4696ea0663dccf7.jpg"
    },
    {
        name: "Emma Watson",
        bio: "Dream big, stay kind, and make every moment count.",
        image: "https://i.pinimg.com/736x/60/1f/3b/601f3bfe071d3fc17dbac6008d49daef.jpg"
    },
    {
        name: "Alex Morgan",
        bio: "Living life one beautiful sunset and coffee at a time.",
        image: "https://i.pinimg.com/736x/c5/d8/38/c5d83875b2f4b736cff7a4c514763bf4.jpg"
    },
    {
        name: "Sophia Miller",
        bio: "Finding beauty in simple things and unforgettable places.",
        image: "https://i.pinimg.com/736x/b5/f8/b8/b5f8b8fc55a5b1da1053f7f2b2589a30.jpg"
    },
    {
        name: "Ryan Cooper",
        bio: "Adventure awaits somewhere beyond the comfort zone.",
        image: "https://i.pinimg.com/1200x/9d/99/68/9d9968232177942be3d710afeb837262.jpg"
    },
    {
        name: "Olivia Smith",
        bio: "Collecting memories, not things, and enjoying every journey.",
        image: "https://i.pinimg.com/736x/83/57/b5/8357b5eb7e367ebe8236b4382dd8f209.jpg"
    },
    {
        name: "Ethan Brown",
        bio: "Music, mountains, photography, and a little bit of chaos.",
        image: "https://i.pinimg.com/736x/ec/ba/03/ecba0310438d678d9368293a30a49bde.jpg"
    },
    {
        name: "Mia Johnson",
        bio: "Just another human trying to turn dreams into reality.",
        image: "https://i.pinimg.com/1200x/26/43/a8/2643a8c56f6a879acfc79e74f7f113e2.jpg"
    },
    {
        name: "Noah Wilson",
        bio: "Stay curious. Keep learning. Never stop exploring.",
        image: "https://i.pinimg.com/736x/8a/9f/2c/8a9f2c3855dc042bbe05d6f19fbe4dd5.jpg"
    },
    {
        name: "Ava Anderson",
        bio: "Good vibes, deep conversations, and endless possibilities.",
        image: "https://i.pinimg.com/736x/bf/69/c1/bf69c106b104a9b7106289d2302dca8c.jpg"
    }
];


const cardTrack = document.querySelector(".card-track");

function showUsers(users) {

    cardTrack.innerHTML = "";

    users.forEach(user => {

        cardTrack.innerHTML += `
            <div class="card">
                <img class="bg-img" src="${user.image}" alt="${user.name}">

                <div class="content">
                    <h2 class="name">${user.name}</h2>
                    <p class="bio">${user.bio}</p>
                </div>

            </div>
        `;
    });
}

showUsers(users);

const input = document.querySelector(".input");
input.addEventListener("input", function(){

    const matchedUser = users.filter((user) => {
        return user.name.toLowerCase().includes(input.value.toLowerCase().trim());
    });
    cardTrack.innerHTML = "";
    showUsers(matchedUser);
});