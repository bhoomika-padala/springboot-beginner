var users=[
    {
        "name":"John Doe",
        "profession":"IT Professional",
        "image":"/images/john.png"
    },
    {
        "name":"jane Doe",
        "profession":"IT Professional",
        "image":"/images/jane.png"
    }

];
var id=0;
 function toggle(){
    id=(id+1)%2;
    var user=users[id];
    document.getElementById("name").innerText =user.name;

    document.getElementById("profession").innerText =user.profession;

    document.getElementById("image").src =user.image;

 }