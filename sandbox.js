// **************************************************************************************** \\ 
// ************************ MODERN JAVASCRIPT UDEMY NET NINJA COURSES*********************** \\
// ****************************************************************************************** \\

// ************************************************************* \\
// ************************ COTé STRINGS ************************ \\
// ************************************************************** \\

// let email = 'stilgar182@gmail.com'
// console.log('RESULT', result)
// exemples de methodes toujours bon à savoir.
// let result = email.lastIndexOf('n') prend le dernier de l'index
// let result = email.slice(4, 10) decoupe de l'index 4 à 10
// let result = email.substr(4, 10) decoupe de 4 plus dix caractères
// let result = email.replace('m', 'w') remplace la première lettre qu'il trouve par un w
// const title = 'Best Reads of 2019'
// const author = 'Mario'
// const likes = 30

// contanetation
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes '
// console.log(result)

// template strings
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result)

// HTML template
// let html = `
// <h2>${title}</h2>
// <p>by ${author}</p>
// <span> This blog has ${likes} likes</span>
// `
// console.log(html)

// ************************************************************** \\
// ************************ COTé NUMBERS ************************ \\
// ************************************************************** \\

// let radius = 10;
// const pi = 3.1415

// operateurs mathématiques ==>  +, -, *, /, **, % (console.log(10/2, 3+5, 4*50) etc etc)
// let result = radius % 3 ==> prend le chiffre, le divise par trois et nous laisse ce qui reste.
// let result = pi * radius ** 2 // le ** est au carré
// l'ordre du calcul Brackets Indecees(exposants) Division Multiplication Addition Soustraction

// let result = 5 * (10 - 3) ** 2
// console.log(result)

// let likes = 10
// likes = likes + 1 // plus 1
// likes += 10 // plus 10
// likes++ // plus 1
// likes-- // moins 1
// likes /= 2 // divisé par 2
// console.log(likes)

// NaN - Not a Number \o/
// console.log(5 - "hello") (ou n'importe quel autre)

// let result = 'the blog has ' + likes + ' likes'
// console.log(result)

// ************************************************************ \\
// ************************ COTé ARRAY ************************ \\
// ************************************************************ \\

// let stil = ['jeff', 'ryu', 'guile'] // <-- array de strings obv
// stil[1] = 'ken'
// console.log(stil)

// let ages = [20, 25, 30, 35] <-- array de numbers obv
// console.log(ages[2])

// let random = ['shaun', 'meth', 30, 20] // <-- array de de ce qu'on veut obv
// console.log(stil.length) // longeur du tableau

// let result = stil.join(' - ') joint tous les éléments de l'array avec ce qu'il y a entre les parenthèses
// let result = stil.indexOf('guile') cherche l'index de ce qu'on cherche
// let result = stil.concat(['ken', 'crystal']) rajoute un nouveau tableau
// let result = stil.push('ken') // rajoute dans l'array
// result = stil.pop() // enlève le dernier element de l'array
// console.log(result)

// ************************************************************************ \\
// ************************ COTé NULL && UNDEFINED ************************ \\
// ************************************************************************ \\

//let age; // undifined est non défini
//console.log(age, age + 3, `the age is ${age}`)
// undefined NaN 'the age is undefined'
// let age = null // null est égal à 0 ou vide
// console.log(age, age + 3, `the age is ${age}`)
// null 3 'the age is null'

// ********************************************************** \\
// ************************ BOOLEANS ************************ \\
// ********************************************************** \\

// console.log(true, false, 'true', 'false')

// let email = "stil@stil.fr"
// let names = ['mario', 'luigi', 'toad']
// let result = email.includes('@') voir si la string dispose d'un @
// let result = names.includes('luigi') voir si dans l'array il y a un 'luigi'

// Comparaisons normales
// let age = 25
// console.log(age == 25) true
// console.log(age == 30) false
// console.log(age != 30) true
// console.log(age != 25) false
// console.log(age > 20) true
// console.log(age < 20) false
// console.log(age <= 25) true
// console.log (age >= 25) true

// let name = 'jeff'
// console.log(name == 'jeff') true
// console.log(name == 'Jeff') false
// console.log(name > 'crystal') true, parceque la lettre C arrive avant J dans l'alphabet
// console.log(name > 'Jeff') true parce que la majuscule passe avant la miniscule

//let age = 25
// console.log(age == 25)
// console.log(age == '25') le string est converti en nombre
// console.log('25' == 25) donc ça va marcher, si on veut être souple

// Comparaison Stricte
// console.log(age === 25) true
// console.log(age === '25') false parce que strictement, age est un nombre
// console.log(age !== 25) false
// console.log(age !== '25') true, parceque '25' est strictement different du chiffre

// ********************************************************************* \\
// ************************ CONVERSION DE TYPES ************************ \\
// ********************************************************************* \\

// pour trouver le type d'un paramètre, il suffit de la fonction typeof

// Number() => transformation en nombre
// let score = '100'
// console.log(score + 1) => resultat = 1001, parceque Js est un peu con
// score = Number(score) transformation du string en numero
// console.log(score + 1)

// String() => transformation en string
// let result = Number('hello')
// console.log(result) ==> NaN
// let result = 50 => chiffre
// console.log(result) => typeof = number
// result = String(50) => transformation en string
// console.log(result) => string

// Boolean() => transformation en boolean
// certaines valeurs sont vrai, d'autres sont fausses
// let result = Boolean(100) true les nombres en général sont true, même les négatifs
// let result = Boolean(0) false 0 par contre toujours false. Pour des raisons
// let result = Boolean('0') true, une string est toujours true
// let result = Boolean('') false, une string vide est toujours false
// console.log(result)

// ************************************************************************ \\
// ************************ LOOPS && CONDITIONS *************************** \\
// ************************************************************************ \\

// coté loops

// initialisation let = 0
// jusqu'a quand on fait la loop i < 5
// on fini a i++, donc i + 1
// il execute la loop jusqu'à ce qu'il aie atteind le i < x
// for (let i = 0; i < 5; i++) {
//     console.log('inloop : ', i)
// }
// console.log('loop finie') // ça casse la loop à la fin

// FOR LOOP
// const names = ['Jeff', 'Caroline', 'Dominique', 'Danielle']

// for (let i = 0; i < names.length; i++) {
// chaque cicle est une itteration
//  console.log(i) // log sur le nombre de noms, donc la réponse sera 0, 1, 2, 3
//  console.log(names[i]) va sortir tous les noms
// let html = `<div>${names[i]}</div>`
// console.log(html)
// }

// WHILE LOOP
// const names = ['Jeff', 'Caroline', 'Dominique', 'Danielle']
// let i = 0; // il faut déclarer le i avant la boucle while
// while (i < 5) {
//     console.log('in loop :', i); rends les chiffres de 0 à 4
//     i++; // ne pas oublier le i++ sinon c'est une loope infinie
// }

// let i = 0
// while (i < names.length) {
//     console.log(names[i]) // rend tous les noms
//     i++
// }

// DO WHILE LOOP
// let i = 2
// do {
//     console.log('val is i is ', i)
//     i++ // ne JAMAIS OUBLIER LE i++
// }
// while (i < 5)

// IF - ELSE STATEMENTS
// OPERATEURS LOGIQUES OR || & and &&

// const age = 20 // renverra pas le console log
// const age = 25 // renverra le console log
//
// if (age > 20) {
//     console.log('t\'as plus de 20ans')
// }

// const stil = ['paul', 'jacques', 'black mamba']
//
// if (stil.length > 5) {
//     console.log("YES")
// }

// const password = 'p@ssw' // passera pas
// // const password = 'password'//  passera
//
// if (password.length >= 12 && password.includes('@')) {
//     console.log('ce mot de passe est costeaud t\'as vu ?')
// } else if (password.length >= 8 || password.includes('@') && password.length > 5) {
//     console.log('that password is strong enought')
// } else {
//     console.log('that password is too weak')
// }

// LOGIQUE NOT (!)
// if (condition) {console.log('pouet')} => si la condition est vraie, elle fera tourner la fonction
// if (!condition) {console.log('pouet pouet')} => si la condition est fausse elle fera tourner la fonction

// let user = false
// if (!user) {
//     console.log('vous êtes connectés')
// }

// Break && Continue
// const scores = [50, 25, 0, 30, 100, 20, 10]
// for (let i = 0; i < scores.length; i++) {
//
//
//     if (scores[i] === 0) { // ici il check s'il y a un 0 dans l'array, si c'est le cas,
//         // il passe au dessus et continue avec le mot continue
//         continue
//     }
//
//     console.log(`Your score ${scores[i]}`)
//
//     if (scores[i] === 100) {
//         console.log('bravo t\'as le score maximum')
//         break; // le break fait arrêter l'itteration quand il trouve un 100
//     }
// }

// SWITCH STATEMENT
// possiblitié
// const grade = 'D'
// if (grade === 'A') { }
// else if (grade === 'B') { }
// else if (grade === 'C') { }
// else if (grade === 'D') { }
// else if (grade === 'E') { }
// else { }

// avec Switch
// pour la simplification du code
// const grade = "D";
//
// switch (grade) {
//     case 'A': // au cas ou t'as un "A"
//         console.log("t'as eu un A") // Ca mets ce console.log
//         break; // le break permet d'arrêter la boucle
//     case 'B':
//         console.log("t'as eu un B")
//         break;
//     case 'C':
//         console.log("t'as eu un C")
//         break;
//     case 'D':
//         console.log("t'as eu un D")
//         break;
//     case 'E':
//         console.log("t'as eu un E")
//         break;
//     default:
//         console.log("pas une note valide")
// }

// SCOPES
// let age = 30
//
// if (true) {
//     let age = 40 // on peut redefinir une variable à l'interieure, mais ça ne scope pas
//     // age = 40 => dans ce cas là ça le fait globablement
//     let name = "jeff"
//     console.log('inside 1st code block', age, name)
//
//     if (true) {
//         let age = 50 // ce scope sera valable que dans ce IF
//         console.log('inside 2dn code block', age) // le scope dans le scope, il reste persistant
//     }
// }
//
// console.log('outside code block', age, name) // il n'a pas accès à name parce qu'il est dans le 1er IF

// *********************************************************** \\
// ************************ FUNCTIONS ************************ \\
// *********************************************************** \\

// => déclaration de fonction : possiblité de la hoist n'importe ou dans le script, il sera rappellé au bon endroit
// function greet() {
//     console.log('hello there')
// }
//
// // => epression de fonction : pas de possilibté de hoist n'importe ou, dois être mis avant l'utilisation OBLIGATION
// const speak = function () {
//     console.log('good day')
// };
//
// greet()
// speak()

// il prends la variable de dans speak qu'on a écris plus bas. Jusque là rien de niveau
// le name est scope dans la scope dans la fonction au passage
// le name est une parametre de fonction.
// les ordres des paramètres doivent CORRESSPONDRE !
// les 'name = ""' sont les valeurs par défaults qu'il va prendre pour éviter le undifined.
// const speak = function (name = "Luigi", time = "Nuit") {
//     console.log(`Bonne ${time} ${name}`)
// }
//
// speak("José Marie Perrek", 'réveil')
// speak()

// sortir des données des fonctions avec le terme return
// de cette façon on peut l'utiliser après
// const calcAera = function (radius) {
//     return area = 3.14 * radius ** 2;
// }
// const a = calcAera(5)
// console.log(a)
//
// const calcVol = function(aera) {
// }

// ******************************************************************** \\
// ************************ FUNCTIONS FLECHEES ************************ \\
// ******************************************************************** \\

// pour simplifier on peut envlever les parenthèses de la fonction fléchée lorsque l'on a qu'un
// paramètres. Il faut les mettres vide par contre s'il y a pas de param du tout.
// const calcA = radius => {
//     return 3.14 * radius ** 2
// }
//
// // on peut aussi écrire une fonction fléchée comme ça :
// // donc sans les {} et sans le return.
// const calcAera = radius => 3.14 * radius ** 2
//
// const b = calcAera(2)
// const a = calcA(2)
// console.log(a)
// console.log(b)

// Transformation !! (petits exercies.)

