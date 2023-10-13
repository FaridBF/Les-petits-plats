/**
 * Classe permettant de faire les requêtes HTTP et de retourner les données transformées
 */
class RecipeApi {
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then(async (res) => {
        return await res.json();
      })
      .catch((err) => console.log("Une erreur s'est produite", err));
  }
}

/**
 * Classe permettant de récupérer les données de recettes
 * hérite de la classe RecipeApi
 */
export default class RecipesApi extends RecipeApi {
  constructor(url) {
    super(url);
  }

  async getRecipes() {
    return await this.get();
  }
}
