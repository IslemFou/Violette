// alert("js est activé !")
let form = document.querySelector("#form");
let clientButton = document.querySelector("#client");
let profButton = document.querySelector("#professionnel");
let nom = document.querySelector("#Nom");
let email = document.querySelector("#email");
let textarea = document.querySelector("message");

form.addEventListener("submit", function(event)
{
    event.preventDefault();
    let vNom = nom.value.trim();
    let vEmail = email.value.trim();
    let vtextarea = textarea.value.trim();

    let regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;


//création d'une fonction ajout de message d'erreur

function errorMsg()
{
let p = document.createElement("p");
   p.textContent = "* Ce champs n'est pas valide";
   //Ajout de l'attribut id , valeur de l'id
   p.setAttribute('id','errormsg');
   //ajout d'une classe s'appelle styleError
   p.setAttribute('class','styleError');

   //selectionner l'element à accrocher le parag à travers getElementById après on accroche le p à travers la méthode append(la const p)
   document.getElementById("Nom").append(p);
}

//fonction Validation()
function validation()
{

}



    //on teste le nom
    if (vNom.length < 5 || vNom.length > 15)
    {
         errorMsg();
    } else
    {
        
    }

    //on teste le email
    if (!regexEmail.test(vEmail))
    {

    }
});