// const greet = function () {
//     return 'hello world'
// }
//
// const greet = () => 'hello world'
//
// const bill = function (prod, tax) {
//     let total = 0;
//     for (let i = 0; i < prod.lenght; i++) {
//         total += prod[i] + prod[i] * tax
//     }
//     return total
// }
//
// const bill = (prod, tax) => {
//     let total = 0;
//     for (let i = 0; i < prod.lenght; i++) {
//         total += prod[i] + prod[i] * tax
//     }
//     return total
// }

// METHODS vs FUNCTION

// const name = 'shaun';
//
// // fonction
// const greet = () => 'hello';
// let result1 = greet();
// console.log(result1);
//
// //METHODS les methodes sont les .qqch() suivant un objet. Des fonctions qui font des trucs en plus pour nous, c'est gentil !
// let result2 = name.toUpperCase();
// console.log(result2)

// CALLBACKS & FOREACH

// DEMOOOOOOOOOOOOOOOOOOO
// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50
//     callbackFunc(value)
// }
//
// myFunc((value) => {
//     // do something
//     console.log(value)
// })

// CALBACK && FOREACH
// let people = ['ken', 'mario', 'metroid', 'jeff', 'grosgery']
//
// solution classique :
// people.forEach((person, index) => {
//     console.log(person, index)
// })
//
// autre solution :
// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`)
// }
//
// people.forEach(logPerson)

// Jusque là, rien de nouveau avec le for each et les fonctions callbacks
// const list = document.querySelector('.people')
// const people = ['ken', 'mario', 'metroid', 'jeff', 'grosgery']
//
// let html = ``;
//
// people.forEach(function (person) {
//     html += `<li style="color: purple">${person}</li>`
// })
//
// list.innerHTML = html
// console.log(html);
//

// ******************************************************************** \\
// ************************ OBJECTS ************************************ \\
// ******************************************************************** \\

//  let object = {
// key: 'value'
// }
// let user = {
//     name: "jeff",
//     age: 39,
//     email: 'stil182@gmail.fr',
//     location: "grasse",
//     blogs: ['ici et là bas', "jeff photographieeeeeeeee"]
// }
// console.log(user.name)
// // on peut aussi l'écire de cette façon :
// console.log(user['name']) // mais c'est moche
// console.log(user)
// // user.age = 35
// // ou ça :
// // user['age'] = 35, mais c'est moche aussi
// // console.log(user.age)
// console.log(typeof user)

// Ajout de methods
// let user = {
//     name: "jeff",
//     age: 39,
//     email: 'stil182@gmail.fr',
//     location: "grasse",
//     blogs: [{
//         title: 'ici et là bas',
//         likes: 30
//     },
//     {
//         title: "jeff photographieeeeeeeee",
//         likes: 50
//     }],
//     login: function () {
//         console.log("the user logged in")
//     },
//     logout: function () {
//         console.log("the user logged out")
//     },
//     // si on utilise une fonction flechée dans une methode le THIS devient le this window.
//     // on peut utiliser une autre syntaxe comme ça :
//     // logBlogs(){}
//     logBlogs: function () {
//         // console.log(this)
//         console.log('this user has written the following blogs')
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes)
//         })
//     }
// }

// Le THIS corresponds à la fenêtre dans lequelle il se trouve. Si on le fait dans un objet, il aura pour nom l'objet.
// user.login()
// user.logout()
// user.logBlogs()

// C'est la même chose que ça :
// const name = "mario"
// console.log(name.toUpperCase())

// **************************************************************************\\
// ************************ MATH OBJECTS ************************************ \\
// ************************************************************************* \\

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

// const aera = 7.7
// round arrondi au plus proche
// console.log(Math.round(aera))
//
// // floor va arrondir au plus bas
// console.log(Math.floor(aera))
//
// // ceil va faire l'opposé de floor
// console.log(Math.ceil(aera))
//
// // trunc va retirer la décimale
// console.log(Math.trunc(aera))

// numero random

// const random = Math.random() // <== fera toujours un chiffre au hazard entre 0 et 1
// console.log(random)
// console.log(Math.floor(random * 100)) // avec le floor on va le rendre entier et on le multiplie par 100 pour avoir un chiffre entier
// on obtiendra un chiffre entre 0 et 100 EZ

// *************************************************************************** \\
// ************************ STACK && HEAP ************************************ \\
// ************************ // PRIMITIVE && REFERENCE \\  ******************** \\
// *************************************************************************** \\


// Primitive values == stocké sur le stack

// let scoreOne = 50
// let scoreTwo = scoreOne
//
// console.log(`score one : ${scoreOne} | score two : ${scoreTwo}`)
// scoreOne = 100 // la valeur ne sera changée que pour scoreOne et pas scoreTwo sur le futur console.log
// parce que la
// console.log(`score one : ${scoreOne} | score two : ${scoreTwo}`)


// Reference Values == stocké sur le heap

// const userOne = { name: 'ryu', age: 30 }
// const userTwo = userOne
//
// console.log(userOne, userTwo)
// userOne.name = "ken" // la les deux ryus sont modifiés dans le console.log qui suit.
// // La modif se fait sur le Heap du coup ça change pour le pointeur également
// console.log(userOne, userTwo)


// ******************************************************************* \\
// ************************ D.O.M  ************************************* \\
// *****************DOCUMENT***OBJECT****MODEL**************************** \\
// ************************************************************************* \\

// DOM : crée par le browser. Le site crée est appellé le DOCUMENT (comme par hasard)

// va prendre seulement le PREMIER "P" qu'il va trouver
// const para = document.querySelector('p')
// // avec le .error il va prendre les class
// const error = document.querySelector('.error')
// // on peut topper une classe dans une div comme ça :
// const errorTwo = document.querySelector('div.error')
//
// console.log(para)
// console.log(error)
// console.log(errorTwo)

// le query selectorALL va tous les prendre
// ça va nous donner une nodelist
// const paras = document.querySelectorAll('p') // sur un HTML
// const errors = document.querySelectorAll('.error') // sur des CLASSES
// console.log(paras[0]) // parce que la nodelist est un array
// console.log(paras[1])
// // évidement on peut faire un foreach sur para
// paras.forEach(para => {
//     console.log(para)
// })

// get element by ID
// faut pas mettre de # comme avec le queryselector, gain de temps de malade
// const title = document.getElementById("page-title")
// console.log(title)

// get element by class
// gain de temps de fou aussi parce qu'il ne faut pas mettre le point devant error
// ici on reçoit un HTML collection
// on peut toujours choisir un error[0]
// mais on peut pas utiliser un forEach
// const error = document.getElementsByClassName('error')
// console.log(error)

// get element by tag name => va topper le tag HTML
// const paras = document.getElementsByTagName('p')
// console.log(paras)

// const para = document.querySelector('p')
// innerText est une propriété pas une methode
// console.log(para.innerText)
// para.innerText = "Jeff le chad"

// const paras = document.querySelectorAll('p')
// paras.forEach(para => {
//     para.innerText += " Jeff Le Chad "
// })

// const content = document.querySelector('.content')
//console.log(content.innerHTML)
// avec un += on peut rajouter le code au code précedent.
// content.innerHTML = "<H2> H2 c'est bien parfois </H2>"

// const people = ["mario", "luigi", "yoshi"]

// people.forEach(person => {
//     content.innerHTML += `<p> ${person}</p>`
// })

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'http://www.jeffvanstraelen.fr')
// link.innerText = 'Le site à ZEEFF'
//
// const msg = document.querySelector('p')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('class', 'success')
// msg.setAttribute('style', 'color:green')

// const title = document.querySelector('h2')
// title.setAttribute('style', 'margin: 50px') // ca va recouvrir le style d'origine
//console.log(title.style.color)

// Beaucoup plus simple que de changer le setAttribute
// title.style.margin = '50px' // va rajouter au css existant
// title.style.color = 'crimson'
// pour changer le style dans le javascript on laisse tomber les '-' comme dans le native
//title.style.fontSize = '60px'
// pour retirer un style, il suffit de
//title.style.margin = ''

// const content = document.querySelector('p')
// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

// ADD REMOVE TOGGLE POUR CHANGER LES

// const paras = document.querySelectorAll('p')
//
// paras.forEach(p => {
//     if (p.textContent.includes("success")) {
//         p.classList.add('success')
//     }
//     if (p.textContent.includes("error")) {
//         p.classList.add('error')
//     }
// })
//
// const title = document.querySelector('.title')
// title.classList.toggle('test')
//

// ************* MANIPULATION SIBELINGS//PARENTS//CHILD  ******************* \\

// HTML utilisé pour l'exemple
// <body>
//     <h1> The DOM </h1>
//     <article>
//         <h2>Titre de l'article</h2>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sint.</p>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sint.</p>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, sint.</p>
//         <div>written par le STILCHAADZZ</div>
//     </article>
// </body>


// PARENTS => ENFANTS
// const article = document.querySelector('article')
// par contre le .children donne un HTMLcollection et on peut pas faire de forEach dessus :
// Rappel on peut faire un foreach sur un array ou sur un nodelist.
// le mieux c'est de le transformer en array
// console.log(article.children)

//un Array.from transforme tout en array, c'est pas destructif.
// const arr = Array.from(article.children)
// console.log(arr)

// POUR LA SCIENCE : on peut transformer à peu près tout en array du coup :
// const stil = "stil"
// const stilbis = Array.from(stil)
// console.log(stilbis) donne (4) ['s', 't', 'i', 'l']
// par contre on peut pas faire un array à partir d'un objet
// const stil = { stil: "naab", age: 30 }
// const stilbis = Array.from(stil)
// console.log("stilbis", stilbis)

// on prends les enfants de article, on le transforme en array et on fait un forEach sur tout les elements
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element')
// })

// ENFANT => PARENT
// .parentsElement donne comme son nom l'indique, le nom de l'élément parent de l'objet selectionné
// const title = document.querySelector('h2')
// console.log(title.parentElement)
// console.log(title.parentElement.parentElement)

// FRERE/SOEURS
// console.log(title.nextElementSibling) // va donner l'élement à coté de TITLE le suivant (ici le "p")
// console.log(title.previousElementSibling) // donnera null parce qu'il n'a pas de frere soeur dans ce cas là
// console.log(title.nextElementSibling.parentElement.children) // va redonner les enfants du parents, soit les enfants de 'article'


// ************* ADDEVENT LISENTERS  ******************* \\

// CLICKS //

// AU CAS OU VOUS LISEZ JUSQU'ICI : LA CA DEVIENT DEJA UN POIL PLUS VELU
// DONC YA PLUS DE TEXTE A LIRE POUR VOUS =/ ou =) ?

// HTML RELIE A LEXERCICE
// <h1>Todos</h1>
// <ul>
//     <li>Lait</li>
//     <li>Lis un livre</li>
//     <li>Jouer de la guitare</li>
//     <li>Payer les taxes :(</li>
// </ul>
// <button>Clickez Mwa PLIZ</button>


// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('click') // fait un click t'as vu ?
// });

//const ul = document.querySelector('ul')
//const items = document.querySelectorAll('li'); // donne une nodelist sur lequel on peut faire un forEach
// ul.remove();  // methode qui va retirer l'ul tout simplement


// lorsque l'on rajoute un li avec le click du bouton, malheureusment, il n'est pas dans l'event listener plus bas dans l'element
// for each, du coup tout nouveau élement crée ne pourra pas être cliqué et on ne pourra pas y ajouter d'action (en 1 plus bas), pour remedier à ça
// on passe sur le coté de l'exmple 2 avec l'ul
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     //   ul.innerHTML += `<li>Un truc nouveau</li>` // va ajouter un nouvelle ligne, possiblité évidement
//     const li = document.createElement('li'); // version plus propre évidement que innterHTML
//     li.textContent = 'un truc à faire';
//     ul.append(li); // <== LE .append VA METTRE UN ELEMENT EN BAS DE LA LISTE DE L'UL // ouais c'est ce qu'on utilise dans FORMDATA !! MINDBLOW T'AS VU ?
//     // ul.prepend(li);  // <== LE .prepend VA METTRE UN ELEMENT EN HAUT DE LA LISTE DE L'UL
// })

