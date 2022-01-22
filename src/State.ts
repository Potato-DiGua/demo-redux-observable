import Immutable from 'seamless-immutable'


interface State {
    value: number;
}

export type StateType = Immutable.ImmutableObject<State>;

export const defaultState:StateType = Immutable<State>({
    value: 0,
})
