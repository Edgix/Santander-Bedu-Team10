export default function search() {
  document.getElementById("buscar").onclick = function (e) {
    // <-------- Inicia Busqueda de platillo por nombre completo o por letra
    let food = document.getElementById("food").value;
    let url;
    if (food.length > 1) {
      url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + food; // Revisar que el string de la comida a buscar sea mayor a 1 si lo es utilizamos el Metodo para comida completa  sino utilizamos el metodo de una sola letra
    } else {
      url = "https://www.themealdb.com/api/json/v1/1/search.php?a=" + food;
    }

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + food) // Solicitud a la API
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data = data["meals"]; //Transformamos el JSON obtenido en un JSON más facil de manejar
        let container = document.getElementById("contenedor"); //Obtener el div que funcionará de contenedor para las Meal-cards
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
          img.style.height = "12.5rem"; //200 px
          let a = document.createElement("a"); //Crear a que será el link que nos llevará a la segunda página con la receta
          a.href = "second.html?meal=" + element["strMeal"]; //href que nos envia a la página con la receta y un dato con el nombre del platillo
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

