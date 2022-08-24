const chatlist = document.querySelector(".chat-list");


//class instances
const chatroom = new ChatRoom('general','Austin');

//get chats and render
chatroom.getChats(data => {
    console.log(data);
})