import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingCard from "../../ui/meetingCard";
import Comments from "../../ui/comments";
import { CommentsProvider } from "../../../hooks/useComments";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";
const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId));
    if (user) {
        return (
            <>
                <div className="container">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <UserCard user={user} />
                            <QualitiesCard qualities={user.qualities} />
                            <MeetingCard
                                completedMeetings={user.completedMeetings}
                            />
                        </div>
                        <div className="col-md-8">
                            <CommentsProvider>
                                <Comments />
                            </CommentsProvider>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Loading</h1>
            </>
        );
    }
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
