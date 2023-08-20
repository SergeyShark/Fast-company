import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";

const professionsSlice = createSlice({
    name: "professions",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        professionsRequest: (state) => {
            state.isLoading = true;
        },
        professionsRceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.lastFetch = Date.now();
        },
        professionsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: professionsReducer } = professionsSlice;
const { professionsRequest, professionsRceved, professionsRequestFailed } =
    actions;

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
}

export const loadProfessions = () => async (dispatch, getState) => {
    const { lastFetch } = getState().qualities;

    if (isOutDated(lastFetch)) {
        dispatch(professionsRequest());
        try {
            const { content } = await professionService.get();
            dispatch(professionsRceved(content));
        } catch (error) {
            dispatch(professionsRequestFailed(error.message));
        }
    }
};

export const getProfessions = () => (state) => state.professions.entities;
export const getProfessionsLoadingStatus = () => (state) =>
    state.professions.isLoading;

export const getProfessionById = (professionId) => (state) => {
    if (state.professions.entities) {
        return state.professions.entities.find(
            (profession) => profession._id === professionId
        );
    }
};
export default professionsReducer;
