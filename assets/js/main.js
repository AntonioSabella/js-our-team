const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


  /* MILESTONE 1 -- stampare in console informazioni di nome, ruolo e stringa immagine */

  console.log(team);

  for (let index = 0; index < team.length; index++) {
      const team_member = team[index];
      console.log(team_member['name']);
      console.log(team_member['role']);
      console.log(team_member['image']);
      console.log('___________');

  }

 /* MILESTONE 2 -- stampare a schermo le medesime informazioni */

 const elementList = document.getElementById('user_list') 
 for (let i = 0; i < team.length; i++) {
    const user_team = team[i];
    console.log(user_team); 
    const listItem = document.createElement('div'); 
    listItem.innerHTML += user_team['name'] + " | " + user_team['role'] + " | " + user_team['image'] 
    elementList.append(listItem); 
}

/* MILESTONE 3?? Non completa*/


let team_member = team[0];
let divTeamImg = document.querySelector('.team_member1 .image');
divTeamImg.innerHTML = team_member['image'];
let divTeamName = document.querySelector('.team_member1 .name');
divTeamName.innerHTML = team_member['name'];
let divTeamRole = document.querySelector('.team_member1 .role');
divTeamRole.innerHTML = team_member['role'];

team_member = team[1];
divTeamImg = document.querySelector('.team_member2 .image');
divTeamImg.innerHTML = team_member['image'];
divTeamName = document.querySelector('.team_member2 .name');
divTeamName.innerHTML = team_member['name'];
divTeamRole = document.querySelector('.team_member2 .role');
divTeamRole.innerHTML = team_member['role'];

team_member = team[2];
divTeamImg = document.querySelector('.team_member3 .image');
divTeamImg.innerHTML = team_member['image'];
divTeamName = document.querySelector('.team_member3 .name');
divTeamName.innerHTML = team_member['name'];
divTeamRole = document.querySelector('.team_member3 .role');
divTeamRole.innerHTML = team_member['role'];

team_member = team[3];
divTeamImg = document.querySelector('.team_member4 .image');
divTeamImg.innerHTML = team_member['image'];
divTeamName = document.querySelector('.team_member4 .name');
divTeamName.innerHTML = team_member['name'];
divTeamRole = document.querySelector('.team_member4 .role');
divTeamRole.innerHTML = team_member['role'];

team_member = team[4];
divTeamImg = document.querySelector('.team_member5 .image');
divTeamImg.innerHTML = team_member['image'];
divTeamName = document.querySelector('.team_member5 .name');
divTeamName.innerHTML = team_member['name'];
divTeamRole = document.querySelector('.team_member5 .role');
divTeamRole.innerHTML = team_member['role'];

team_member = team[5];
divTeamImg = document.querySelector('.team_member6 .image');
divTeamImg.innerHTML = team_member['image'];
divTeamName = document.querySelector('.team_member6 .name');
divTeamName.innerHTML = team_member['name'];
divTeamRole = document.querySelector('.team_member6 .role');
divTeamRole.innerHTML = team_member['role'];