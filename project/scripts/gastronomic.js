
const gastronomic = [
    {
      mealName: "Ceviche",
      ingredients: "Raw fish marinated in lime or lemon juice, seasoned with chili peppers, onions, cilantro, and salt.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/ceviche.webp",
    },
    {
      mealName: "Lomo Saltado",
      ingredients: "Strips of beef sautéed in a pan with onions, tomatoes, chili peppers, and other seasonings, served over french fries and rice.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/lomo.webp",
    },
    {
      mealName: "Pollo a la Brasa",
      ingredients: "Whole chicken marinated in a mixture of spices and herbs, then roasted on a grill or rotisserie.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/pollo-brasa.webp",
    },
    {
        mealName: "Papa a la huancaina",
      ingredients: "Boiled potatoes topped with a creamy sauce made with yellow chili pepper, fresh cheese, milk, crackers, and other ingredients, typically served with hard-boiled eggs and olives.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/papa.webp",
    },
    {
      mealName: "Rocoto Relleno",
      ingredients: "Rocoto peppers stuffed with a mixture of ground meat, onions, garlic, cheese, and other ingredients, baked and often served with potatoes and melted cheese.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/rocoto.jpg",
    },
    {
      mealName: "Arroz con Pollo",
      ingredients: "Chicken cooked with rice, seasoned with spices such as turmeric, cumin, and garlic, typically cooked with vegetables such as onions, bell peppers, and carrots.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/images/arroz-pollo.webp",
    },
    {
      mealName: "Suspiro a la Limeña",
      ingredients: "Evaporated milk, condensed milk, sugar, egg yolks, vanilla essence, and Italian meringue.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/images/suspiro.jpg",
    },
    
    {
      mealName: "Arroz con Leche",
      ingredients: "Rice, milk, sugar, cinnamon stick, and lemon peel.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/images/arroz-leche.webp",
    },
    {
      mealName: "Mazamorra Morada",
      ingredients: "Purple corn, pineapple, quince, cinnamon, cloves, sugar, and sweet potato.",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/images/mazamorra.webp",
    },
    {
      mealName: "Picarones",
      ingredients: "Pumpkin, wheat flour, sugar, anise, yeast, and chancaca (sugar syrup).",
      imageUrl:
        "https://github.com/PieroArbildo/wdd131/tree/main/project/images/images/picaron.webp",
    },
  ];
  
  const card = document.getElementById("card");
  let content = "";
  function displayGastronomic() {
    gastronomic.forEach((gastronomic) => {
      content += `
              <figure>
                  <h3>${gastronomic.mealName}</h3>
                  <figcaption>Main ingredients:</figcaption>
                  <p>${gastronomic.ingredients}</p>

                  <img src="${gastronomic.imageUrl}" alt="${gastronomic.mealName} meal" loading="lazy"/>
              </figure>
          `;
    });
    card.innerHTML = content;
  }
  
  displayGastronomic();