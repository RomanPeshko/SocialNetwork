export const registerUser = (Birthday, City, FirstName, Name, password, email) => {
    return new Promise((res, rej) => {
        let usersList = window.localStorage.getItem('registredUsersList');
        console.log(usersList);
        if (!usersList) {
            usersList = [];
            console.log(usersList);
        }
        const userID = Math.floor(Math.random() * 10000);
        console.log(usersList);
        usersList.push({ Birthday, City, FirstName, Name, password, email, userID });
        
        window.localStorage.setItem('registredUsersList', usersList);
        res({ data: userID });
    })
};