function getUsers() {
  fetch("https://randomuser.me/api/")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      // console.log(data.results['0']);
      document.getElementById("nombre").innerHTML = data.results['0'].name.first + " " + data.results['0'].name.last;
      document.getElementById("email").innerHTML = " " + data.results['0'].email;
      document.getElementById("tel").innerHTML = " " + data.results['0'].cell;
      document.getElementById("ldin").innerHTML = " /" + data.results['0'].login.username;
      document.getElementById("git").innerHTML = " @" + data.results['0'].login.username;
      document.getElementById("fotoPerfil").setAttribute("src", data.results['0'].picture.medium);
      document.getElementById("domicilio").innerHTML = " " + data.results['0'].location.street.name + " " + data.results['0'].location.street.number + ", " + data.results['0'].location.city;

    });
}

getUsers();