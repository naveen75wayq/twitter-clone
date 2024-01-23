import { ReactElement } from 'react';
import posts from '../css/posts.module.css'
import { Avatar } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
interface PostsProps {
    displayName: string;
    userName: string;
    verified: boolean;
    imageUrl: string;
    avatarUrl: string;
}
function Posts({
    displayName,
    userName,
    verified,
    imageUrl,
    avatarUrl

}: PostsProps): ReactElement {
    return (
        <div className={posts.container}>
            <div className={posts.post__avatar}>
                <Avatar src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />

            </div>
            <div className={posts.post__body}>
                <div className={posts.post__header}>
                    <div className={posts.post__headerText}>
                        <h3>Naveen Sadh{" "}
                            <span className={posts.post__headerSpecial}>
                                <VerifiedUser className={posts.post__badge} />
                            </span>
                        </h3>
                    </div>

                    <div className={posts.post__headerDescription}>
                        <p>This is a twitter clone</p>
                    </div>
                    <img
                        src="https://i.pinimg.com/originals/53/c6/d5/53c6d53c0a420d130ea23d645533c934.gif"
                        style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}
export default Posts;