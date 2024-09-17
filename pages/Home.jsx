import React, { useEffect, useState } from 'react'
import appwriteService from '../src/appwrite/config'
import { Postcard, Container } from '../src/components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.listPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  if (posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <div className='flex flex-wrap'>
           {posts.map((post)=>(
            <div key={post.$id} className='p-2 w-1/4'>
              <Postcard {...post}/>
            </div>
           ))}

          </div>
        </Container>

      </div>
    )
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className=' flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <Postcard  {...post} />
            </div>
          ))
          }

        </div>
      </Container>
    </div>
  )
}

export default Home