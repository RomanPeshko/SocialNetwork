export const registerUser = (Birthday, City, FirstName, Name, password, email, userID) => {
    return new Promise((res, rej) => {
        let usersList = window.localStorage.getItem('registredUsersList');
    
        if (!usersList) {
            usersList = [];
        }
        
        
        usersList.push({ Birthday, City, FirstName, Name, password, email, userID });
        console.log(usersList);
        window.localStorage.setItem('registredUsersList', usersList);
        res({ data: usersList});
    })
};