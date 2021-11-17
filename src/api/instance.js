export const registerUser = (Birthday, City, FirstName, Name, password, email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));

        if (!usersList) {
            usersList = [];
        }
        const userID = Math.floor(Math.random() * 10000);

        usersList.push({ Birthday, City, FirstName, Name, password, email, Friends: [], record: [], userID });
        const user = usersList.find(user => user.userID === userID);
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const loginedUser = (email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const userFind = usersList.find(user => user.email === email);
        res(userFind);
    })
};

export const listUser = (searchString) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const listPersonFilterOut = usersList.filter(friend => {
            if (searchString === '') {
                return ''
            }
            return (friend.Name.toLowerCase().includes(searchString.toLowerCase()) || friend.FirstName.toLowerCase().includes(searchString.toLowerCase()));
        })
        res(listPersonFilterOut);
    })
};

export const userProfile = (id) => {
    return new Promise((res, rej) => {
        let useProfile = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = useProfile.find(user => user.userID === Number(id.userID));
        res(user);
    })
};

export const friendSave = (myID, friendID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(myID));
        const friendUser = usersList.find(user => user.userID === Number(friendID));
        user.Friends.push(friendUser);
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const removeFriend = (myID, friendID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(myID));
        const friendUser = user.Friends.find(user => user.userID === Number(friendID));
        user.Friends.splice(friendUser, 1);
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(friendUser);
    })
};

export const recordingSave = (textRecord, userID) => {
    return new Promise((res, rej) => {
        console.log(textRecord, userID)
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        user.record.unshift(textRecord);
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};