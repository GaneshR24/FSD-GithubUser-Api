async function getGitHubUsers () {
    let response = await fetch("https://api.github.com/users");
    console.log(response);
    let data = await response.json();
    console.log(data);
    let person="";
    data.map((values) =>{
        person+= `<div class="card text-bg-dark mb-3 cards" style="max-width: 18rem;">
        <img src=${values.avatar_url} class="card-img-top" alt="${values.avatar_url}">
        <div class="card-body">
          <h5 class="card-title">Name: ${values.login}</h5>
          <a href=${values.html_url} target="_blank" class="btn btn-light">Profile Link</a>
        </div>
      </div>`
    });
    document.getElementById("root").innerHTML = person;
};
getGitHubUsers();