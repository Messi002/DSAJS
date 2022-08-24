//adding new chat documents
//setting up a real time listener to get new chats
//updating the username
//updating the room


class ChatRoom{
    constructor(room, username){
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
    }
    addChats = async (message) => {
        const now = new Date();

        chat = {
            message,
            username : this.username,
            room: this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now)
        }
        const res = await this.chats.add('chat')
    }
}