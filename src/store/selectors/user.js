export const userSelector = store => {
    return (store.userReducer.user);
};

export const friendSelector = store => {
    return (store.friendReducer.friend);
};

export const recordWallReducer = store => {
    return (store.recordWallReducer.record);
};