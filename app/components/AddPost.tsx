'use client';

import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  // Create a post
  const { mutate } = useMutation(async (title) => {
    await axios.post('/pages/api/posts/addPost', { title });
  });

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form
      onSubmit={submitPost}
      className="bg-white my-8 p-8 rounded-md"
    >
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="px-4 py-2 text-lg rounded-md my-2 bg-gray-200"
        />
        {/* <textarea
          onChange={handlePostChange}
          name="content"
          value={title.content}
          placeholder="Tell me something more"
          className="p-4 text-md rounded-md my-2 bg-gray-200"
        /> */}
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? 'text-red-600' : 'text-gray-500'
          }`}
        >{`${title.length}/300`}</p>
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
