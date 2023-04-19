'use client';

import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Post {
  title: string;
  content: string;
}

export default function CreatePost() {
  const [post, setPost] = useState<Post>({ title: '', content: '' });
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

  // Create a post
  const { mutate } = useMutation(
    async (post: Post) => await axios.post('/api/posts/addPost', { post }) // TODO: error
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(post); // TODO: error
  };

  return (
    <form
      onSubmit={submitPost}
      className="bg-white my-8 p-8 rounded-md"
    >
      <div className="flex flex-col my-4">
        <input
          onChange={handlePostChange}
          name="title"
          value={post.title}
          placeholder="What's on your mind?"
          className="px-4 py-2 text-lg rounded-md my-2 bg-gray-200"
        />
        <textarea
          onChange={handlePostChange}
          name="content"
          value={post.content}
          placeholder="Tell me something more"
          className="p-4 text-md rounded-md my-2 bg-gray-200"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            post.content.length > 300 ? 'text-red-600' : 'text-gray-500'
          }`}
        >{`${post.content.length}/300`}</p>
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
