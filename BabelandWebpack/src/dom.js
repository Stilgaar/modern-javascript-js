console.log('DOM.JS')

const body = document.querySelector('body')

export const styleBody = () => {
    body.style.background = 'peachpuff';
}

export const addTitle = (text) => {
    const title = document.createElement('h1')
    title.textContent = text
    body.appendChild(title)
}

export const contact = 'jeffrey@apportemoidesglaçons.fremen'

// styleBody()
// addTitle("SALUT LES GENS BIENVENUE DANS JACKASS ")