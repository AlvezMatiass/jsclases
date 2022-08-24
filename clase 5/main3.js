// Tercera manera de declarar objetos
// Clases -> son planos para construir objetos, del plano de crean instancias del objeto

class User_twitch{
    constructor( user, email , password, banned){
        this.user = user;
        this.email = email;
        this.password = password;
        this.banned = banned;
    }

    greet(){
        console.log("Hola, tu estado de ban es:" , this.banned)
    }

    get_data(){
        console.log("<--- User Data --->");
        console.log("User:" , this.user);
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        console.log("Banned:", this.banned);
    }

    set_banned(){
        this.banned = this.banned;
    }

    get_banned(){
        console.log("------")
        console.log("banned:" , this.banned)
    }

};

// This -> notificar donde se ubica el objeto que estoy llamando
// con los metodos podes manipular las propiedades


let user_one = new User_twitch("Shenkku" , "matiasalvez2018@gmail.com" , "12345678" , "yes");
let user_two = new User_twitch("Koro" , "korodibuja@gmail.com" , "123456789" , "no");

user_one.get_data();
user_two.get_data();

user_one.set_banned("no");
user_two.get_banned();

/*
console.log(user_one.user);
user_one.greet();

console.log(user_two.user);
user_two.greet();
*/
