'use strict'

const searchButton = document.querySelector('.search')
const username = document.querySelector('.username')

const searchUser = async () => {
    const result = await fetch(`https://api.github.com/users/${username.value}`)
    const resultToJson = await result.json();
    //USERNAME
    const yourUserName = document.querySelector('.name')
      yourUserName.innerHTML = `<h2>Username </h2><h4 class="result">${resultToJson.login}</h4>`
    //USERALIAS
    const userAlias = document.querySelector('.alias')
        userAlias.innerHTML = `<h2>Alias </h2><h4 class="result">${resultToJson.name}</h4>`
    //USERIMG
    const img = document.querySelector(".avatarImg");
      img.src = resultToJson.avatar_url;
      img.alt = "avatar";
    //USERTOTALREPOS
    const totalRepos = document.querySelector('.numberOfRepos')
      totalRepos.innerHTML = `<h2 class="repos">Número de repositorios </h2><h4 class="result">${resultToJson.public_repos}</h4>`
    //FOLLOWERS
    const followers = document.querySelector('.followers')
      followers.innerHTML = `<h2>Followers </h2><h4 class="result">${resultToJson.followers}</h4>`
    //FOLLOWING
    const following = document.querySelector('.following')
    following.innerHTML = `<h2>Following </h2><h4 class="result">${resultToJson.following}</h4>`
    //DATE CREATE
     const dateCreate = document.querySelector('.dateOfCreate')
     dateCreate.innerHTML = `<h2 class="date">Fecha de creación de la cuenta </h2><h4 class="result dateResult">${resultToJson.created_at}</h4>`
     //LAST UPDATE
     const lastUpdate = document.querySelector('.lastUpdate')
     lastUpdate.innerHTML = `<h2 class="date lUpdate">Última actualización de la cuenta </h2><h4 class="result dateResult">${resultToJson.updated_at}"</h4>`
}
searchButton.addEventListener('click', searchUser)

//BUSCADOR ORGS GITHUB

const searchOrgButton = document.querySelector('.searchGithubOrg')
const orgName = document.querySelector('.orgName')

const getGithubOrg = async () => {
    const result = await fetch(`https://api.github.com/orgs/${orgName.value}`)
    const resultToJson = await result.json()
    //USERNAME
    const name = document.querySelector('.nameOrg')
      name.innerHTML = `<h2>Org name </h2><h4 class="result">${resultToJson.name}</h4>`
    //AVATAR IMG
    const img = document.querySelector(".avatarOrgImg");
      img.src = resultToJson.avatar_url;
      img.alt = "avatar";
    //WEBSITE
    const website = document.querySelector('.website')
    website.innerHTML = `<h2>Website </h2><a href="${resultToJson.blog}">${resultToJson.blog}</a>`
    //EMAIL
    const email = document.querySelector('.email')
    email.innerHTML = `<h2>Email </h2><h4 class="result">${resultToJson.email}</h4>`
    //NACIONALIDAD
    const location = document.querySelector('.location')
    location.innerHTML = `<h2>Location </h2><h4 class="result">${resultToJson.location}</h4>`
    //TWITTER
    const twitter = document.querySelector('.twitter')
    twitter.innerHTML = `<h2>Twitter </h2><h4 class="result">${resultToJson.twitter_username}</h4>`
    
    //ORGTOTALREPOS
    const totalRepos = document.querySelector('.numberOfReposOrg')
      totalRepos.innerHTML = `<h2 class="repos">Número de repositorios </h2><h4>${resultToJson.public_repos}</h4>`
    //ORG FOLLOWERS
    const followers = document.querySelector('.followersOrg')
      followers.innerHTML = `<h2>Followers </h2><h4 class="result">${resultToJson.followers}</h4>`
    //ORG FOLLOWING
    const following = document.querySelector('.followingOrg')
    following.innerHTML = `<h2>Following </h2><h4 class="result">${resultToJson.following}</h4>`
    //DATE CREATE
    const dateCreate = document.querySelector('.dateOfCreateOrg')
    dateCreate.innerHTML = `<h2 class="date">Fecha de creación de la cuenta </h2><h4 class="result dateResult">${resultToJson.created_at}</h4>`
    //LAST UPDATE
    const lastUpdate = document.querySelector('.lastUpdateOrg')
    lastUpdate.innerHTML = `<h2 class="date lUpdate">Última actualización de la cuenta </h2><h4 class="result dateResult">${resultToJson.updated_at}"</h4>`
}
searchOrgButton.addEventListener('click', getGithubOrg);
