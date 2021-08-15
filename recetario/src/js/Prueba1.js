window.onload = function () {                   //Cargar el js
    var busqueda = document.getElementById("btn-search");
    busqueda.onclick = function (e) {                             // <-------- Inicia Busqueda de platillo por nombre completo o por letra 
        let food = document.getElementById("Food").value
        let url
        if (food.length > 1)
            url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + food            // Revisar que el string de la comida a buscar sea mayor a 1 si lo es utilizamos el Metodo para comida completa  sino utilizamos el metodo de una sola letra 
        else
            url = 'https://www.themealdb.com/api/json/v1/1/search.php?a=' + food

        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + food)     // Solicitud a la API
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {

                data = data["meals"]  //Transformamos el JSON obtenido en un JSON más facil de manejar
                let container = document.getElementById('contenedor')     //Obtener el div que funcionará de contenedor para las Meal-cards
                if (container) container.innerHTML = '';             //Vaciar el div para reemplazarlo con la nueva info  
                data.forEach(element => {                         //Ciclo que recorre cada elemento del JSON (por elemento me refiero a los platillos)
                    let div = document.createElement("div");      //Crear div que será la Meal-card 
                    let p = document.createElement("p");            //Crear p que será la descripción de la Meal-card 
                    let img = document.createElement("img");     //Crear img  que será la foto de la Meal-card 
                    let a = document.createElement("a");        //Crear a que será el link que nos llevará a la segunda página con la receta
                    a.href = "second.html?meal=" + element["strMeal"];   //href que nos envia a la página con la receta y un dato con el nombre del platillo
                    p.innerText = element["strMeal"];       // Insertar el nombre del platillo en el p
                    img.src = element["strMealThumb"];      // Insertar el link de la imagen en la img
                    div.appendChild(p);                     // Insertar p en el div 
                    a.appendChild(img);                     // Insertar img en el a
                    div.appendChild(a);                        //Insertar a en el div
                    document.getElementById('contenedor').appendChild(div);  // insertar el div en el contenedor 
                });
            })
            .catch(function (error) {
                console.log(error)
            })
    }   // <-------- Fin de  Busqueda de platillo por nombre completo o por letra 
}
