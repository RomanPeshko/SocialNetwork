export const ROUTE = {
    ACCOUNT: "/Account/:userID",
    PROFILE: "/Account/:userID/PROFILE",
    FRIENDS: "/Account/:userID/FRIENDS",
    MESSAGES: "/Account/:userID/MESSAGES",
    MUSIC: "/Account/:userID/MUSIC",
    NEWS: "/Account/:userID/NEWS",
    REGISTRATION: "/REGISTRATION",
};



export const PATHS = {
    ACCOUNT: id => `/Account/${id}`,
    PROFILE: id => `/Account/${id}/PROFILE`,
    FRIENDS: id => `/Account/${id}/FRIENDS`,
    MESSAGES: id => `/Account/${id}/MESSAGES`,
    MUSIC: id => `/Account/${id}/MUSIC`,
    NEWS: id => `/Account/${id}/NEWS`,
}