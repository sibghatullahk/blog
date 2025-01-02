// src/components/CommentOptionsMenu.tsx
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

interface CommentOptionsMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onCancel: () => void;
}

const CommentOptionsMenu: React.FC<CommentOptionsMenuProps> = ({
  onEdit,
  onDelete,
  onCancel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu immediately after an option is selected
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="More options"
      >
        <HiDotsVertical size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li>
              <button
                onClick={() => { onEdit(); closeMenu(); }} // Close the menu after selecting an option
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                aria-label="Edit"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => { onDelete(); closeMenu(); }} // Close the menu after selecting an option
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                aria-label="Delete"
              >
                Delete
              </button>
            </li>
            <li>
              <button
                onClick={() => { onCancel(); closeMenu(); }} // Close the menu after selecting an option
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                aria-label="Cancel"
              >
                Cancel
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentOptionsMenu;
