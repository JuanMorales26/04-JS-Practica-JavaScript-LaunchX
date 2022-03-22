/*console.log("Hola Explorers");*/
var actpokemon=0;

const fetchPokemon = () =>  {
    restart();
    const pokeName= document.getElementById("pokeName"); /*Crea un objeto en base al valor de la entrada pokeName*/
    let pokeInput = pokeName.value.toLowerCase(); /*Toma el valor en el input texto llamado pokeName en el html*/
        const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; /*Crea una variable que guarda la url a ejecutar en la appi de pokemones. Le agrega el nombre del pokemos a buscar*/
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("https://i.ibb.co/vx2xCxK/Pokemon-No-Found.png");
            pokeID.value="#000-Don't Exist!";
            actpokemon=0;
        }
        else{
                return res.json();
            }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        const id= "#0"+ data.id + "- "+data.name.charAt(0).toUpperCase()+data.name.slice(1);
        actpokemon=data.id;
        /*console.log(pokeImg);*/
        pokeID.value= id;
        pokeImage(pokeImg);
        pokeAbilities(data);
        pokeStats(data);
        pokeSize(data);
        pokeItems(data);
        pokeMoves(data);
    })   
}
const fetchItems = (item_url, i) =>  {
    const url= item_url;
        fetch(url).then((res) => {
            if(res.status != "200"){
            /*console.log(res);
            pokeImage("https://i.ibb.co/vx2xCxK/Pokemon-No-Found.png");
            pokeID.value="#000-Don't Exist!";*/
    }
    else{
            return res.json();
        }
            }).then((data) => {
                /*console.log(data);*/
                eval("item_"+(i+1)+".style =`background-image: url(${data.sprites.default}); background-repeat: no-repeat; background-position: center; background-size: cover;`");
    })   
}

const fetchLeftGuide = () =>  {
    restart();
        if(actpokemon == 0){
            let pokeInput = "bulbasaur";
            const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
            fetch(url).then((res) => {
                if(res.status != "200"){
                    console.log(res);
                    pokeImage("https://i.ibb.co/vx2xCxK/Pokemon-No-Found.png");
                    pokeID.value="#000-Don't Exist!";
                }
                else{
                return res.json();
                }
            }).then((data) => {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                const id= "#0"+ data.id + "- "+data.name.charAt(0).toUpperCase()+data.name.slice(1);
                actpokemon= data.id;
                /*console.log(pokeImg);*/
                pokeID.value= id;
                pokeImage(pokeImg);
                pokeAbilities(data);
                pokeStats(data);
                pokeSize(data);
                pokeItems(data);
            })
        }
        else{
            const url= `https://pokeapi.co/api/v2/pokemon/${actpokemon-1}`; 
            fetch(url).then((res) => {
            if(res.status != "200"){
                console.log(res);
                pokeImage("https://i.ibb.co/vx2xCxK/Pokemon-No-Found.png");
                pokeID.value="#000-Don't Exist!";
                actpokemon=0;
            }
            else{
                return res.json();
            }
            }).then((data) => {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                const id= "#0"+ data.id + "- "+data.name.charAt(0).toUpperCase()+data.name.slice(1);
                actpokemon=data.id;
                /*console.log(pokeImg);*/
                pokeID.value= id;
                pokeImage(pokeImg);
                pokeAbilities(data);
                pokeStats(data);
                pokeSize(data);
                pokeItems(data);
                pokeMoves(data);
            })  
        }  
    }

const fetchRightGuide = () =>  {
    restart();
        if(actpokemon == 0){
            let pokeInput = "bulbasaur";
            const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
            fetch(url).then((res) => {
                if(res.status != "200"){
                    console.log(res);
                    pokeImage("https://i.ibb.co/vx2xCxK/Pokemon-No-Found.png");
                    pokeID.value="#000-Don't Exist!";
                }
                else{
                return res.json();
                }
            }).then((data) => {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                const id= "#0"+ data.id + "- "+data.name.charAt(0).toUpperCase()+data.name.slice(1);
                actpokemon= data.id;
                /*console.log(pokeImg);*/
                pokeID.value= id;
                pokeImage(pokeImg);
                pokeAbilities(data);
                pokeStats(data);
                pokeSize(data);
                pokeItems(data);
            })
        }
        else{
            const pokeName= document.getElementById("pokeName"); /*Crea un objeto en base al valor de la entrada pokeName*/
            let pokeInput = pokeName.value.toLowerCase(); /*Toma el valor en el input texto llamado pokeName en el html*/
            const url= `https://pokeapi.co/api/v2/pokemon/${actpokemon+1}`; /*Crea una variable que guarda la url a ejecutar en la appi de pokemones. Le agrega el nombre del pokemos a buscar*/
            fetch(url).then((res) => {
            if(res.status != "200"){
                console.log(res);
                pokeImage("https://i.ibb.co/vx2xCxK/Pokemon-No-Found.png");
                pokeID.value="#000-Don't Exist!";
            }
            else{
                return res.json();
            }
            }).then((data) => {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                const id= "#0"+ data.id + "- "+data.name.charAt(0).toUpperCase()+data.name.slice(1);
                actpokemon=data.id;
                /*console.log(pokeImg);*/
                pokeID.value= id;
                pokeImage(pokeImg);
                pokeAbilities(data);
                pokeStats(data);
                pokeSize(data);
                pokeItems(data);
                pokeMoves(data);
            })  
        }  
    }