// event bobbeling :
// quand on envent va être mis par exmple sur le click ici dessous, le browser va aussi regarder si les parents n'ont pas d'event
// attachés à ceux ci pour voir s'il n'a pas autre chose à faire en même temps que le l'event sur lequel on clique par exemple.
// en gros la pour le click sur le li, il va regarder dans l'ul puis dans le body pour voir si rien n'est rattaché
// la en rajoutant l'eventlistener sur ul plus bas, en cliquant sur un element de LI cela va d'abord actionner le
// console.log (1) dans le LI puis le console.log (2) dans le UL
// pour éviter le bobbeling effect, on utilise la methode (e).stopPropagation()

// 1
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log("clicked")
//         // console.log(e) // donne toutes les informations sur l'event. On peut y voir le target et pleins d'autres propriétés
//         // console.log(e.target) // va donner la même chose que la ligne du base
//         // console.log(item)// va donner la même chose que la ligne du dessus
//         //  e.target.style.textDecoration = 'line-through' // va donner pour chaque élément un style en cliquant dessus
//         // e.target.remove() // avec la methode remove, on peut en retirer un en particulier
//         console.log("Event in LI")
//         e.stopPropagation()
//     })
// });
//
//  2
// ul.addEventListener('click', e => {
//     // console.log("Event in UL")
//     console.log(e.target) // on reconnait quand même chaque LI dans le UL, même quand on rajoute un élément dans l'ul =)
//     console.log(e.target.tagName) // donne le nom de l'element HTML; ici LI du coup on peut faire ça :
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })

// ************* DIFFERENTS EVENTS  ******************* \\

// HTML UTILISER
// <p class="copy-me">Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
// <div class="box">Bouge la souris autour de cette boite</div>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi!</p>

// on peut donc mettre un listener sur l'action de click droit / copier. (truc de foufou quand même)
// COPY EVENT
// const copy = document.querySelector('.copy-me')
// copy.addEventListener('copy', () => {
//     console.log("C'est copyright gros !")
// })
//
// // MOUVEOVER EVENT
// const box = document.querySelector(".box")
// box.addEventListener('mousemove', e => {
//     // console.log(e) // va donner les positions de la souris avec les screenx, screeny clientx et clienty, offsetX, offsetX
//     // console.log(e.offsetX, e.offsetY) // donne les coordonnées dans la boite en pixels
//     box.textContent = `{ x =>  pos ${e.offsetX} --- y => pos ${e.offsetY}}`
//     // permet de voir ou le mec à passé sa souris sur votre site. (Ca fait un gros log ceci-dit)
// })
//
// // WHEEL EVENT
// document.addEventListener('wheel', e => {
//     // console.log(e) // va donner pageX et pageY un comme comme offsetX et offsetY mais pour la page entière
//     console.log(e.pageX, e.pageY)
// })

// ************* CREATION d'un POPUP POPOPOPOUP  ******************* \\

// HTML ALLANT AVEC
// <button>click moi pliz</button>
// <div class="popup-wrapper">
//     <div class="popup">
//         <div class="popup-close">X</div>
//         <div class="popup-content">
//             <h2>VENTES FLASHSS</h2>
//             <p>50% de SALES !!</p>
//             <a href="#"> Voir les flingues ? </a>
//         </div>
//     </div>
// </div>
//
//
// const button = document.querySelector('button')
// const popup = document.querySelector('.popup-wrapper')
// const close = document.querySelector('.popup-close')
//
// button.addEventListener("click", () => {
//     popup.style.display = 'block'
// })
//
// close.addEventListener("click", () => {
//     popup.style.display = 'none'
// })
//
// popup.addEventListener("click", () => {
//     popup.style.display = 'none'
// })


// *************************** FORMULAIRESS ****************************** \\
// ************************ SUBMITS   ************************************* \\
// ************************  REGEX REGULAR EXPRESSION ********************** \\


// FORMULAIRES
// HTML
// <form class="signup-form">
// <input type="text" name="username" id="username" placeholder="username">
// <input type="submit" value="submit">
// <div class="feedback"></div>
// </form>

// on attache l'event listener sur le formulaire et non sur le bouton submit. Puisqu'on prends le formulaire et non le bouton

// const form = document.querySelector('.signup-form')
// const feedback = document.querySelector('.feedback')
// const username = form.username.value;
// const usernamePattern = /^[a-zA-Z]{6,12}$/;
//
// // il y a plusieurs façons de chopper les datas dans les formulaires
// // la plus classiques le selelctor :
// // const username = document.querySelector('#username')
// // mais on est pas obligé d'avoir un selector par ID si on a déjà un selector pour le formulaire
// // on l'a fait dans l'addeventlistener plus bas : il suffit d'écrire form.username et il va aller chopper l'id correspondante dans le
// // html. Magique propre. Note que ça marhe avec l'ID mais aussi avec l'attribut NAME (tiens comme tu fais dans REACT avec ton hook ?)
//
// form.addEventListener('submit', e => {
//     // quand on clique sur un formulaire, un submit, la première chose que cela va faire, c'est rafraichir la page
//     // on ne veut pas l'action PAR DEFAULTS d'ou :
//     e.preventDefault()
//     //  console.log(username.value)
//     // on va checker la validation de l'username. Pour ça on va faire un regex, explications plus bas
//
//     // on les déplace en dehors du scope
//     // const username = form.username.value;
//     // const usernamePattern = /^[a-zA-Z]{6,12}$/;
//
//     if (usernamePattern.test(username)) {
//         // si c'est OK ?
//         feedback.textContent = "L'username est OK !"
//     } else {
//         // sinon information pourquoi pas ok
//         feedback.textContent = "L'username doit contenir seulement des lettres et doit être entre 6 et 12 lettres"
//     }
//
// })
//
// // on va faire le feedback en live !
//
// // le keyup event est lorsque nous relachons une touche, le contraire de quand on appuie sur celle ci
// form.username.addEventListener('keyup', e => {
//     // console.log(e.target.value, form.username.value) // <= donne la même chose
//     if (usernamePattern.test(e.target.value)) {
//         // console.log('passed')
//         form.username.setAttribute('class', 'success') // on lui mets la classe success en vert
//     } else {
//         // console.log('failed')
//         form.username.setAttribute('class', 'error') // on mets la classe success en rouge, rouge pas bien !
//     }
// })

// REGULAR EXPRESSION REGEX
// Alors le regex ici sera utilisé pour checker, si dans le formulaire, on utilise le caractères que l'on souhaite
// par exemple pour qu'il n'y ai pas d'espaces, de caractères spéciaux dans l'username ou encore qu'on veuille (oui veuille ?) qu'il
// ai au moins 8 caractères, ou 10 ou 4 ?
// ils ne sont pas uniques à Js, yen a dans Python ou PHP (<=== LE MAL)

// un regex commence par un "/"
// ya le site regex101.com ou on peut faire des petits exemples
// si on tappe stil et qu'on fait un petit texte avec stil dedans, il va detecter les match, qu'il y ai des éspaces ou non
// si on veut qu'il prenne en compte QUE LE MOT EN PARTICULIER, il faut mettre un ^devant et un $derriere : ^stil$
// en fait le ^signifie rien d'autre devant et le $ rien d'autre derrière, tu peux bien sur en mettre qu'un

// si on écris ça : ^[a-z]$ : ça va match une lettre entre a et z mais une seule ! genre h ça passe hh non
// par contre cela ne prendra pas en compte les majuscules, parce que c'est relou non ? =)
// du coup on écris : ^[a-zA-Z]$ mais on peut toujours écrire qu'une lettre du coup on rajoute :
// des moustaches derrière avec le nombre de caractères authorisés. ^[a-zA-Z]{6,10}$ la il pourra entre 6 & 10
//pour rajouter les chiffres, on peut mettre les chiffres : ^[a-zA-Z0-9]{6,10}$
// pour pouvoir faire TOUS les touches du clavier, lettres, chiffres, spéciaux on peut écrire comme ça ^.{6,10}$

// const username = 'shaun'
// on rentre un username
//const pattern = /^[a-z]{6,}$/; // un regex va être écris entre /blabla/
// le 6, signifie, au MOINS 6 lettres
// la methode .test est une propritété de regex. Elle va renvoyer un bool
// let result = pattern.test(username)
// console.log(result)
//
// if (result) {
//     console.log('regex ok')
// } else {
//     console.log('regex pas ok')
// }

// renvoi un entier avec la position du match. Si on a écris par exmple le ^ et le $,
// et qu'il est pas à la bonne place, cela rendra -1. en temps normal si c'est bon il rendra 0
// s'il n'y a pas le ^et$ il donnera la position dans le l'entrée. C'est pratique si on veut rechercher des trucs dans
// un texte.
// let result = username.search(pattern)
// console.log(result)


// *************************** ********************************************************* \\
// ************************ FABRICATION DU QUIZZZ   ************************************* \\
// ************************ ****************** ******************************************* \\


// HTML && BOOTSTRAP LIER
// <!-- top section -->
// <div class="intro py-3 bg-white text-center">
//     <div class="container">
//         <h2 class="text-primary display-3 my-4">Ninja Quiz</h2>
//     </div>
// </div>
// <!-- result section -->
// <div class="result py-4 d-none bg-light text-center">
//     <div class="container lead">
//         <p>You are <span class="text-primary display-4 p-3">0%</span> ninja</p>
//     </div>
// </div>
// <!-- quiz section -->
// <div class="quiz py-4 bg-primary">
//     <div class="container">
//         <h2 class="my-5 text-white">On with the questions...</h2>
//         <form class="bg-primary quiz-form text-black container">
//             <div class="my-5">
//                 <p class="lead font-weight-normal">1. How do you give a ninja directions?</p>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q1" value="A" checked>
//                     <label class="form-check-label">Show them a map</label>
//                 </div>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q1" value="B">
//                     <label class="form-check-label">Don't worry, the ninja will find you</label>
//                 </div>
//             </div>
//             <div class="my-5">
//                 <p class="lead font-weight-normal">2. If a ninja has 3 apples, then gives one to Mario & one to
//                     Yoshi, how many apples does the ninja have left?</p>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q2" value="A" checked>
//                     <label class="form-check-label">1 apple</label>
//                 </div>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q2" value="B">
//                     <label class="form-check-label">3 apples, and two corpses</label>
//                 </div>
//             </div>
//             <div class="my-5">
//                 <p class="lead font-weight-normal">3. How do you know when you've met a ninja?</p>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q3" value="A" checked>
//                     <label class="form-check-label">You'll recognize the outfit</label>
//                 </div>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q3" value="B">
//                     <label class="form-check-label">The grim reaper will tell you</label>
//                 </div>
//             </div>
//             <div class="my-5">
//                 <p class="lead font-weight-normal">4. What's a ninja's favourite array method?</p>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q4" value="A" checked>
//                     <label class="form-check-label">forEach()</label>
//                 </div>
//                 <div class="form-check my-2 text-black-50">
//                     <input type="radio" name="q4" value="B">
//                     <label class="form-check-label">slice()</label>
//                 </div>
//             </div>
//             <div class="text-center">
//                 <input type="submit" class="btn btn-light">
//             </div>
//         </form>
//     </div>
// </div>

// on commence par faire un tableau avec les bonnes réponses. 
// on check la VALUE
// const correctRep = ['B', 'B', 'B', 'B']
// const form = document.querySelector('.quiz-form')
// const result = document.querySelector('.result')
// 
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     // on commecnce toujours le score à 0, c'est surtout pour démarer la variable
//     let score = 0;
//     // on va check dans le form, le Q1, puis sa valeur (A ou B en gros)
//     // la réponse sera forcément A ou B en l'écrivant sous la forme suivante
//     const userRep = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
// 
//     // checker les réponses : 
//     userRep.forEach((rep, index) => {
//         if (rep === correctRep[index]) {
//             score += 25;
//         }
//     })
// 
//     scrollTo(0, 0) // c'est donc pareil que window.scrollTo(0,0)
//     result.removeAttribute("class", "d-none")
// 
//     // Alors que fait on ici ? 
//     let output = 0; // On définis une variable output pour la démarrer à zero, ce sera l'affichage de notre scrore
//     const timer = setInterval(() => { // on mets setInterval dans une variable (surtout pour pouvoir l'arrêter)
//         result.querySelector('span').textContent = `${output} %` // on indique avec le query selector ou on veut que l'output se marque
//         if (output === score) { // le score obtenu plus haut, on le check avec l'output, si les nombres sont égaux, on arrête l'interval
//             clearInterval(timer)
//         } else {
//             output++ // sinon, ce qui se passe au début de la fonction il va incrémenter l'output
//         }
//     }, 10) // il le fera toutes les 10ms (c'est rapide hein =) )
// 
// })
// 

