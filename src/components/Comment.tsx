import { useState } from "react";

interface CommentProps {
  comment: string;
  user: string;
  onReply: (comment: string, parentId: string) => void;
  onEdit: (commentId: string, newComment: string) => void;
  onDelete: (commentId: string) => void;
  onLike: (commentId: string) => void;
  commentId: string;
  likes: number;
  replies: React.ReactNode[];
}

const Comment: React.FC<CommentProps> = ({
  comment,
  user,
  onReply,
  onEdit,
  onDelete,
  onLike,
  commentId,
  likes,
  replies,
}) => {
  const [showMenu, setShowMenu] = useState(false); // To toggle the menu visibility
  const [isEditing, setIsEditing] = useState(false); // To toggle the edit mode
  const [editedComment, setEditedComment] = useState(comment); // To store the edited comment

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedComment(e.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(commentId, editedComment);
    setIsEditing(false);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleDelete = () => {
    onDelete(commentId);
    setShowMenu(false); // Close menu after delete
  };

  const handleCancel = () => {
    setShowMenu(false); // Close menu without action
  };

  return (
    <div className="comment p-4 mb-4 bg-gray-100 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-semibold mr-2">{user}</span>
          <span>{comment}</span>
        </div>

        {/* Menu (three dots) */}
        <div className="relative">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 18M6 12L18 12M6 6L18 6"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Delete
              </button>
              <button
                onClick={handleCancel}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit mode */}
      {isEditing && (
        <div className="mt-4">
          <input
            type="text"
            value={editedComment}
            onChange={handleEditChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleEditSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Likes */}
      <div className="mt-2 flex items-center">
        <button
          onClick={() => onLike(commentId)}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7M12 3v12"
            />
          </svg>
        </button>
        <span className="ml-2">{likes}</span>
      </div>

      {/* Replies */}
      {replies && <div className="mt-4 ml-4">{replies}</div>}
    </div>
  );
};

export default Comment;
