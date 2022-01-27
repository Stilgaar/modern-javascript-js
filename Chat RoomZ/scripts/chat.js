// qu'est ce qu'on doit faire ? 

// 1  rajouter des nouveau documents de chats DONE

// 2 un real time lisener pour avoir les nouveaux chats DONE

// 3 mise à jour de l'user DONE

// 4 mettre à jour le salon 

class Chatroom {

    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
        this.unsub; // alors la petit tricks pour crée une valeur. C'est pour faire un unsub de la fonction getchats.
        // Pour que l'event listener permanent puisse être coupé. 
    }

    async addChat(message) {

        // il faut un new Date() pour le timestamp
        const now = new Date()

        // on va fomater un objet de chat
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        // maintenant il faut sauvgarder ça dans le chat
        const res = await this.chats.add(chat) // le this.chats équivaut plus haut déjà a db.collection('chats'), ce qui est cool non ? 
        return res // on demande un retours parce que c'est mieux pour pouvoir enchainer des methodes. (et on pourra éventuellement faire autre chose avec plus tard)
    }

    // complex queries ! (alors ça range par 'room' avec le where. et ça range par created_at pour la date de publication)
    // notez que le created_at ne vas pas fonctionner directement. Yora une erreur dans la console avec firebase. Il suffira de suivre un lien que l'erreur nous donne, cliquer sur un truc et le tour est joué.
    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot =>
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        callback(change.doc.data())
                    }
                })
            )
    }

    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username)
    }

    updateRoom(room) {
        this.room = room;
        if (this.unsub) { // du coup quand on unsub en changeant de room, on unsub que de celle qu'on vient de quitter, et pas celle sur laquelle on va !
            this.unsub()
        }

    }
}