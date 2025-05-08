const getStoredReadList = () =>{
    const storedListStrng = localStorage.getItem('read-list');
    if(storedListStrng){
        const storedList = JSON.parse(storedListStrng);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList =(id) =>{
    const storedList = getStoredReadList();

    if(storedList.includes(id)){
        alert("Already exists in the read list")
    }

    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
        alert("This book is marked as Read")
    }
}

export {addToStoredReadList,getStoredReadList}