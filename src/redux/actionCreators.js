import * as ActionTypes from './actionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl.js';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//DISHES

//This function is a thunk as here inner function is used
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    //setTimeout is a function which is used to create some delay before our function gets dispached
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);

    return fetch(baseUrl + 'dishes')
        .then(response => response.json()) //Here the call back function will convert the data into json format and pass to dishes ni next then below this
        .then(dishes => dispatch(addDishes(dishes)));    
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

//COMMENTS

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//PROMOTIONS

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});