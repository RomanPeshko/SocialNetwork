export const registerUser = (Birthday, City, FirstName, Name, password, email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));

        if (!usersList) {
            usersList = [];
        }
        const userID = Math.floor(Math.random() * 10000);

        usersList.push({ Birthday, City, FirstName, Name, password, email, userID });
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res({ data: userID });
    })
};

export const loginedUser = (email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const userFind = usersList.find(user => user.email === email);
        res(userFind);
    })
};

export const findFriend = (id) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        console.log(usersList)
        res(usersList);
    })
};

export const userProfile = (id) => {
    return new Promise((res, rej) => {
        let useProfile = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const user = useProfile.find(user => user.userID === Number(id.userID));
        res(user);
    })
};