// WINDOW OBJECT
// console.log("hello")
// est la même chose que
// window.console.log("hello")

// ceux là aussi sont les mêmes trucs.
// c'est implicite alors on est pas obligé de les réécire.
// console.log(document.querySelector('form'))
// console.log(window.document.querySelector('form'))
// alert('hello')
// window.alert('yellow')

// pareil aussi
// window.setTimeout(() => {
//     alert("Salut les cons")
// }, 3000)
// setTimeout(() => {
//     alert("Salut les cons")
// }, 3000)


// setTimeOut va le faire qu'une fois au bout de XXX ms
// setInterval va faire l'action toutes les XXX ms

// ANIMATION DU SCORE
// on va utiliser une methode appellé setInterval
// pour pas qu'elle ne tourne dans le vide on va lui caller un petit i et on check l'incrémentation
// avec une fonction if. Une fois que le if est rempli on a la methode clearInverval pour l'arrêter
// du coup on nomme le le setInterval avec une const, ici timer, comme ça on sait quoi clearInterval() =)
// let i = 0;
// const timer = setInterval(() => {
//     console.log('hellow')
//     i++
//     if (i === 5) {
//         clearInterval(timer)
//     }
// }, 1000)


// *************************** ********************************************************* \\
// ************************ ARRAY METHODS  ********************************************** \\
// ************************ ****************** ******************************************* \\

// ARRAY METHOD FILTER
// const scores = [10, 5, 60, 50, 40, 30, 15]
// dans la fonction filter, il va checker chaque itération pour voir si la condition est remplie.
// filtrer est non desctuctive, donc elle ne changera pas la valeur de l'array
// const score = scores.filter((score) => {
//     return score > 20;
// })
//
// console.log(scores) // après la fonction filter, scores restera la même (= non destructive)
// console.log(score) // va me rendre un tableau avec seulement les scores au dessus de 20

// const users = [
//     { name: 'shaun', premium: true },
//     { name: 'jeff', premium: false },
//     { name: 'denis', premium: false },
//     { name: 'damien', premium: true }
// ]
// const premiumUsers = users.filter((user) =>  { return user.premium })  
// const premiumUsers = users.filter(user => user.premium) // vu qu'on fait un truc simple, on peut virer le return et juste l'écire propre comme ça
// 
// console.log(premiumUsers)

// ARRAY METHOD MAP
// const prices = [10, 5, 60, 50, 40, 30, 15]
// // encore une medhode qui n'est pas desctructive
// // const salesPrices = prices.map((price) => { return price / 2 }) // version longue
// // const salesPrices = prices.map(price => price / 2) // version sexy
// // console.log(salesPrices)
// 
// const products = [
//     { name: "étoile", price: 20 },
//     { name: "pas étoile", price: 30 },
//     { name: "jolie étoile", price: 10 },
//     { name: "étoile bof bof", price: 5 },
//     { name: "étoile verte", price: 50 },
// ]
// 
// const soldesProcuts = products.map((product) => {
//     if (product.price > 30) {
//         // si on fait ça par exemple : 
//         // products.price = products.price / 2
//         // return products; la ce sera destructif, et le tableau products sera du coup aussi modifié. d'ou l'interet de faire comme ça
//         return { name: product.name, price: product.price / 2 }
//     } else {
//         return product
//     }
// })
// 
// console.log(soldesProcuts)


// ARRAY METHOD REDUCE 
// const scores = [10, 20, 60, 40, 70, 90, 30]
// 
// // le reducer prends toujour deux arguements, l'accumulateur (acc) et le courant (current = curr)
// // a chaque itération il va prendre le current et check si le truc est correct ou non 
// // puis il va l'ajouter a l'accumulator. 
// // ici le but est de trouver le nombre de scores sont au dessus de 50, soit 60, 70 et 90 donc 3
// const results = scores.reduce((acc, curr) => {
//     if (curr > 50) {
//         acc++
//     }
//     return acc;
// }, 0) // ici on mets la valeur initiale de l'acc (ou peu importe comment on l'appelle)
// 
// console.log(results) // et on a 3

// la on va utiliser la methode reduce pour ajouter tous les scores que Mario à obtenus. Bon la c'est simple, mais s'il y a 200 entrèes cela
// va devenir beaucoup plus compliqué
// const scores = [
//     { player: "mario", score: 20 },
//     { player: "luigu", score: 30 },
//     { player: "ken", score: 10 },
//     { player: "mario", score: 5 },
//     { player: "yoshi", score: 50 },
//     { player: "mario", score: 20 },
//     { player: "luigu", score: 30 },
//     { player: "ken", score: 10 },
//     { player: "mario", score: 200 },
//     { player: "yoshi", score: 50 },
// ]
// 
// const marioTotal = scores.reduce((acc, curr) => {
//     if (curr.player === "mario") {
//         acc += curr.score;
//     } return acc
// 
// }, 0)
// 
// console.log(marioTotal)

// ARRAY METHOD FIND 
// const scores = [10, 5, 0, 40, 60, 10, 20, 70]
// // le find va trouver une valeur qui est équivalente à ce qu'on cherche, puis arrêter la recherche.
// 
// const firstHightScore = scores.find((score) => {
//     return score > 50
//     // il va iterer jusqu'à ce qu'il trouve la première valeure au dessus de 50 puis s'arrêter
//     // ici la réponse attendue sera 60
// })
// console.log(firstHightScore) // 60


// ARRAY METHOD SORT 
// sort les strings
// const names = ['mario', 'luigi', 'ken', 'ryu', 'yoshi', 'chun-li']
// 
// // le .sort() si on l'écris comme ça, va automatiquement ranger le tout par ordre alphabétique
// // cette fonction la est déstructive si on l'utilise par exemple comme ça
// // console.log(names) // names
// // const newNames = names.sort()
// // console.log(newNames) // names.sort()
// // console.log(names) // names.sort()
// // names.sort() 
// // names.reverse() // inverse totalement l'ordre de l'array
// // // la du coup on peut le sort par alphabétique et l'inverser 
// // console.log(names) //['yoshi', 'ryu', 'mario', 'luigi', 'ken', 'chun-li']
// 
// // sort les nombres
// scores = [10, 50, 20, 5, 35, 70, 45]
// // const newScores = scores.sort()
// // console.log(newScores) // alors c'est Js, il reste con, la on aura [10, 20, 35, 45, 5, 50, 70]
// // parce qu'il regarde que le premier chiffre (bouffon). C'est pour ça que les gens détéstent JavaScript
// 
// scores.reverse()


// scores.sort((a, b) => a - b) // version courte on peut inverser avec b-a
// console.log(scores)
// 
// const players = [
//     { name: "mario", score: 20 },
//     { name: "luigu", score: 30 },
//     { name: "ken", score: 10 },
//     { name: "mario", score: 5 },
//     { name: "yoshi", score: 50 }
// ]

// FOR THE SCIENCE !
// players.score.sort() // marche pas
// console.log(players) // pas non plus

// a et b sont deux nombres consécutifs dans le tableau et on va comparer a et b ! (c'est trop génial)
//alors alors alors ... 
// ici on va check deux éléments dans le tableau en fonction des scores. (donc dans players)
// on fait une fonction callback avec (a,b) pour qu'il compare chaque paire dans le tableau
// il va comparer le score a et le score b et va définir une nouvelle position dans l'array.
// si a plus grand que b alors b perdra une position
// si b plus grand que a, alors b gagnera une position
// sinon bha il fait rien. (facile)
// const newPlayersLongVersion = players.sort((a, b) => {
//     if (a.score > b.score) {
//         return -1
//     } else if (b.score > a.score) {
//         return 1
//     } else {
//         return 0
//     }
// })
// 
// // version plus courte, parce qu'il y a toujours une version plus courte 
// 
// const newPlayersShortVersion = players.sort((a, b) => b.score - a.score)
// 
// console.log("long", newPlayersLongVersion)
// console.log("short", newPlayersShortVersion)
// 

// CHAINING ARRAY METHODS
// enchainer les methodes dans les arrays

// const products = [
//     { name: "étoile", price: 20 },
//     { name: "pas étoile", price: 30 },
//     { name: "jolie étoile", price: 10 },
//     { name: "étoile bof bof", price: 5 },
//     { name: "étoile verte", price: 50 },
// ]

// on veut d'abord filtrer tous les produits qui sont en dessous de 20 en prix
// prendre l'array filtrer, puis le mapper en mettant les produits en soldes (genre - 50 %)
// comment on ferait normallement ? ?

// const filtred = products.filter(product => product.price > 20);
// const promos = filtred.map(sales => {
//     return `the ${sales.name} is ${sales.price / 2} euro`
// })
// console.log(promos)

// comment le faire en un coup ? 
// tout comme quand on fait un .then et un .catch
// on peut aussi faire ça sur des strings, si par exemple le reste des actions que l'on fait sont aussi sur un string.
// un peu comme pour tout dans Js nan ? 
// const promos = products
//     .filter(product => product.price > 20)
//     .map(sale => `the ${sale.name} is ${sale.price / 2} euro`)
// console.log(promos)


// *************************** ********************************************************* \\
// ************************  TODOLIST EN JS, mais plus classe  *************************** \\
// ************************ ****************** ******************************************* \\

// HTML POUR L'EXO
// <div class="container">
// <header class="text-center text-light my-4">
//     <h1 class="mb-4">Todo List</h1>
//     <form class="search">
//         <input class="form-control m-auto" type="text" name="search" placeholder="search todos" />
//     </form>
// </header>
// <ul class="list-group todos mx-auto text-light">
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>play mariokart</span>
//         <i class="far fa-trash-alt delete"></i>
//     </li>
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>defeat ganon in zelda</span>
//         <i class="far fa-trash-alt delete"></i>
//     </li>
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>make a veggie pie</span>
//         <i class="far fa-trash-alt delete"></i>
//     </li>
// </ul>
// <form class="add text-center my-4">
//     <label class="text-light">Add a new todo...</label>
//     <input class="form-control m-auto" type="text" name="add" />
// </form>
// </div>



// AJOUT D'UN TODO avec un submit à la touche d'entrée
// const addForm = document.querySelector(".add");
// const list = document.querySelector(".todos");
// const search = document.querySelector(".search input ")
// 
// const generateTemplate = todo => {
// 
//     const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
//                     <span>${todo}</span>
//                      <i class="far fa-trash-alt delete"></i>
//                  </li>`;
// 
//     list.innerHTML += html;
// };
// 
// addForm.addEventListener('submit', e => {
// 
//     e.preventDefault();
//     const todo = addForm.add.value.trim()
// 
//     if (todo.length) {
//         generateTemplate(todo)
//         addForm.reset()
//     };
// 
// });
// 
// // SUPPRESSION D'UN TODO (sur click sur la poubelle)
// 
// list.addEventListener('click', e => {
//     if (e.target.classList.contains('delete')) {
//         e.target.parentElement.remove()
//     }
// });
// 
// // RECHERCHE 
// 
// const filterTodo = term => {
// 
//     // ici on prends l'array et on check si le term n'est PAS contenu dans le text de la todo, et on lui applique la classe filtered
//     Array.from(list.children)
//         .filter(todo => !todo.textContent.toLowerCase().includes(term))
//         .forEach(todo => todo.classList.add('filtered'))
// 
//     // ici on check dans l'autre sens, s'il A le term contenu dans son texte, faut supprimer le filtered. 
//     Array.from(list.children)
//         .filter(todo => todo.textContent.toLowerCase().includes(term))
//         .forEach(todo => todo.classList.remove('filtered'))
// }
// 
// // la c'est l'évenement keyup pour voir ce qui a été tappé. Puis elle passe le term dans la fonction filteredTodo
// search.addEventListener('keyup', () => {
// 
//     const term = search.value.trim().toLowerCase();
// 
//     filterTodo(term)
// 
// });


