// src/components/CommentSection.tsx
import React, { useState } from "react";
import CommentOptionsMenu from "./CommentOptionsMenu";

interface Comment {
  id: string;
  comment: string;
  user: string;
  replies: Comment[];
  likes: number;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: "1", comment: "This is a comment", user: "User1", replies: [], likes: 10 },
    { id: "2", comment: "Another comment", user: "User2", replies: [], likes: 5 },
    { id: "3", comment: "This is a third comment", user: "User3", replies: [], likes: 2 },
  ]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editedComment, setEditedComment] = useState("");
  const [originalComment, setOriginalComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now().toString(),
        comment: newComment,
        user: "CurrentUser",
        replies: [],
        likes: 0,
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleEdit = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setOriginalComment(commentToEdit.comment);
      setEditedComment(commentToEdit.comment);
    }
  };

  const handleSaveEdit = (commentId: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, comment: editedComment } : comment
      )
    );
    setEditingCommentId(null);
    setEditedComment("");
    setOriginalComment("");
  };

  const handleCancelEdit = () => {
    setEditedComment(originalComment);
    setEditingCommentId(null);
    setOriginalComment("");
  };

  const handleDelete = (commentId: string) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const handleLike = (commentId: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return (
    <div className="comment-section">
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Comment
        </button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment mb-4 p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{comment.user}</span>
              <CommentOptionsMenu
                onEdit={() => handleEdit(comment.id)}
                onDelete={() => handleDelete(comment.id)}
                onCancel={handleCancelEdit}
              />
            </div>
            {editingCommentId === comment.id ? (
              <div className="mt-2">
                <textarea
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={4}
                />
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleSaveEdit(comment.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-2">{comment.comment}</p>
            )}
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleLike(comment.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                Like
              </button>
              <span className="ml-2">{comment.likes} Likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
