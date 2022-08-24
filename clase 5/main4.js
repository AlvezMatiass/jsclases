// ejemplo conjunto

class Product{
    constructor( name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    get_data(){
        console.log("---- Stock Data ----")
        console.log("Product name:", this.name),
        console.log("Product price:", this.price);
        console.log("Product stock:", this.stock);
        console.log("--------------------")
    }

    get_stock(){
        if (this.stock < 3){
            console.log("insufficient inventory", this.stock);
        } else {
            console.log("sufficient stock" , this.stock);
        };
    }
    
    set_stock(){
        this.stock = this.stock;
    }

    get_new_stock(){
        console.log("--------");
        console.log(this.name);
        console.log("New product stock:", this.stock);
    }

    update_stock(){
        this.stock = this.stock - 1;
    }
}

let manzana = new product("Manzana", "50 pesos c/u", 2);
let naranja = new product("Naranja", "30 pesos c/u", 2);

manzana.get_data();

/*
naranja.get_data();

manzana.get_stock();
naranja.get_stock();

naranja.set_stock(5);
naranja.get_new_stock();
*/

if (manzana.get_stock() < 0) {
    console.log("Vendimos una Manzana");
    manzana.update_stock();
}