// ********************************************************** \\
// ************************  DATES *************************** \\
// ************************************************************ \\

// const now = new Date()
// console.log(now)
// console.log(typeof now) // => object
// 
// // années, mois, days, times
// console.log('getFullYear :', now.getFullYear())
// console.log('getMonth :', now.getMonth()) // prends le mois dans un array [ jan[0], feb[1], mar[2] etc]
// console.log('getDate :', now.getDate())
// console.log('getDay :', now.getDay())
// console.log('getHours :', now.getHours())
// console.log('getMinutes :', now.getMinutes())
// console.log('getSeconds :', now.getSeconds())
// console.log('getMiliseconds : ', now.getMilliseconds())
// 
// // timestamps 
// console.log('timestamp', now.getTime())
// 
// // date strings 
// console.log('toDateString ', now.toDateString())
// console.log('toTimeString ', now.toTimeString())
// console.log('toLocalString ', now.toLocaleString()) <-- CELUI LA GROS
// console.log('toLocateDateString ', now.toLocaleDateString())


// timestamps 
// le timestamp va chiffre correspondant au nombre de miliseconds s'étant écoulés depuis le 1er janvier 1970 à 00h
// ouais ça donne un chiffre très long du coup
// const before = new Date('February 1 2019 7:30:59')
// const now = new Date()
// le now va donner le nombre de secondes depuis maintenant, le before va faire le calcul à la date
// console.log('timestamp', now.getTime(), before.getTime())
// const diff = now.getTime() - before.getTime()
// console.log(diff) // ça donne la difference entre maintenant et la date donnée.
// const mins = Math.round(diff / 1000 / 60);
// // on divise par 1000 parce que c'est en milisecondes puis par 60 pour obtennir le resultat en minutes
// // (evidement c'est à faire pour les minutes, là ça reste un sacré paquet !)
// console.log(mins) // 1557130
// 
// const hours = Math.round(mins / 60) // pareil pour passer aux heures on redivise par 60, c'est un peu niveau cm2 
// console.log(hours) // 25952
// 
// const days = Math.round(hours / 24) // vous avez vraiment besoin d'une explication ? 
// console.log(days)
// 
// const years = (days / 365.5) // le years j'ai pas modifié avec Math, c'est une simple division, avoir un arrondi dessus cest bof
// console.log(years)

// BREF !! ON PEUT FAIRE PLEINS DE TRUCS !

// CONVERTING TIMESTAMPS TO DATE OBJECTS
// const timestamp = 1549002659000
// console.log(new Date(1549002659000)) <== CELUI LA EST BEAU

// FABRIQUER UNE HOROLOGE DIGITALE 

// HTML 
// <div class="clock"></div>

// const clock = document.querySelector('.clock')
// 
// const tick = () => {
//     const now = new Date()
//     const h = now.getHours()
//     const m = now.getMinutes()
//     const s = now.getSeconds()
// 
//     const html = `
//     <span>${h} :</span> 
//     <span>${m} :</span> 
//     <span>${s}"</span> `
// 
//     clock.innerHTML = html;
// }
// 
// setInterval(tick, 1000);

// ************************  DATEFNS *************************** \\
// script permettant de formater la date de pleins de bonnes façons
// https://date-fns.org/
// const now = new Date()

// console.log(dateFns.isToday(now)) // ça te dit si la date c'est maintenant ou pas avec un Bool

// options de formatage
// console.log(dateFns.format(now, 'YYYY')) // année 2022 
// console.log(dateFns.format(now, 'MMMM')) // mois entier January
// console.log(dateFns.format(now, 'MMM')) // mois abrégé Jan
// console.log(dateFns.format(now, 'dddd')) // jour Monday
// console.log(dateFns.format(now, 'ddd')) // jour agrégé Mon
// console.log(dateFns.format(now, 'Do')) // quel jour 17th
// console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY')) // Monday, 17th, January, 2022

// const before = new Date('February 1 0 7:30:59')
// console.log(dateFns.distanceInWords(now, before))



// ********************************************************** \\
// ****************** !!!!  ASYNC !!! ************************ \\
// ************************************************************ \\

// Start Something Now && Finish it Later

// C'est un code qui peut commencer à un moment et finir à un autre
// en Synchrone Js va faire un state après l'autre. 
// Vu que si on fait les states les uns après les autres, si une des tâches fait une requête à un serveur ça peut bloquer
// les autres pendant que ça charge, 3secondes ou moins. Maintenant si plusieurs tâches font la même chose, c'est
// rapidement la merde 
// En Async, le statement va être terminé au moment du callback => il terminera plus tard
// pendant qu'il attends la réponse, les autres statements continuent tranquillement leur vie.

// Demo : 
// la il va faire les quatres console log les uns après les autres
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// le setTimeout est une fonction async. Du coup elle ne bloque pas le code. Han t'as vu truc de ouf ?!
// C'est ce que j'ai fait dans mon application réact pour faire un refresh sur des trucs en attendant d'avoir une réponse de la BD ! 
// cchhhheeeck \m/
// console.log(1)
// console.log(2) 
// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000)
// console.log(3)
// console.log(4)


// ****************** !!!!  REQUETES HTTP !!! ************************ \\
// ****************** !!!!  XMLhttprequest !!! ************************ \\

// le XMLhttprequest est une vieille façon de chopper des données mais aujourd'hui elle marche encore avec tout pleins de données. 
// paraitrait il qu'il y a des mecs qui utilisent encore cette methode ancenstrale, alors c'est ptet bien de la connaitre. 

// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         // L'événement 'readystatechange' est déclenché lorsque l'attribut readyState d'un document a changé
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data)
//                 // callback(undefined, data)
//             } else if (request.readyState === 4) {
//                 // callback('could not fetch data', undefined)
//                 reject('erreur dans l\'obtention de la data')
//             }
//         });
//         // autre methode pour faire un joli get. ya pas que fetch dans la vie !
//         request.open('GET', resource);
//         // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.send()
// 
//     })
// }
// 
// getTodos('todos/shaun.json')
//     .then(data => {
//         console.log("promise 1 resolve", data)
//         return getTodos('todos/jeff.json')
//     })
//     .then(data => {
//         console.log('promise 2 resolved', data)
//         return getTodos('todos/todos.json')
//     })
//     .then(data => console.log('promise 3 resolved', data))
//     .catch(err => console.log("promise rejected", err))
// 
// promise example
// const getSomething = () => {
//
//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('de la data')
//         reject('ya une erreur')
//     })
// }
//
// version un peu sale d'écrire un then =)
// getSomething().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })
//
// la version propre ! \o/ ça commence à me dire quelque chose !
// getSomething()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// CALLBACK HELL (et c'est un petit =))
// getTodos('todos/jeff.json', (err, data) => {
//     console.log(data)
//     getTodos('todos/shaun.json', (err, data) => {
//         console.log(data)
//         getTodos('todos/todos.json', (err, data) => {
//             console.log(data)
//         });
//     });
// });
// 


// ****************** !!!!  FETCH !!! ************************ \\

// Si tu refais des Fetchs un jour, n'oublie pas que tu dois faire un json()
// sur axios yen a plus besoin non plus, parce qu'ils sont INTELIGENTS !
// fetch('todos/shaun.json')
//     .then(data => data.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))

// ****************** ASYNC AWAIT ************************ \\

// l'async await à été crée pour rendre les chaines de promesses plus propres. (Moi j'aime bien les then qui se suivent perso ...)
// une fonction ou l'on a écris async attendra toujours une promesse

// const getTodos = async () => {
// 
//     const response = await fetch('todos/shaun.json')
// 
//     if (response.status !== 200) {
//         throw new Error('pas de fetch !')
//     }
// 
//     const data = await response.json()
//     return data;
// }
// 
// 
// // le gettodos aura la réponse après les console.log, vu que c'est asyncrone elle ne sera pas bloquante
// console.log(1)
// console.log(2)
// 
// getTodos()
//     .then(data => console.log('resolved:', data))
//     .catch(err => console.log('rejected:', err.message))
// 
// console.log(3)
// console.log(4)


// ********************************************************** \\
// ******** !!!!  PETITE APPLICATION METEO !!! *************** \\
// ************************************************************ \\

// Tout ce qui concerne l'application météo sera pour le moment dans le dossier "APPLICATION METEO"

// Je mets quand même les petits trucs un peu cool ici : 

// le saviez vous ? écrire un return comme ça : 
// return { cityDets, weather }

// au lieu de comme ça : 
// return { 
//  cityDets: cityDets,    
//   weather: weather
// }

// ça s'appelle "Object Shorthand Notation" et en fait c'est genre super récent. (cool ? ouais cool)

// Un autre truc cool qui est super récent et qu'on connait super bien aussi du coup c'est la "Destructuring", "Destructuration "

// admetonnt on reçoit un 'data' dans une fonction et qu'il aie deux propriétés, ben on peu l'écire comme en dessous au lieu
// d'aller les chercher un par un. C'est sexy. j'aime quand c'est sexy
//const cityDets = data.cityDets;
// const weather = data.weather;
// destructuration 
// const { cityDets, weather } = data;



// ************************************************************************* \\
// *********************** !!!!  LOCAL STORAGE  !!! ************************* \\
// *************************************************************************** \\

// pour sauvgarder les datas il y a deux solutions : 
// utiliser une DB, ou utiliser le Local Storage
// l'api Local Storage est directement inclus dans le browser. Pratique
// tout ce qu'on met dans le localstorage doit être écris en STRING

// Engeristrer de la data 
// localStorage.setItem('name', 'mario')
// localStorage.setItem('age', 50) // il a automatiquement transformé en String
// 
// // chopper de la data
// let name = localStorage.getItem('name')
// // étonnament ça mets MARIO t'as vu ? truc de foufou. 
// let age = localStorage.getItem('age')
// console.log(name, age)
// 
// // update la data, on l'avait pas vu mais bon c'est vraiment pas compliqué j'ai envie de dire ..  ça 
// localStorage.setItem('name', 'luigi')
// localStorage.age = 40
// name = localStorage.getItem('name')
// age = localStorage.getItem('age')
// console.log(name, age)
// 
// // supprimer du localStorage, une seule valeure (attention grave rien de neuf) 
// localStorage.removeItem('name')
// name = localStorage.getItem('name')
// console.log(name, age)
// 
// // supprimer tout le localStorage 
// localStorage.clear()
// name = localStorage.getItem('name')
// age = localStorage.getItem('age')
// console.log(name, age)

// *********************** !!!!  STRINGIFY && PARSE  !!! ************************* \\

// encore une fois hein, je suis en train de faire les cours d'un truc d'udemy, je me fais l'anti sèche et forcément ya des trucs ultra simples surlequels on tombe qu'on a déjà fait 1000 fois.
// c'est pas pour autant que je ne veux pas l'écire pour l'avoir dans un coin de ma tête un peu plus longtemps. c'est ça l'apprentissage : rabacher rabacher rabacher jusqu'a ce que ça rentre
// oh un papillion ? 
// soit un array :
// const todos = [
//     { text: 'Jouer à Mario Kart', author: "Jeff" },
//     { text: 'Tuer Bowser', author: "Mario" },
//     { text: 'Emmerder les français', author: "Macron" }
// ]
// // on veut le stocker dans le localStorage
// // pour ça il faut le stringify, évidement on connait déjà à peu près la réponse =)
// // console.log(JSON.stringify(todos)) // ce qui donne ça :  [{"text":"Jouer à Mario Kart","author":"Jeff"},{"text":"Tuer Bowser","author":"Mario"},{"text":"Emmerder les français","author":"Macron"}]
// 
// localStorage.setItem('todos', JSON.stringify(todos))
// 
// // pour recuperer les datas il faut aller chercher les datas et le PARSE
// const stored = localStorage.getItem('todos')
// console.log(stored) // ça va donner un objet en string
// console.log(JSON.parse(stored)) // va redonner un array 

