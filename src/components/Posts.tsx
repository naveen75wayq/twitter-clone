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
            <div className={posts.post_avatar}>
                <Avatar src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />

            </div>
            <div className={posts.post_body}>
                <div className={posts.post_header}>
                    <div className={posts.post_headerText}>
                        <h3>naveen_sadh{" "}<span>
                            <VerifiedUser className={posts.post_badge} />
                        </span></h3>
                    </div>

                    <div className={posts.header_discription}>
                        <p>This is a twitter clone</p>
                    </div>
                    <img src="https://giphy.com/embed/l2YWpU1UPtpLJ7hOE" alt='' />
                </div>
            </div>
        </div>
    )
}
export default Posts;