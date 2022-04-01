import { state } from "@angular/animations";
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const increase = createAction('[COUNTER] increase');

export const decrease = createAction('[COUNTER] decrease');

export const clear = createAction('[COUNTER] clear');

export const changeUpdatedAt = createAction('[COUNTER]change updated at',
props<{updatedAt: number}>()
);


export interface CounterState {
    count: number;
    updatedAt?; number;
}

export const initalState: CounterState = {
    count: 0,
    number: undefined
}

export const counterReducer = createReducer(
    initalState,
    on(increase, state => ({
        ...state,
        count: state.count +1
    })),
    on(decrease, state => ({
        ...state,
        count: state.count -1
    })),
    on(clear, state => ({
        ...state,
        count: state.count = 0
    })),
    on(changeUpdatedAt, (state, action) => ({
        ...state,
        updatedAt: action.updatedAt
    }))
)

export const featureSelector 
    = createFeatureSelector<CounterState>('counter')

export const counterSelector = createSelector(
    featureSelector,
    state => state.count
)

export const updatedAtSelector = createSelector(
    featureSelector, 
    state => state.updatedAt
)