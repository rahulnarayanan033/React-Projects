import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Comments } from './comments';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback  } from './forms';
import { Feedback } from './feedback';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            promotions : Promotions,
            comments : Comments,
            leaders : Leaders,
            feed : Feedback,
            ...createForms({
                feedback : InitialFeedback,
            })
        }),
        applyMiddleware(thunk , logger)
    );
    return store;
}