const chatlist = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMsg= document.querySelector(".update-msg");


//add a new name
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    //show then hide update message
    updateMsg.innerText = `Your name was updated to ${newName}`;

    setTimeout(()=> updateMsg.innerText = "",3000)

})


//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
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