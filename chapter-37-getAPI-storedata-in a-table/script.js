async function getdata() {
  let data = await fetch("https://dummyjson.com/users")
  const record=await data.json();

  let tab="";
  record.users.forEach(function (user) {
    tab +=`<tr>

    <td>${user.id}</td>
     <td>${user.firstName}</td>
      <td>${user.lastName}</td>
       <td>${user.age}</td>
        <td>${user.phone}</td>
         <td>${user.gender}</td>
    </tr>`
  });
  document.getElementById("tbdy").innerHTML=tab;
  console.log(record);
  
}

