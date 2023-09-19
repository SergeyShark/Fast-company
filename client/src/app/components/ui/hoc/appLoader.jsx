import { useEffect } from "react";
import PropTypes from "prop-types";
import {
    getUsersLoadingStatus,
    getisLoggedIn,
    loadUsersList
} from "../../../store/users";
import { useDispatch, useSelector } from "react-redux";
import { loadQualitiesList } from "../../../store/qualities";
import { loadProfessions } from "../../../store/profession";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getisLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    console.log(usersStatusLoading);
    useEffect(() => {
        dispatch(loadQualitiesList());
        dispatch(loadProfessions());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    // if (usersStatusLoading) return "loading";

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
