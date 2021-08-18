export default function random() {
  document.getElementById("random").onclick = function (e) {   

    fetch("https://www.themealdb.com/api/json/v1/1/random.php") // Solicitud a la API
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if(document.getElementsByClassName("hero")[0]) document.body.removeChild(document.getElementsByClassName("hero")[0])
        data = data["meals"]; //Transformamos el JSON obtenido en un JSON más facil de manejar
        let container = document.getElementById("contenedor"); //Obtener el div que funcionará de contenedor para las Meal-cards
        container.classList.add("recetas")
        if (container) container.innerHTML = ""; //Vaciar el div para reemplazarlo con la nueva info
        data.forEach((element) => {
          //Ciclo que recorre cada elemento del JSON (por elemento me refiero a los platillos)
          let section = document.createElement("section"); //Crear div que será la Meal-card
          section.classList.add("recetaCard");

          let media = document.createElement("div");
          media.classList.add("media");
          section.appendChild(media);

          let img = document.createElement("img"); //Crear img  que será la foto de la Meal-card
          img.src = element["strMealThumb"]; // Insertar el link de la imagen en la img
          img.style.height = "14rem"; //200 px
          let a = document.createElement("a"); //Crear a que será el link que nos llevará a la segunda página con la receta
          let meal = element["strMeal"];
          meal = meal.replace(/ /g, "_")
          a.href = "dish.html?meal="+meal; //href que nos envia a la página con la receta y un dato con el nombre del platillo
          a.appendChild(img);
          media.appendChild(a); // Insertar img en el a

          let recetaTexto = document.createElement("div");
          recetaTexto.classList.add("recetaTexto");

          let nameDish = document.createElement("h2"); //Crear p que será la descripción de la Meal-card
          nameDish.innerText = element["strMeal"]; // Insertar el nombre del platillo en el p
          recetaTexto.appendChild(nameDish);

          section.appendChild(recetaTexto); // Insertar p en el div

          document.getElementById("contenedor").appendChild(section); // insertar el div en el contenedor
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }; // <-------- Fin de
}


