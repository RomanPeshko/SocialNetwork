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
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const recording = { text: textRecord, like: 0, userLike: [] };
        const user = usersList.find(user => user.userID === Number(userID));
        user.record.unshift(recording);
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(recording);
    })
};

export const removeRecordingWall = (index, userID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        user.record.splice(index, 1);
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const addLikePostServer = (userID, index) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        user.record[index].userLike.push(userID);
        user.record[index].like = user.record[index].userLike.length;
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const deleteLikePostServer = (userID, index) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        const removeRecording = user.record[index].userLike.indexOf(userID);
        user.record[index].userLike.splice(removeRecording, 1);
        user.record[index].like = user.record[index].userLike.length;
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const addMyLikeFriendServer = (userID, index, myID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        user.record[index].userLike.push(String(myID));
        user.record[index].like = user.record[index].userLike.length;
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const deleteMyLikeFriendServer = (userID, index, myID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        const removeRecording = user.record[index].userLike.indexOf(myID);
        user.record[index].userLike.splice(removeRecording, 1);
        user.record[index].like = user.record[index].userLike.length;
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const findUserLikePostServer = (userID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        res(user.record);
    })
};

