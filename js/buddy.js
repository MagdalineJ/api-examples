const loadBuddies = () => {
fetch('https://randomuser.me/api/?results=5')
.then(res => res.json())
.then(json=> displayBuddies(json))
}
// loadBuddies();
const displayBuddies = data => {
const buddies= data.results;
const buddiesDiv =document.getElementById('buddies')
for (const buddy of buddies){
const p = document.createElement('p');
p.innerText=` Email:${buddy.email} 
                Name:${buddy.name.first} ${buddy.name.last}`;
buddiesDiv.appendChild(p);
}
}