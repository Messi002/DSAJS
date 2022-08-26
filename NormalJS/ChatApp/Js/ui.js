//render chat templates to the DOM
//clear the list of chats(when the room changes)

class ChatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const html = `
        <li class='list-group-item'>
        <span>${data.username}</span>
        <span>${data.message}</span>
        <span>${data.created_at.toDate()}</span>
        </li> 

        `;

        this.list.innerHTML += html;
    }
}