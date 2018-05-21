function main(){
    const HyfReposHttps = 'https://api.github.com/orgs/HackYourFuture/repos';

    getRepositories(HyfReposHttps, xhrCallback);

    console.log('main!');
    
}

var repositories = [];

// Callback that handles response from server
function xhrCallback(data){
    repositories = JSON.parse(data);
    console.log(`Received and parsed ${repositories.length} repositories from server.`);
    showRepositoriesInSelect(repositories);
}

function showRepositoriesInSelect(repositories){
    const repositoriesSelectElement = document.querySelector('#repositories');
    repositoriesSelectElement.setAttribute('onchange', "getSelectedRepository(this)");

    repositories.forEach(repository => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', repository.id);
        optionElement.innerText = repository.name;

        repositoriesSelectElement.appendChild(optionElement);
    });
}

function getSelectedRepository(repositoriesSelectElement){
    const selectedRepository = repositories.filter(repository => {
        return repository.id === Number.parseInt(repositoriesSelectElement.value);
    })[0];

    console.log('Selected repository', selectedRepository);
}

// Function that makes an server request (API call)
function getRepositories(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}