import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    loadProfessions,
    getProfessionsLoadingStatus,
    getProfessionById
} from "../../store/profession";
const Profession = ({ id }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(getProfessionsLoadingStatus());
    const prof = useSelector(getProfessionById(id));

    useEffect(() => {
        dispatch(loadProfessions());
    }, []);

    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else {
        return "Loading...";
    }
};

Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
