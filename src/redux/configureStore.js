import {createStore, combineReducers} from 'redux';
import {DISHES} from './dishes';
import {COMMENTS} from './comments';
import {PROMOTIONS} from './promotions';
import {LEADERS} from './leaders';
import { ProvidePlugin } from 'webpack';

export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
           dishes: DISHES,
           comments: COMMENTS,
           promotions: PROMOTIONS,
           leaders: LEADERS,
       })
    );

    return store;
}