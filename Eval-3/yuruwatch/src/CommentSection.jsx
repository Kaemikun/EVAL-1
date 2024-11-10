
import React, { useState, useEffect } from 'react';
import Header from './Header';
import VideoSection from './VideoSection';
import TitleSection from './TitleSection';
import EpisodeList from './EpisodeList';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 








const CommentSection = () => {
    const [comments, setComments] = useState([
        { author: 'User1', text: "Don't mess with Shuna please 🤣🤣", time: '5 minutes ago' },
        { author: 'User2', text: 'Y milim is so cute', time: '10 minutes ago' }
    ]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setComments([...comments, { author: "Ansh (●'◡'●)", text: newComment, time }]);
            setNewComment('');
        }
    };

    return (
        <div className="comment-section">
            <h2>Comments</h2>
            <div className="comment-form">
                <textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button type="button" onClick={handleCommentSubmit}>Submit</button>
            </div>
            <div className="comment-list">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p><span className="comment-author">{comment.author}:</span> {comment.text}</p>
                        <p className="comment-time">{comment.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;