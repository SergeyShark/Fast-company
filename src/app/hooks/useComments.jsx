import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import commentService from "../services/comment.service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../store/users";

const CommentContext = React.createContext();

export const useComments = () => {
    return useContext(CommentContext);
};

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const { userId } = useParams();
    const currentUserId = useSelector(getCurrentUserId());
    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComments();
    }, [userId]);
    async function createComment(data) {
        const comment = {
            ...data,
            _id: nanoid(),
            pageId: userId,
            created_at: Date.now(),
            userId: currentUserId
        };
        try {
            const { content } = await commentService.createComment(comment);
            setComments((prevState) => [...prevState, content]);
        } catch (error) {
            errorCather(error);
        }
    }
    async function getComments() {
        try {
            const { content } = await commentService.getComment(userId);
            setComments(content);
        } catch (error) {
            errorCather(error);
        } finally {
            setIsLoading(false);
        }
    }
    async function removeComment(id) {
        try {
            const { content } = await commentService.removeComent(id);
            if (content === null) {
                setComments((prevState) =>
                    prevState.filter((comment) => comment._id !== id)
                );
            }
            // setComments(content);
        } catch (error) {
            errorCather(error);
        }
    }

    function errorCather(error) {
        const { message } = error.response.data;
        setError(message);
        setIsLoading(false);
    }
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    return (
        <CommentContext.Provider
            value={{ comments, isLoading, createComment, removeComment }}
        >
            {children}
        </CommentContext.Provider>
    );
};
CommentsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