// la suite est des trucs que l'on va mettre dans l'application météo


// *********************************** OBJECT ************************************** \\
// *********************** !!!!  ORIENTED   !!! ************************************** \\
// *********************************JAVACSCRIPT****************************************** \\

// c'est pour ça que tout le monde nous déteste ? 
// rappel sur la creation d'objets 

// const userOne = {
//     username: 'ryu',
//     email: 'ryu@streetfighterII.com',
//     login() { console.log('utilisateur s\'est connecté') },
//     logout() { console.log('utilisateur s\'est deco') }
// }
// // la on peut évidement appeller tout ce qu'il y a dans l'user : 
// console.log(userOne.email, userOne.username) // etc
// // ou
// userOne.login()
// 
// // si on veut refaire un autre user on va devoir faire ça : 
// 
// const userTwo = {
//     username: 'chunLi',
//     email: 'chunLi@streetfighterII.com',
//     login() { console.log('utilisateur s\'est connecté') },
//     logout() { console.log('utilisateur s\'est deco') }
// }
// console.log(userTwo.email, userTwo.username)
// userTwo.login()

// en gros sur deux petits user on s'est quand même déjà vachement répétés. Même suffisament pour me herriser le poil t'as vu ?
// imagine a 10 user ? 1 milliard ? comme sur FaceBook ? c'est pour ça que c'est de la merde

// le mieux c'est qu'on puisse faire ça non ? :
// const userThree = new User('guile@streetfighterII.com', 'guile') // bon la on peut pas encore le faire parce que l'on a pas faire de constructeur
// mais lorsqu'on en aura un, cela nous donnera un modèle, un prototype ? pour fabriquer rapidement des users. C'est un peu nos modèles dans le back de Node Js


// *********************************** CLASSES ************************************** \\

// on crée une class qui est en fait un plan, un blueprint de la classe qu'on veut crée, avec toutes ses caracteristiques.
// par exemple si on crée une voiture, elle aura forcément quartre roues, un toit, un moteur, ce sera écris dans le prototype, mais on pourra ensuite lui
// indiquer par exemple la couleur, les options, toit ouvrant, suv, gros branleur, etc etc.

// avec un User Class on pourrait du coup faire ça :
// User Class {
// username
//age
//login()
//logout()
// }
// puis faire un new User ('ryu', 'ryu@streetfighterII.com')
// et new User ('chunLi', 'chunli@streetfighterII.com')
// et new User ('Darmanin', 'Darmanin@streetfighterII.com')
// etc etc etc c'est ce qu'on fait déjà dans nos modèles dans le back =)

// creation de class : 

// class User {
//     constructor() {
//         // mets les proprietés
//         this.username = 'mario';
//     }
// }
// 
// const userOne = new User();
// const userTwo = new User();
// // le mot clefs "new" fait trois choses : 
// // 1-  il crée tout d'abord un nouvel objet vide {}
// // 2- il lie la valeur de 'this' au nouvel objet vide
// // 3- il appelle le constructeur pour construire l'objet 
// console.log(userOne)
// console.log(userTwo)
// le problème c'est que la, bêtement, les deux vont être exactement pareils. Ce n'est pas vraiment ce qu'on veut faire

// on préfererais faire ça, cela va crée des objets uniques ! 
// on peut du coup aussi rajouter autant d'arguments que l'on veut  

