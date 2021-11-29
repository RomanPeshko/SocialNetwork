export const messageSave = (message, userId, senderID, senderName, senderFirstName) => {
    return new Promise((res, rej) => {
        let messagesList = JSON.parse(window.localStorage.getItem('messagesList'));

        if (!messagesList) {
            messagesList = [];
        }

        const userHasMessagesData = messagesList.find(user => user.userID === userId);

        const date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

        if (userHasMessagesData) {
            const userHasMessages = userHasMessagesData.data.find(user => user.senderID === senderID);
            if (userHasMessages) {
                userHasMessages.messages.unshift({ status: 'unread', message: message, date: date });
            } else {
                userHasMessagesData.data.unshift({ messages: [], senderID: senderID, senderName: senderName, senderFirstName: senderFirstName });
                const userHasMessages = userHasMessagesData.data.find(user => user.senderID === senderID);
                userHasMessages.messages.unshift({ status: 'unread', message: message, date: date });
            }

        } else {
            messagesList.push(
                {
                    userID: Number(userId),
                    data: [],
                })
            const userHasMessages = messagesList.find(user => user.userID === userId);

            userHasMessages.data.unshift({ messages: [], senderID: senderID, senderName: senderName, senderFirstName: senderFirstName });
            const findSenderId = userHasMessages.data.find(user => user.senderID === senderID);
            findSenderId.messages.unshift({ status: 'unread', message: message, date: date });

        }


        window.localStorage.setItem('messagesList', JSON.stringify(messagesList));
        res(messagesList);
    })
};


export const searchForMyMessage = (userID) => {
    return new Promise((res, rej) => {
        let messagesList = JSON.parse(window.localStorage.getItem('messagesList'));

        if (!messagesList) {
            messagesList = [];
        }
        const myMessages = messagesList.find(user => user.userID === userID);


        window.localStorage.setItem('messagesList', JSON.stringify(messagesList));
        res(myMessages);
    })
};

export const changeToReadStatus = (myID, userID) => {
    return new Promise((res, rej) => {
        let messagesList = JSON.parse(window.localStorage.getItem('messagesList'));

        if (!messagesList) {
            messagesList = [];
        }
        const myMessages = messagesList.find(user => user.userID === myID);
        const myMessageFromUser = myMessages.data.find(user => user.senderID === userID);
        for (const element of myMessageFromUser.messages) {
            element.status = 'read';

        }
        // for(const message of myMessageFromUser.data) {
        //     console.log(message)
        // }
        window.localStorage.setItem('messagesList', JSON.stringify(messagesList));
        res(myMessageFromUser);
    })
};