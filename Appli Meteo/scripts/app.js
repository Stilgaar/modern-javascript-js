// on a donc un fichier pour s'occuper de l'API (c'est le forecast.js) et celui ci qui s'occuppe de la manipulation du DOM
// parce qu'encore une fois, c'est trop la gagne =)
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const forecast = new Forecast()


const updateUi = (data) => {

    // au lieu d'écrire ça comme ça : on peut aussi le faire en destructuration
    // un peu comme dans les props dans react. 
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructuration 
    const { cityDets, weather } = data;

    // maintenant on va modifier le DOM 

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    `

    // update de la petite icone. (faut le télécharger sur le git de shaun normallement) (là jvais les laisser sur le git t'as vu ?)
    const iconScr = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconScr)

    // ternaire, c'était dans le cours mais on connait. On s'en sert pas mal dans le JSX en fait. Mais pas dans les formules Js au final
    // const result = true ? 'value 1' : 'value 2'

    // update le jour et la nuit 
    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg'
    } else {
        timeSrc = 'img/night.svg'
    }

    // version ternaire, on devrait le faire plus souvent dans le Js tout court, c'est cool ! =)
    // let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'

    time.setAttribute('src', timeSrc)

    // le d-none est la pour enlever la clase pour pas qu'on la voit (c'est un truc bootstrap)
    // pratique pour faire apparaitre et disparaitre des trucs

    // du coup à la fin de la fonction, il check si la class d-none est là
    // si c'est la elle l'enlève et du coup on peut revoir le truc
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

}

// elle est async parce qu'elle appelle deux autres fonctions qui sont également async.
// on peut utiliser les fonction qu'il y a dans forecast.js sans l'importer puisqu'on l'a appellé dans le html AVANT l'app.js
// je découvre des trucs de fou
//<script src="scripts/forecast.js"></script>
// <script src="scripts/app.js"></script>


// on desactive UPDATECITY vu qu'elle est stockée dans la classe FORECAST
// const updateCity = async (city) => {
// 
//     const cityDets = await getCity(city)
//     const weather = await getWeather(cityDets.Key)
// 
//     // le saviez vous ? écrire comme ça : 
//     return { cityDets, weather }
//     // au lieu de comme ça : 
//     // return { 
//     //  cityDets: cityDets,    
//     //   weather: weather
//     // }
//     // ça s'appelle "Object Shorthand Notation" et en fait c'est genre super récent. (cool ? ouais cool)
// }

cityForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // on prends le nom de city avec name=city qu'il y a dans le formulaire. Parce que c'est trop la classe t'as vu ? 
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // updateCity(city)
    //     .then(data => updateUi(data))
    //     .catch(err => console.log(err))
    // maintenant qu'on a la classe ceci va s'écrire comme ça : 
    forecast.updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err))
    // du coup on peut retirer la fonction updateCity un peu plus haut

    // on va mettre la valeur dans le localStorage (suite au cours du localStorage)
    localStorage.setItem('city', city)
})

// on va checker le localStorage au lancement du script
// s'il trouve un 'city' de local Storage il va automatiquement prendre la dernière valeure pour la faire apparaitre dans le DOM
// c'est un peu le même système qu'on a pour voir si on a un token sur notre app.js dans React
if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUi(data))
        .catch(err => console.log(err))
}