// class Users {
//     constructor(username, email) {
//         // mets les proprietés, et seulement des propriétés, pas des methodes
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     // on utilise une fonction raccourcie sans la fonction flechée. Si on fait une fonction flechée, le this va correspondre a windows et non à la classe
//     login() {
//         console.log(`${this.username} juste logged in`);
//         return this;
//     }
//     logout() {
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore() {
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`)
//         return this;
//     }
// }

// const userThree = new Users('mario', 'mario@streetfighter.com')
// const userFour = new Users('luigi', 'luigi@hamsterXXX.com')
// à chaque nouvelle création on dit qu'on crée une INSTANCE de la classe Users
// console.log(userThree, userFour)
// userThree.login()
// userFour.login()

// si on veut chainer les methodes pour le moment faut faire ça :
// userThree.login()
// userThree.logout()
// // du coup on aimerait faire ça : 
// // userThree.login().logout() // mais ça ne marche pas, parce que login() ne retourne pas une valeur (return, du coup elle est undifined)
// 
// userThree.incScore() // devrait avoir un score de 1
// userThree.incScore() // devrait avoir un score de 2
// userThree.incScore().incScore().incScore() // ne fonctionne toujours pas puisque on ne retourne pas de valeurs du coup il est undifined
// pour faire face à ça, tout simplement, on fait un 'return this' dans les différentes méthodes. Ce qui retournera ce qu'il a dans cette instance

// la du coup ça va fonctionner, parce qu'on retourne le this
// userThree.login().incScore().incScore().logout()

// *********************************** SUBCLASSES (heritages) ************************************** \\

// c'est une classe qui reçoit des proprietés d'une classe qui hérite de la class de base mais à qui on rajoute des fonctions
// un peu comme par exemple une classe admin, qui reçoit tout de la part d'un user mais qui reçoit la proprieté 
// admin, delete, update user (par ex)

// la on dit à Admin : va chercher User et prends toutes les proprietés de classes
// si la classe qu'on utilise a partir d'un autre et qu'il n'a pas de constructeur, il va de suit prendre celui d'origine 
// class Admin extends Users {
//     deleteUser(user) { // prends le nom de l'user
//         // l'array d'user est filtré avec users.filter et pour chaque user de l'array 'u' 
//         users = users.filter(u => u.username !== user.username)// il retourne si l'user est different de l'user appellé dans la methode.
//     }
// }

// cas ou l'on veuille rajouter un proprieté dans le constructeur admin, mais en gardant celles de l'user : 
// class Admin extends Users {
//     constructor(username, email, title) { // en gros comme pour les classes on lui indique ce qu'il faut qu'il construise (c'est clair ?)
//         super(username, email) // super va dire de regarder dans la classe parent et prendre le constructeur de celui ci
//         this.title = title // si on omet le super, il va nous sortir une erreure comme quoi il faut le mettre
//     } // et cela ne fonctionnera pas, là en l'occurence ça passe
//     deleteUser(user) {
//         users = users.filter(u => u.username !== user.username)
//     }
// }
// 
// const userAdmin = new Admin('jeff', 'jeff@roxxormagazine.com', 'leader-fremens-darrakis-united')
// // console.log(userAdmin) // va donner un user (pour le moment)
// 
// let users = [userThree, userFour, userAdmin]
// console.log(users)
// userAdmin.deleteUser(userFour)
// console.log(users)
// userThree.deleteUser(userAdmin) // ne vas bien évidement pas fonctionner puisque cette methode ne fonctionne pas dans sa classe
// userThree.deleteUser is not a function


// *********************************** Que se passe-t'il dans les classes ?  ************************************** \\

// en Js on a rajouté des classes comme du sucre syntaxique pour reprendre les prototypes. Pour que les classes aient le même genre 
// de comportement que dans les autres languages. Sous la classe, c'est un "constructeur de protypes" qui est en réalité lancée.
// d'ailleurs la 'class' en Js n'est que la depuis relativement récement. (je soupçonne que c'est pour que les gens détestent un peu moins Js)

// reprenons cet exemple. 
// class Users {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//     }
// }
// comment crée ça sans "class ?" facile !! une fonction =) (on est Js ou pas Js)
// d'ailleurs, vscode kiffe tellement ce genre d'annotations qu'il nous dit "ah ça pourrait être une classe methode t'as vu ? "
// function Users(username, email) {
//     this.username = username;
//     this.email = email;
//     this.login = function () { console.log(`${this.username} vient de se logger`) }
// }



// la fonction new va crée exactement la même chose qu'avec la class (les trois points)
// const userThree = new Users('mario', 'mario@streetfighter.com')
// const userFour = new Users('luigi', 'luigi@hamsterXXX.com')
// console.log(userThree, userFour)
// userThree.login()

// ce qui est bien quand même, ce serait encore mieux de faire un prototype

// *********************************** PROTOTYPES  ************************************** \\

// tout, dans Js à un prototypes, ce sont les methodes disponibles pour chaque objet, comme Array, Date etc
// chaque objet va pointer vers un endroit ou toutes ces methodes sont stockés, plutôt qu'elles aient toutes les leurs à chaque fois.
// ce qui parrait logique parce qu'en terme d'espace utilisé on serait vite à cours de mémoire, comme dans chrome...
// on peut voir toutes les methodes d'un objet en tappant Object.prototype (Array.prototype, Data.prototype)dans la console. .
// Même avec celles qu'on a crée.  Sauf que dans notre cas, pour l'instant Users n'en a pas des masses des masses

// aller on reprends cet exemple : 
// function Users(username, email) {
//     this.username = username;
//     this.email = email;
// }
// // pour rajouter un prototype à Users on va faire comme ça : 
// Users.prototype.login = function () {
//     console.log(`${this.username} vient de se logger`)
//     return this
// }
// Users.prototype.logout = function () {
//     console.log(`${this.username} just logged out`)
//     return this
// }
// // du coup avec cette 'methode' ou plutot en rajoutant cette methode, on va le mettre directement dans le prototype de Users, et pas 
// // seulement dans chaque utilisateur. Par contre chaque Users y aura access
// // What If Method Man Was A JavaScript Fanatic ?... (vous avez deux heures) 
// 
// const userThree = new Users('mario', 'mario@streetfighter.com')
// const userFour = new Users('luigi', 'luigi@hamsterXXX.com')
// // console.log(userThree, userFour)
// // userThree.login()
// // userThree.logout()
// 
// // pour pouvoir enchainer les methodes il faut retourner un this encore une fois (ouais comme dans les classes)
// // userFour.login().logout()
// 
// // *********************************** heritages avec les classes fonctionnelles  ************************************** \\
// 
// function Admin(username, email, title) {
//     // au lieu d'utiliser le 'super()' on va utiliser la methode ".call()"
//     // le premier argument est this il va prendre en compte le contexte de Users, ensuite les autres arguments sont celles qu'on veut passer
//     Users.call(this, username, email);
//     // si on veut passer un autre truc spécifique à l'admin il suffit de la rajouter dans la parenthèse au dessus (j'aime bien le 'il suffit'), genre tout est simple t'as vu ? 
//     // puis de rajouter son propre this
//     this.title = title;
// }
// 
// // par contre l'Admin ne reçoit pas en héritage les methodes du prototype de Users.
// // pour lui donner on peut faire ça : 
// // donc bêtement on va crée un nouveau prototype pour Admin, et on va crée un nouvel objet avec les Users.prototype
// Admin.prototype = Object.create(Users.prototype)
// // après ça si on fait un Admin.prototype, on aura un Users d'héritage
// // si on rajoute une methode à Admin, elle sera directement en dessous du prototype, pas un level en dessous
// Admin.prototype.deleteUser = function () { }
// // si on venait à rajouter un "SuperAdmin", on pourra lui rajouter les prototypes d'Admin et du coup il aura également les proto de Users dans
// // un troisième level. 
// // Vous aviez rien compris à inception ? Je vous offre le JavaScript
// 
// const userAdmin = new Admin("jeff", "jeff@labelgique.be", "leader fremen")
// console.log(userAdmin)



// *********************************** INTERLUDE ************************************** \\
// ****************** Application des Class && Prototypes sur l'Appli Meteo  *********** \\
// *********************************** INTERLUDE **************************************** \\

// on a utilisé des classes de ouf avec des methodes dans l'appli meteo, j'ai essayé de l'expliquer au mieux en laissant les deux versions. Franchement c'est quand même pas mal de faire ça comme ça
// je trouve ça presque dommage que nous ne l'ayons pas vraiment fait 'comme ça en cours'. Attention, on a utilisé des grosses classes avec des gros constructeurs pour notre base de données avec
// mongoose, mais pas vraiment dans le front. (Hormis pour le café de la place si je me rapelle bien.) Le fait est est que le fait est. 



// *********************************** STORING DATA ******************************************* \\
// *********************** ENREGISTRER DE LA DATA  ********************************************* \\
// ********************************* NOSQL && FIREBASE ****************************************** \\

// TOUT LE HTML
// <div class="container my-5">
//     <h2>Recipes</h2>
//     <ul>
//     </ul>
//     <form>
//         <label for="recipe">Add a new recipe:</label>
//         <div class="input-group">
//             <input type="text" class="form-control" id="recipe" required>
//             <div class="input-group-append">
//                 <input type="submit" value="add" class="btn btn-outline-secondary">
//             </div>
//         </div>
//     </form>
//     <button class="btn btn-outline-secondary">Arrêter l'écoute permanente</button>
// </div>
// <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"></script>
// <script>
//     // Initialize Firebase
//     var config = {
//         apiKey: "AIzaSyADij-m4SoKb-hB-Gmix5hdCWSXJq4oJ6w",
//         authDomain: "modern-js-stilgar.firebaseapp.com",
//         projectId: "modern-js-stilgar",
//         storageBucket: "modern-js-stilgar.appspot.com",
//         messagingSenderId: "518314991342",
//         appId: "1:518314991342:web:6990c945e4c7a58054ddff",
//         measurementId: "G-XWH9NL626T"
//     };
//     firebase.initializeApp(config);
//     const db = firebase.firestore();  
// </script>


// Alors je vous le cache pas, les sites, ça marche avec de la data. (Au cas ou vous ne le sachiez pas)
// généralement du coup on bosse avec une Base De Données. 
// il y a deux types de base de données : 
// SQL qui va fonctionner avec des tables, rangées et collonnes (tables, rows and columns). Ce qui va être trop cool si on utilise du PHP
// NoSQL qui va fonctionner avec des collections, des documents et des proprietés. Ce qui va être trop cool si on utilise du JavaScript. Qui utilise du JavaScript ?!! J'UTILISE LE JAVASCRIPT ! 

// une NoSQL va fonctionner avec une instance principale (genre le nom de votre site ?)
// puis va disposer de plusieurs collections, par exemple : Users, BlogPosts, Comments, Pizzas, Chaussures Gauches (spécial unijambistes), Chaussures etc etc
// dans chaque collection on aura ce qu'on appelle des documents. 
// chaque document est un Objet avec des clefs et des valeurs (key && values). Chaque document ressemble un tout petit peu à un objet JavaScript, c'est pour ça que la vie est bien foutue

// Firebase est un service clefs en main fait par google qui nous permet d'avoir un serveur sans devoir faire un serveur 
// il nous permet de pas se prendre la tête avec l'auth, et par exemple, une DB avec une RealTime DataBase, ou dernièrement Cloud Firestore
// c'est gratos pour les petites applications perso web. Attention, par contre, il faut s'inscrires sur firebase.google.com puis de crée un nouveau projet. 
// ce truc vous fillera un lien, est c'est cool non ? =) 
// ya pas mal de trucs à faire pour installer le firebase machin. Jvais pas tout réécrire tout ici, je pense suivre un autre cours sur Firebase pour mieux comprendre par la suite
// ce qu'il faut savoir, c'est que j'ai rajouté le script firebase sur l'index.html pour pouvoir l'utiliser. (D'ailleurs au stade ou j'en suis, tout le HTML de base que j'avais écris 
// pour les autres applications je les ai supprimés pour plus de clarté, mais généralement dans ce sandbox.js, j'avais déjà à peu près tout copié coller pour plus de réusablity de tout le borderl
// puis les exemples parlent d'eux mêmes pour la plupart donc 'est plutôt pas mal)


// POUTAIN comment perdre 1 heure ... Alors si vous suivez le tuto, bha maintenant, firebase donne un tout autre code snippet pour acceder a la DB. Sauf que bha, je ne sais pour quelle raison ça MERDE
// faudrais que découvre poruquoi d'ailleurs, mais c'est pas le moment je pense alors le code original que mainteant Firebase nous donne c'est ça : (je le mets la pour les passants, on ne sait jamais)
//// // // //  <script type="module">
//// // // //    // Import the functions you need from the SDKs you need
//// // // //    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
//// // // //    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
//// // // //    // TODO: Add SDKs for Firebase products that you want to use
//// // // //    // https://firebase.google.com/docs/web/setup#available-libraries
//// // // //  
//// // // //    // Your web app's Firebase configuration
//// // // //    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//// // // //    const firebaseConfig = {
//// // // //      apiKey: "AIzaSyADij-m4SoKb-hB-Gmix5hdCWSXJq4oJ6w",
//// // // //      authDomain: "modern-js-stilgar.firebaseapp.com",
//// // // //      projectId: "modern-js-stilgar",
//// // // //      storageBucket: "modern-js-stilgar.appspot.com",
//// // // //      messagingSenderId: "518314991342",
//// // // //      appId: "1:518314991342:web:6990c945e4c7a58054ddff",
//// // // //      measurementId: "G-XWH9NL626T"
//// // // //    };
//// // // //  
//// // // //    // Initialize Firebase
//// // // //    const app = initializeApp(firebaseConfig);
//// // // //    const analytics = getAnalytics(app);
//// // // //  </script>

// or ce qu'il veut, pour que ça fonctionne, c'est comment c'est écris actuellement dans le HTML (jvais le réécrire ici pour plus de clarté)
// au cas ou j'espère que ça vous aidera dans des futures péligrinations. 

////////// <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
////////// <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"></script>
////////// <script>
//////////     // Initialize Firebase
//////////     var config = {
//////////         apiKey: "AIzaSyADij-m4SoKb-hB-Gmix5hdCWSXJq4oJ6w",
//////////         authDomain: "modern-js-stilgar.firebaseapp.com",
//////////         projectId: "modern-js-stilgar",
//////////         storageBucket: "modern-js-stilgar.appspot.com",
//////////         messagingSenderId: "518314991342",
//////////         appId: "1:518314991342:web:6990c945e4c7a58054ddff",
//////////         measurementId: "G-XWH9NL626T"
//////////     };
//////////     firebase.initializeApp(config);
//////////     const db = firebase.firestore();  
////////// </script>
////////// 

// attention, beaucoup de methodes sont ulisiés pour acceder a la BD firebase/firestore.
// celles ci sont bien évidement dédiés qu'à ce genre de bases de données. Alors ça peut être pratique si justement on cherche à faire un truc avec ce genre de BD. Par contre si c'est avec une autre BD, 
// faudra vous fier à ce bon vieux node.js. Je suppose qu'il doit yavoir moyen de présciser une db avec un coté back avec db = "adrresse.du.back" ou db.collection = "adresse.du.back"
// ce serait interesasant que j'aille voir ça a un moment ou a un autre =)
// enfin maintenant que j'y pense, c'est pour ça qu'il y a fetch // axios en fait non ... aller je sors

// VERSION GET FIREBASE // 

//const list = document.querySelector('ul')
//const button = document.querySelector('button')
//const addRecipe = (recipe, id) => {
//
//    let time = recipe.created_at.toDate()
//
//    let html = `
//    <li data-id="${id}"> 
//    <div>${recipe.title}</div>
//    <div>${time}</div>
//    <button class="btn btn-danger btn-sm my-2">Suprimer</button>
//    </li>
//    `;
//
//    list.innerHTML += html;
//}
//
//const deleteRecipe = (id) => {
//    const recipes = document.querySelectorAll('li')
//    recipes.forEach(recipe => {
//        if (recipe.getAttribute('data-id') === id) {
//            recipe.remove();
//        }
//    })
//}


// On commente ça parce que l'on va le remplacer par un addeventlistener qui va checker chaque modif de la bd. Enfin à peu près. 
// je crois qu'on va fabriquer une sorte d'useeffect pour la db; cool non ? 

// GET DOCUMENT MAIS QU'UNE FOIS // 
// db.collection('recipes') // accès à la DB, et à la collection spécifique
//     .get() // methode pour grab des datas
//     .then(snapshot => { // puis en fonction de la réponse, on fait ça : simple, basique.
//         // console.log(snapshot.docs[0].data()) // ça permet de voir les datas dans la base de données. (et la, ça marche, truc de fou...)
//         // mais ce qu'on veut c'est de tous les avoir. donc on balance un forEach
//         snapshot.forEach(doc => addRecipe(doc.data(), doc.id));
//     })
//     .catch(err => console.log(err))

// GET DOCUMENT MAIS AVEC UN "ADDEVENTLISTENER"

// alors c'est plus chelou que ce que je pensais. En fait on rajoute une methode bien spécifique qui s'applle onSnapshot au moment du get. Certes. 
// en gros elle va checker en permanence s'il y a un changement. Encore une fois je pense et je suis sur même que c'est propre à Firebase DB. Enfin c'est pas de la frioriture, c'est plutot cool
// vu que sur React, au final on mets en place des refreshs dans tous les sens, la la BD le fait automatiquement. Propre.
// const unsub = db.collection('recipes')
//     .onSnapshot(snapshot => {
//         // console.log(snapshot) // snap est un truc DANS firebase (ouais encore une fois)
//         // console.log(snapshot.docChanges()) // docChanges() est une methode nous permettant de voir tous les changements par rapport à la collection 
//         // la première fois qu'on va faire un onSnapshot, tout sera écris par défault en 'added'
//         snapshot.docChanges().forEach(change => {
//             const doc = change.doc
//             // donc on va checker dans cet array qui est celui qui check tous les changements
//             // quand il va voir qu'un type est passé de added à removed, il va la retirer du DOM direct avec la fonction plus haut. TOUT SIMPLEMENT !
//             if (change.type === 'added') {
//                 addRecipe(doc.data(), doc.id)
//             } else if (change.type === 'removed') {
//                 deleteRecipe(doc.id)
//             }
//         })
// 
//     })
// 
// fonction pour arrêter l'écoute permanente de la DB 
// alors c'est cool, du coup quand on fait quoi que ce soit, après avoir appuyé sur ce bouton, bha ça arrête tout du côté des actions. 
// par contre pas moyen de le réactivé par la suite (lol ?)
// pour que ça fonctionne, il faut mettre le "db.collection('recipes').onSnapshot(snapshot => {//do something})" dans une constante (qu'on appelle dans le bouton)
// (j'insulte mon/notre/votre intelligence parfois en en écrivant autant ... mais bon, je rigolorais bien si je retombe la dessus dans 15 ans. (oopa))  
// button.addEventListener('click', () => {
//     unsub()
//     console.log("arrêter d'écoute la base de données !")
// })
// 
// // VERSION SUMBIT FIREBASE //ADD // 
// 
// // j'ai envie de dire que c'est pas foufou par rapport à notre utilisation de mongoose par exemple
// // on crée un modèle qui va aller pousser dans la db, dans la collection reciepe ce modele
// // c'est plutôt cool de faire ça a la main aussi =)
// // je pense que presque tout parler pour lui même dans cet exemple
// 
// const form = document.querySelector('form')
// form.addEventListener('submit', e => {
//     e.preventDefault()
// 
//     const now = new Date()
// 
//     const recipe = {
//         title: form.recipe.value,
//         // notez que pour le Timestamp, firebase/firestore à sa propre notation bien spécifique. 
//         created_at: firebase.firestore.Timestamp.fromDate(now)
//     }
// 
//     db.collection('recipes')
//         .add(recipe)
//         .then(() => console.log('recette ajoutée'))
//         .catch(err => console.log(err))
// 
// })
// 
// VERSION SUPPRIMER FIREBASE // 

// on crée un event listener sur list pour pouvoir chopper tous les boutons supprimer individuellement
// beaucoup plus pratique que d'en mettre un par bouton (ce qui au bout d'un moment serait pas loin d'être 
// mission impossible, sponsorisé par la Scientologie)
// list.addEventListener('click', e => {
//     // faut qu'on s'assure que ce ne sont que les boutons que l'on va cliquer qui seront target
//     // la sans spécifier, toute la div, liste etc sera target
//     // console.log(e)
// 
//     // pour supprimer il faut pointer vers le bon truc. on va alors rajouter l'id justement lors du 'get()'
//     // puis l'intégrer dans la list quelque part. En l'orrucence on peut faire ça en HTML : <li data-id="${id}'>
//     if (e.target.tagName === 'BUTTON') {
//         // DONC, pour chopper l'id de façon simple. On choppe chaque element de la liste qui s'appelle button
//         // dans chaque button on lui a rajouté un data-id propre à chaque élément dans la DB et donc récupérable
//         // puis pour rechopper l'id qu'il faut on target le bouton, on choppe son parent et on choppe son attribut data-id
//         // écris comme en dessous c'est un poil long, mais quand on y pense, c'est un peu simple non ? =)
//         const id = e.target.parentElement.getAttribute('data-id')
//         // console.log(id) et ça marche t'as vu ? 
// 
//         // encore une fois du coup on choppe la database
//         db.collection('recipes')
//             .doc(id)
//             .delete()
//             .then(() => console.log('recette supprimée'))
//             .catch(err => console.log(err))
// 
//     }
// })


// *********************************** Interlude ******************************************* \\
// *********************** On a fabriqué un petit chat en direct **************************** \\
// ********************************* Interlude *********************************************** \\

// a voir dans les fichiers Chat RoomZ, parce que WareZ ?


// ****************************************************************************************** \\
// *********************** Autres fonctions modernes de ES6 ********************************** \\
// ******************************************************************************************* \\


// ************************* // PARAMETRE REST  ************************ \\

// en gros le parametre rest est ce que t'as utilisé dans la fonction useSubmit dans ton hook perso sur uppertown. Permettant de chopper autants de paramètres que tu veux dans une fonction quand tu ne sais
// // pas à l'avance combien tu vas en avoir. Maintenant tu sais au moins comment ça s'appelle =)
// const double = (...nums) => {
//     // faire un truc
//     console.log(nums) // renvoie un array avec tous les arguments (spour ça que je l'avais appellé '...args')
//     return nums.map(num => num * 2)
// }
// const result = double(1, 2, 3, 5, 4, 456, 4)
// console.log(result) // et la tous les numeros sont doublés.

// ************************* // // SYNTAXE SPREAD ARRAYS   ************************ \\
// 
// const people = ['jeff', 'lois', 'jeremy']
// console.log(...people) // le spread, les sorts de l'array, d'ou le spread ? on les spread'em out ? (ils sont marrant a EC6) 
// // réponse : jeff lois jeremy
// const members = ['romain', 'pierre-alain', 'virigine', ...people]
// console.log(members) // la on a spread l'array people DANS l'array membrers.
// // réponse : ['romain', 'pierre-alain', 'virigine', 'jeff', 'lois', 'jeremy']

// ************************* // // SYNTAXE SPREAD OBJECTS   ************************ \\
// 
// const person = { name: "jeff", age: 30, travail: 'chercheur à l\'ANPE' }
// console.log(person)
// // réponse : {name: 'jeff', age: 30, travail: "chercheur à l'ANPE"} (OBVIOUSLY)
// const personClone = { ...person, adress: 'Grasse' }
// console.log(personClone)
// réponse : {name: 'jeff', age: 30, travail: "chercheur à l'ANPE", adress: 'Grasse'}

// alors à la difference près que personClone ne devient pas un pointeur vers person, mais bel et bien un nouvel objet. (et ça, c'est cool)


// ************************* SETS  ************************ \\

// le set est un objet un peu particulier. Un peu => "COMME" <= un array mais pas tout à fait. (c'est oversimplifié en fait)
// il ne permet pas la duplication d'informations (déjà ) 
// const namesArray = ['guile', 'ryu', 'pikachu', 'himmler', 'ryu']
// console.log(namesArray) // (5) ['guile', 'ryu', 'pikachu', 'himmler', 'ryu']
// // ya pas de short version pour écrire un Set (pour le moment)
// // const namesSet1 = new Set(['guile', 'ryu', 'pikachu', 'himmler', 'ryu']);
// // const namesSet2 = new Set(namesArray)
// // console.log(namesSet1) // (4) {'guile', 'ryu', 'pikachu', 'himmler'}
// // console.log(namesSet2) // va donner la même chose
// // const uniqueNames = [...namesSet1] // pour les remettre dans un array. 
// const uniqueNames = [...new Set(namesArray)] // la version sympa pour mélanger le set et le spread. Du coup, c'est fait en une seule ligne.
// console.log(uniqueNames)
// 
// // je disais que set était comme un array mais pas tout à fait, c'est parce qu'il n'a pas les mêmes methodes. Par exemple il n'a pas de lenght ou de push etc
// 
// const ages = new Set()
// ages.add(20)
// console.log(ages) // Set(1) {20}
// ages.add(25).add(30)
// console.log(ages) // Set(2) {20, 25, 30}
// ages.add(25)
// console.log(ages) // Set(3) {20, 25, 30} il va naturellement ignorer le troisieme. 
// ages.delete(25) // vu qu'il n'a que des valeurs uniques, il va forcément retirer la bonne. 
// console.log(ages)  // Set(2) {20, 30}
// 
// console.log(ages.size) // '2' // équivaut à la methode ages.lenght dans un array. 
// console.log(ages.has(30), ages.has(25)) // true, false // il check s'il a la valeur 30 dans son Set.
// 
// ages.clear() // retire tout ce qu'il y a dans un set. 
// console.log(ages) // Set(0) {size: 0}
// 
// const fremens = new Set([ // on met le new Set directement dans un array, un peu comme on l'a fait plus haut en faisaint un spread de set dans un array vide. 
//     { name: 'paul', age: 16 },
//     { name: 'stilgar', age: 150 },
//     { name: 'chani', age: 14 }
// ])
// 
// fremens.forEach(fremen => { // comme ça, après, on peut faire un forEach dessus
//     console.log(fremen.name, fremen.age)
// })

// ************************* // SYMBOLS  ************************ \\

// symbols est une des valeurs primitives de Js (une assez récente d'ailleurs je crois)
// on en parle jamais assez de symbols, comme si tout le monde s'en foutais un peu... C'est peut être ce qui se passe en vrai ? 
// la particularité des symboles c'est qu'ils sont UNIQUES. Il ne peut jamais en avoir deux pareils

// const symbolOne = Symbol()
// const symbolTwo = Symbol()
// 
// console.log(symbolOne, symbolTwo, typeof symbolOne)
// //resultat :  Symbol() Symbol() 'symbol'
// console.log(symbolOne === symbolTwo) // resultat : false  // deux symboles sont pas identiques
// // console.log(symbolTwo == symbolOne) // resultat : false
// 
// const symbolThree = Symbol('un blaze')
// const symbolFour = Symbol('un blaze')
// console.log(symbolThree === symbolFour) // pareil même s'ils ont le même nom, ce sera FALSE
// 
// // a quoi ça sert ? 
// // Les Symboles peuvent être utilisés comme des cles ou des noms de prorpiétés dans des objets
// 
// // prennons un exemple: on crée un objet 'fremen', on lui donne des attribus. Jusque là rien de choquant
// // si on rappelle l'attribut et qu'on le replace par autre chose, naturellement ça va se modifier dans l'objet en lui même
// // comme ici l'attribut 'sable' passant de true à false, alors qu'un fremen sans sable, est-ce vraiment un fremen ? 
// const fremen = {}
// fremen.age = 30;
// fremen['sable'] = true;
// console.log(fremen) // {age: 30, sable: true}
// fremen['sable'] = false;
// console.log(fremen) // {age: 30, sable: false}
// 
// fremen[symbolOne] = 'Leto II'
// fremen[symbolTwo] = 'Jaques'
// console.log(fremen) // {age: 30, sable: false, Symbol(): 'Leto II', Symbol(): 'Jaques'}
// les keys semblent UNIQUES mais elles sont définitivement les MÊMES
// franchement, c'est quand même super obscur, et la de suite, je ne vois pas trop dans quel cas l'utiliser ? MMMMhhhh


// ****************************************************************************************** \\
// *********************** MODERN WORKFLOW WITH BABEL && WEBPACK ****************************** \\
// ******************************************************************************************* \\


// ************************* BABEL  ************************ \\

//  https://babeljs.io/
// Babel est un truc de foufou, qui traduit automatiquement le Js moderne pour que les anciens browsers puissent le lire tranquiellement
// note : j'ai fait ça dans un dossier nommé "babel", normallement il doit être quelque part dans le repo.

// ETAPE 1

// pour l'installation on a fait les trucs suivants : 

// on a fait un npm init (comme langer le package.json)

// npm install @babel/core @babel/cli --save-dev // le CLI est pour qu'on puisse utiliser des commandes de babel dans l'interface (c'est donc ça le CLI ? =) )
// Command Line Interface 
// npm install @babel/preset-env --save-dev
// puis on a crée un fichier '.babelrc' pour lui indiquer quel truc il doit utiliser, en l'occrence preset-env écris comme ça :

// {
//     "presets": ["@babel/preset-env"]
// }

// après avoir mis ça en place, on peut écrire du Js tranquillement et ça va marcher dans tous les browser de la planète, sauf IE 11 parce que c'est grave de la demer. 

// ETAPE 2.
// après s'être crée un fichier en Js, on va dire à babel de le convertir, pour ça ya besoin que d'une linge : 
// 1 on indique le 'node_modules\.bin\babel' parce que c'est lui qui fera la conversion 
// 2 on indique le fichier qu'il doit check sa teub
// 3 le -o est la commande pour indiquer le fichier de sortie
// 4 after.js est le fichier de sortie. c'est un poil comme typescript du coup.
// node_modules\.bin\babel before.js -o after.js

// si dans le BEFORE.JS on avait ça : 
// const greet = (name) => {
//     console.log(`HELLOW ${name}`)
// }
// greet()
// 
// // dans le AFTER.JS on aura ça : 
// 
// "use strict";
// var greet = function greet(name) {
//     console.log("HELLOW ".concat(name));
// };
// greet();
// 

// on oublie pas : on fait un .gitignore pour virer les node_modules de notre repo.
// il est récuperable directement et facilement en tappant npm i 
// mais ça, on le sait déjà !
// pro tip : vous n'avez pas assez d'espace disque ? virez tous vos nodes_modules de vos dossiers de projets, vous allez gagner de quoi installer modern warfare.

// après qu'est ce qu'on va faire ? 

// on va crée un dossier ou ya les fichiers JavaScript moderne qu'on va vouloir convertir (SRC)
// un endroit ou il y aura le HTML (qu'on mettera dans un dossier DIST)
// et un endroit avec un dossier avec ce qu'on peut uiliser online (dans un dossier DIST, dedans on fait un sousdossier assets avec le bundle.js)
// le bundle.js sera la ou yora la traduction des fichiers JS pour tous les browsers (si j'ai bien pigé)
// du coup dans le HTML on va lier le script de bundle directement
// NOTE : on écira jamais directement de code dans le bundle.js 

// une fois que tout ça c'est fait, faut lancer le code suivant : 
//  node_modules\.bin\babel src/index.js -o dist/assets/bundle.js

// mais c'est ptet un peu long de le faire à chaque fois ? 
// du coup on peut faire un truc avec cette commande, parce que c'est du code
// et dans le code on aime bien pas trop se compliquer la vie, en écrivant 300 lignes de codes pour gagner 5 secondes non ? NON ?

// Alors methode 1 :
// on va dans le package.json et on rajoute ça : 
// "scripts": {
//     "babel": "node_modules/.bin/babel src/index.js -o dist/assets/bundle.js"
//   },
// du coup en faisant un npm run babel (ou peu importe comment on l'a appellé, ça lancera cette ligne de commande)

// Alors methode 2 :
// on peut rajouter un flag (le watch flag) qui permet de regarder le code quand il change. Et ça c'est le top du top non ? 
// ce qui au final rendrait ça : 
// ouais ya juste un petit -w devant le fichier que l'on check. 
//"scripts": {
//    "babel": "node_modules/.bin/babel src/index.js -w -o dist/assets/bundle.js"
// }
// du coup vous lancez une fois le script (npm run babel) puis la fonction watch se fera en permanence. Bon ya pas de log comme dans
// typescript ou dans SASS mais vous serez quand même pas mal loti, quand on voit le code en pur Js (rajoutant quand même deux trois lettres)

// ************************* BABEL  ************************ \\