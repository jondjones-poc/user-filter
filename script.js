const resultElements = document.getElementById('result');
const filter = document.getElementById('filter');
let listItems = [];

const filterUsers = (searchTerm) => {
 
    listItems.forEach(item  => {
        console.log(item.innerText)
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

const getProfileData = async () => {
    const res = await fetch('https://randomuser.me/api/?results=50');
    const { results } = await res.json();

    resultElements.innerHTML = '';

    results.forEach(item => {

        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.picture.large}" />
            <div class="user-info">
                <h4>${item.name.first} ${item.name.last}</h4>
                <p>${item.location.city}, ${item.location.country}</p>
            </div>`;

        listItems.push(li);
        resultElements.appendChild(li);
    })
}

filter.addEventListener('input', (e) => filterUsers(e.target.value))

getProfileData();