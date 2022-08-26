const chatlist = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMsg= document.querySelector(".update-msg");
const rooms= document.querySelector(".chat-rooms");


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

//update the rooms
rooms.addEventListener('submit', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat) );
    }
})

//check localstorage for a name
const username = localStorage.username ? localStorage.username : 'Anon';

//class instances
const chatUI= new ChatUI(chatlist);
const chatroom = new ChatRoom('general',username);

//get chats and render
chatroom.getChats(data => {
    chatUI.render(data);
})