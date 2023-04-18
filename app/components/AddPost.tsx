'use client';

import { useState } from 'react';

export default function CreatePost() {
  const [post, setPost] = useState({ title: '', content: '' });
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePostChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={handlePostChange}
          name="title"
          value={post.title}
          placeholder="What's on your mind?"
          className="px-4 py-2 text-lg rounded-md my-2 bg-gray-200 h-12"
        />
        <textarea
          onChange={handlePostChange}
          name="content"
          value={post.content}
          placeholder="Tell me something more"
          className="p-4 text-md rounded-md my-2 bg-gray-200"
        />
      </div>
      <div>
        <p></p>
        <button
          disabled={isDisabled}
          className=" text-sm bg-teal-600 text-white py-2 px-5 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create a post
        </button>
      </div>
    </form>
  );
}
