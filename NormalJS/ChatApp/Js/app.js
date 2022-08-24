const chatlist = document.querySelector(".chat-list");


//class instances
const chatUI= new ChatUI(chatlist);
const chatroom = new ChatRoom('general','Austin');

//get chats and render
chatroom.getChats(data => {
    chatUI.render(data);
})