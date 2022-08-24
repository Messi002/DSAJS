const chatlist = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");


//add a new chat
newChatForm.addEventListener('submit', e => {
    const msg = newChatForm.message.value.trim();
    chatroom.addChats(msg)
     .then(() => newChatForm.reset() )
     .catch((err) => console.log(err));
})

//class instances
const chatUI= new ChatUI(chatlist);
const chatroom = new ChatRoom('general','Austin');

//get chats and render
chatroom.getChats(data => {
    chatUI.render(data);
})