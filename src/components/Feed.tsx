import feed from '../css/feed.module.css'
import TweetBox from './TweetBox'
import Posts from './Posts'
function Feed() {
    return (
        <div className={feed.container}>

            {/* header */}
            <div className={feed.feed_header}>
                    <h1>Home</h1>
            </div>
            

            <TweetBox/>

            
            <Posts displayName={''} userName={''} verified={false} imageUrl={''} avatarUrl={''}/>
            
        </div>
    )
}
export default Feed