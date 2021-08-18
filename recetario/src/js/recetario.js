window.addEventListener('DOMContentLoaded', (event) => {
    if (document.title == "Recetario") {
        let params = new URLSearchParams(location.search);
        let meal = params.get('meal');     //Obtenemos el valor que se pasó por get en la pagina anterior
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal) // Solicitud a la API
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data = data["meals"][0];   //Hacemos más pequeño el JSON obtenido
                document.getElementsByClassName("Imgheader")[0].textContent = data["strMeal"]; // insertamos el nombre del platillo
                document.getElementsByClassName("videoWrapper")[0].innerHTML = '<iframe width="900" height="915" src="https://www.youtube.com/embed/' + data["strYoutube"].slice(-11) + '"></iframe>' //Insertamos el video tutorial de Youtube
                document.getElementById("platillo").src = data["strMealThumb"]; // Insertamos el url de la img del platillo
                document.getElementsByClassName("grid")[0].innerHTML = ""; //Eliminamos el contenido anterios en caso de que exista algo
                let e = 1;
                for (let i = 1; i <= 5; i++) {            // Al solo existir 20 ingredientes posibles que la API nos puede entregar decidimos dividirlos en parejas, por lo que solo se repertirá 5 veces este loop 
                    let div = document.createElement("div")   // Creamos el elemento div que contendrá el par de ingredientes
                    div.classList.add("column");   // Le asignamos la clase 
                    let ol = document.createElement("ul") // Creamos una lista sin orden que almacenará el par de ingredientes
                    ol.classList.add("fa-ul");     //Le asignamos la clase
                    if (data["strIngredient" + e]) {    //  Validamos que existan ingredientes en esa posicion del arreglo
                        let li = document.createElement("li")  // creamos un elemento de la lista
                        li.innerHTML += '<span class="fa-li"><i class="fas fa-utensils"> </i> </span>' + data["strMeasure" + e] + " " + data["strIngredient" + e] //Creamos el trozo de HTML para el ingrediente, se añade la cantidad de dicho ingrediente
                        ol.appendChild(li) //agregamos el elemento a la lista 
                        e++   //Aumentamos el contador, este nos ayuda a insertar dos ingredientes en la lista
                        if (data["strIngredient" + e]) {                            //Aquí basicamente sucede lo mismo que arriba solo que con el siguiente ingrediente
                            let li2 = document.createElement("li")
                            li2.innerHTML += '<span class="fa-li"><i class="fas fa-utensils"> </i> </span>' + data["strMeasure" + e] + " " + data["strIngredient" + e]
                            ol.appendChild(li2)
                            e++
                        }                                                       // Termina el codigo que se repitio arriba 
                    }
                    div.appendChild(ol)        //Se agrega la lista al contenedor
                    document.getElementsByClassName("grid")[0].appendChild(div) //agregamos el contenedor al div principal
                }
                let pasos = data["strInstructions"].split(".")      // Obtenemos todos los pasos de la receta, al estar todo en un mismo atributo lo "cortamos" cada vez que encuentre un . 
                let aux = "a";                  // variable aux
                pasos.forEach(element => {

                    let article = document.createElement("article")       //Creamos el elemento article
                    article.classList.add("paso" + aux)       //  Le asignamos la clase (paso a o pasob)
                    let p = document.createElement("p")     // Creamos el elemento p
                    p.classList.add("indicaciones")      // Le asignamos la clase 
                    p.textContent = element;            // Insertamos el paso al p
                    article.appendChild(p);             //Insertamos p en el article
                    document.body.getElementsByClassName("pasos")[0].appendChild(article); //Insertamos el elemento article en el contenedor principal
                    (aux != "a") ? aux = "a" : aux = "b";   // Aquí asignamos el valor a la variable para que pase entre a y b
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }
});