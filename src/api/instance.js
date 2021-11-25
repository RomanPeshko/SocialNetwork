export const registerUser = (Birthday, userCity, userFirstName, userName, password, email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));

        if (!usersList) {
            usersList = [];
        }
        const userID = Math.floor(Math.random() * 10000);
        const Name = userName[0].toUpperCase() + userName.slice(1);
        const FirstName = userFirstName[0].toUpperCase() + userFirstName.slice(1);
        const City = userCity[0].toUpperCase() + userCity.slice(1);
        usersList.push({ Birthday, City, FirstName, Name, password, email, Friends: [], record: [], messages: [], userID });
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
        const listPersonFilterOut = usersList.filter(user => {
            if (searchString === '') {
                return ''
            }
            return (user.Name.toLowerCase().includes(searchString.toLowerCase()) || user.FirstName.toLowerCase().includes(searchString.toLowerCase()));
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
        const indexUser = user.Friends.indexOf(friendUser)
        user.Friends.splice(indexUser, 1);
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

export const addMyLikeUserServer = (userID, index, myID) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = usersList.find(user => user.userID === Number(userID));
        user.record[index].userLike.push(String(myID));
        user.record[index].like = user.record[index].userLike.length;
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res(user);
    })
};

export const deleteMyLikeUserServer = (userID, index, myID) => {
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