/*Funciones*/
const restart = () =>{
    let values= ["PS_","ATK_","DEF_","SP_ATK_","SP_DEF_","SPEED_"];
    for(var z=0; z<=values.length;  z++){
        for(var i=1;    i<=10;  i++){
            eval(values[z]+(i)+".style ='background-image: url();'");
        }
    }
    for(i=1;i<=5;i++){
        eval("item_"+(i)+".style ='background-image: url();'");
        eval("move_"+(i)+".value =''");
        eval("move_"+(i)+"_1.value =''");
    }
}
const pokeImage = (url) =>{
    const pokeIMG = document.getElementById("pokeImg");
    pokeImg.src= url;
    pokeName.value="";
}
const pokeStats = (data) =>{
/*Stats*/
        let stat=["PS_","ATK_","DEF_","SP_ATK_","SP_DEF_","SPEED_"];
        for(var z=0;    data.stats[z];    z++){
            var level = data.stats[z].base_stat/16+.5;
            for(var i=1;    i<=10;  i++){
                if(level>=i){
                    eval(stat[z]  + i + '.style= "Background-color: rgb(47, 189, 255)"');
                }
            }
        }
}
const pokeAbilities = (data) =>{
    pokeType.value="";
    pokeWeakness.value="";
    for(var i = 0; data.types[i];i++){
        if(i==0){
            pokeType.value+=        (data.types[i].type.name.charAt(0).toUpperCase()+data.types[i].type.name.slice(1));
        }
        else{
            pokeType.value+= (", " + data.types[i].type.name.charAt(0).toUpperCase()+data.types[i].type.name.slice(1));
        }
    }
    for(i = 0; data.abilities[i];i++){
        if(i==0){
            pokeWeakness.value+=        (data.abilities[i].ability.name.charAt(0).toUpperCase() + data.abilities[i].ability.name.slice(1));
        }
        else{
            pokeWeakness.value+= ( ", "+ data.abilities[i].ability.name.charAt(0).toUpperCase() +data.abilities[i].ability.name.slice(1));
        }
    }
}
const pokeSize = (data) =>{
    pokeHeight.value= data.height+" ft";
    pokeWeight.value= data.weight+" kG";
}
const pokeItems = (data) =>{
    /*console.log(data.held_items[0].item.url);*/
    for(var i=0;data.held_items[i];i++){
        fetchItems(data.held_items[i].item.url, i);
    }    
}
const pokeMoves = (data) =>{
    var move="";
    var moveplus="";
    for(var i = 0; i<=4;i++){
        for(var z=0; (z!=-1 || data.moves[i].move.name[z]); z++){
            /*console.log(data.moves[i].move.name[z]);*/
            if(data.moves[i].move.name[z]=="-"){
                move+=" ";
                moveplus+= data.moves[i].move.name.slice(z+1);
                /*console.log(move);*/
                eval("move_"+(i+1)+".value= move");
                eval("move_"+(i+1)+"_1.value= moveplus");
                z=-2;
            }
            else{
                move+= data.moves[i].move.name[z];
                if(data.moves[i].move.name.length == (z+1)){
                    /*console.log(move);*/
                    eval("move_"+(i+1)+".value= move");
                    z=-2;
                }
            }
        /*eval("move_"+(i+1)+".value= data.moves[i].move.name");*/
        }
        move="";
        moveplus="";
    }
}
/*pokeImage("https://i.pinimg.com/564x/0f/91/fe/0f91fe7307e40fcc3c1a2bce2d6f600b.jpg");*/
/*Los stats: maximo registrado es de 154 puntos. Cada nivel tendrá un rango de 16 pts*/