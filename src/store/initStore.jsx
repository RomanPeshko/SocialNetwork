import { applyMiddleware, createStore } from 'redux';
import { USER_ACTIONS } from './selectors/actionType';
import { composeWithDevTools } from 'redux-devtools-extension';

const newUser = [
    {
        name: "Роман",
        firstName: "Пешко",
        city: "Минск",
        birthday: "9 ноября",
        userId: 12345,
    },
    {
        name: "Вася",
        firstName: "Кольт",
        city: "Гродно",
        birthday: "21 февраля",
        userId: 12,
    },
];

const initialState = {user: newUser};

const rootReduser = (state, action) => {
    let newUser = [];
    switch (action.type) {
        case (USER_ACTIONS.newUser):
            newUser = [...state.user];
            newUser.push(
                {
                    email: action.payload.email,
                    password: action.payload.password,
                    name: action.payload.name,
                    firstName: action.payload.firstName,
                    city: action.payload.city,
                    birthday: action.payload.birthday,
                }
            );
            return { ...state, user: newUser };

        default: return {...state}
    }
}

const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(
    rootReduser, 
    initialState,
    composedEnhancers
);