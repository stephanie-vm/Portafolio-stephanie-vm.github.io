const urlGit = 'https://api.github.com/users/stephanie-vm/repos';
const list = document.getElementById('list-activity');

fetch(urlGit)
    .then((response) => response.json())
    .then((data) => {
    for (let i = 0; i < data.length; i++) {
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        list.classList.add('js-list-repos');
        const content = `
            <a href='${data[i].html_url}'>${data[i].name}</a>`
        listItem.innerHTML = content;
    }
});
console.log(urlGit);

