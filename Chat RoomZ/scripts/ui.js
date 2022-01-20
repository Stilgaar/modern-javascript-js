// qu'est ce qu'on fait ici ? 

// on montre quels chats doivent apparaitre dans le DOM
// Enlève ceux qu'il ne faut pas montrer. (quand le chatroom change)

class ChatUi {

    constructor(list) {
        this.list = list;
    }
    // juste pour vider ce qu'il y a l'interieure de la chatllist
    clear() {
        this.list.innerHTML = "";
    }

    render(data) {
        // alors dateFns on l'avait vu avant, c'est un script (qu'on choppe d'un site) qui permet de faire pleins 
        // pleins pleins de trucs trop interessants avec la date. La en l'occurence on va lui faire dire des 
        // timestamps en toute lettres. Genre "ya quelques instants", "ya trois jours", "après demain etc"
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(), // la on prends le created at de la data et on le remet en toDate()
            { addSuffix: true } // une option pour lui faire mettre un "ago"
        )
        // obviously c'est ici qu'on écris nos messages ^^'
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
        </li>        
        `
        this.list.innerHTML += html;
    }
} 