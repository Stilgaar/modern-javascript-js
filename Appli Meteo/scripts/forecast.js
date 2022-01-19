// Faut crée un compte sur https://developer.accuweather.com/
// puis demander une clefs API avec je ne sais plus trop comment
// comme dirait macron : demerdez vous
// ça vous donne une clefs. 

// CREATION DE CLASSES. ATTENTION CA A N'AS PAS ETE FAIT A LA PREMIER LECTURE, MAIS APRES AVOIR FINI LA LESSON SUR LES CLASSES (et c'est parti)

// c'est quand même un peu sexy, tout est plutôt propre !
// c'est toujours plus long que ma version axios plus bas, mais on utilise des methodes et tout, comme des grands. 
class Forecast {
    constructor() {
        this.key = 'fd8uv7u0Wfzoo1Z95q0O2lptPtFJAuRm';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    // pour rendre une methode async, on l'écris juste devant cette methode
    // vu qu'on va écrire les fonctions getCity et getWeather dans cette classe, on leurs mets un 'this' devant. Comme ça il saura ou venir les chercher
    async updateCity(city) {
        const cityDets = await this.getCity(city)
        const weather = await this.getWeather(cityDets.Key)

        return { cityDets, weather }
    }
    // après on crée la methode getCity, vu qu'on l'invoque juste au dessus, c'est quand même vachement mieux. 
    // je vais commenter des lignes dans getCity mais ce sera celles qu'on peut supprimer et remplacer par ce qu'on a déclaré plus haut. 
    async getCity(city) {
        // on peut retirer base vu qu'il est déclaré déjà plus haut
        //  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        // la key, devient this.key puisqu'on l'a déclaré dans la classe. et base va être remplacé par this.cityURI vu qu'on l'a déclaré plus haut aussi
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURI + query)
        const data = await response.json()

        return data[0]
    }
    async getWeather(id) {
        // on peut toujours enlever la bae, on l'a déclaré plus haut
        // const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        // la clefs va être à nouveau this.key et la base va être this.weatherURI
        const query = `${id}/?apikey=${this.key}`// 
        const response = await fetch(this.weatherURI + query)
        const data = await response.json()
        return data[0]
    }
    // une fois que tout est fait, on peut commenter tout ce qu'on a écris plus bas, tout est dans la classe Forecast. 
    // on va aller l'appeller dans l'app.js
    // notez que la version d'en dessous est également une bonne version, tout à fait fonctionnelle
}

// const key = 'fd8uv7u0Wfzoo1Z95q0O2lptPtFJAuRm'
// // const url = 'http://dataservice.accuweather.com/'
//
// getWeather = async (id) => {
//
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
//     const query = `${id}/?apikey=${key}`//
//     const response = await fetch(base + query)
//     const data = await response.json()
//
//     return data[0]
// }
//
//
// // ça c'est pour les informations sur la ville
// // globallement on va prendre une clefs se trouvant dans la réponse
// const getCity = async (city) => {
//
//     // on va décomposer au maximum la demande au serveur pour que ce soit réutilisable.
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     // lorsque l'on fait un query particulière sur une url on rajoute toujours un "?" à la fin.
//     // Si on veut mettre deux données dans le query il faut mettre un "&" devant la deuxieume (ici "&q=" pour le nom de la ville)
//     const query = `?apikey=${key}&q=${city}`
//
//     // suffit de mettre du coup les deux base et query dans le fetch, et json le fetch.
//     const response = await fetch(base + query)
//     const data = await response.json()
//
//     // accuweather va envoyer plusieurs résulats, par exemple ya un Grasse apparement en Autriche et du coup il renvoi les deux.
//     // on lui demandera que le premier resultat
//     return data[0]
//
// }

//  du coup ici là, quand on appelle la ville, ici 'Grasse' par exemple, il va attendre qu'on lui passe la data.Key de la ville de Grasse, ensuite il la dans l'autre fonction pour avoir la météo
// en particulier de la ville.

// ça évidement on va le remplacer par la requete dans l'app.js
// c'est pour ça qu'on sépare les deux fichiers d'ailleurs
// getCity('Grasse')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => console.log(data))
//     .catch(err => console.log(err))

// bon alors je suis en train de suivre le cours, évidement avec les fetch et axios j'en ai déjà fait plus. Surtout dans mon back avec mes fonctions à ralonges.
// la ya quand même deux fonctions qui se suivent, avec des asnyc await etc.
// je pense que pour la science tu peux aussi faire ça :
// la évidement à cause de fetch je suis obligé de lui passer en json() à chaque fois. Mais avec axios je pourrais facilement utiliser rep.data.key directement.
// c'est vrai qu'on a quand même pas mal l'habitude d'utiliser du then dans nos fonctions quand on utilise react parce que c'est super simple de mettre le res.data dans un setter
// puis de le rétuiliser après. Enfin tout le monde est super content non ? En plus pour pouvoir le mettre dans le setter global pour un fetch.post c'est quand même super simple
// ouais c'est mes pensées profondes pendant que je fais ce cours. Ca va vous sinon ? La vie ? La famille ? L'univers et le reste ?

// VERSION FETCH //
// getCurrentForecast = (city) => {
//     fetchfetch(`${url}currentconditions/v1/${rep.Key}/?apikey=${key}`)
//         .then(rep => rep.json())
//         .then(json => fetch(`${url}currentconditions/v1/${json[0].Key}/?apikey=${key}`))
//         .then(rep => rep.json())
//         .then(json => console.log(json))
//         .catch(err => console.log(err))
// }
// getCurrentForecast('Grasse')

// VERSION AXIOS
// je suppose que ça marche, et c'est encore plus court. C'est beau la technologie. (j'ai pas installé tous les packages, dont axios pour voir si ça marche)
// je sais que ça marche
// getCurrentForecast = (city) => {
//     axios.get(`${url}locations/v1/cities/search?apikey=${key}&q=${city}`)
//         .then(res => axios.get(`${url}currentconditions/v1/${res.data[0].Key}/?apikey=${key}`))
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }
// getCurrentForecast('Grasse')