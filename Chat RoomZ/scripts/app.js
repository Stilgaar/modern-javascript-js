//app.js va être le script gérant l'application en général. Il fera appel à chat.js qui fait fonctionner les chats
// et ui.js qui fera fonctionner l'interface

// ce qu'on récup dans le dom
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name')
const updateMsg = document.querySelector('.update-msg')
const room = document.querySelector('.chat-rooms')

// rajouter un message 
newChatForm.addEventListener('submit', e => { // SUBMIT PAS SUMBIT !!!  >.<
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))
})

// update le nom
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // ici on le fait via le chatroom
    const newName = newNameForm.name.value.trim()
    chatroom.updateName(newName)
    newNameForm.reset()
    // montrer le message de changement de pseudo, puis le virer après quelques secondes
    updateMsg.innerText = `Ton nom est maintenant ${newName}`
    setTimeout(() => updateMsg.innerText = "", 2500) // notification
})

// pour changer les chatrooms : 
room.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUi.clear()
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(chat => chatUi.render(chat))
    }
})

// check le local storage s'il y a déjà un nom ou pas ? S'il y en a pas, il s'appellera Anon, un ternaire de base
const username = localStorage.username ? localStorage.username : 'Anonymous';

// crée l'instance de la classe
const chatUi = new ChatUi(chatList)
const chatroom = new Chatroom('general', username)

// chopper les datas en fonction de la 'room'
chatroom.getChats(data => chatUi.render(data))