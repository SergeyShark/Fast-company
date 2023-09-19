import React, { useState, useEffect, useContext } from "react";
import qualityService from "../services/quality.service";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const QualitiesContext = React.createContext();
export const useQuality = () => {
    return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.fetchAll();
                setQualities(content);
                setIsLoading(false);
            } catch (error) {
                errorCather(error);
            }
        };
        getQualities();
    }, []);
    const getQuality = (id) => {
        return qualities.find((qual) => qual._id === id);
    };
    function errorCather(error) {
        const { message } = error.response.data;
        setError(message);
    }
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    return (
        <QualitiesContext.Provider value={{ isLoading, qualities, getQuality }}>
            {children}
        </QualitiesContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
