'use client'

import AddPost from './components/AddPost'
import QueryWrapper from './auth/QueryWrapper';

export default function Home() {
  return (
    <main>
      <QueryWrapper>
        <h1>Hello Nextjs</h1>
        <AddPost />
      </QueryWrapper>
    </main>
  );
}
