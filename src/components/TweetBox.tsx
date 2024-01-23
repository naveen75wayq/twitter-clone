import { Avatar, Button } from '@mui/material';
import tweetbox from '../css/tweetbox.module.css'
function TweetBox() {
    return (
        <div className={tweetbox.container}>
            <form>
                <div className={tweetbox.tweetbox_input}>
                    <Avatar src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Kurt&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />

                    <input placeholder="what's happening?"
                        type='text'
                    />
                  

                </div>
                {/* <input
                    className={tweetbox.tweetbox_image_input}
                    placeholder="Optional: Enter image URL"
                    type="text"
                /> */}
                <Button className={tweetbox.tweetbox_button} fullWidth={true}>Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox;