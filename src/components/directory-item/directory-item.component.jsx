import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {

    const {imageUrl, title} = category;

    return (
        <div className="directory-item-container">
        {/* What I want you to know is that when you are trying to append, let's say, some additional CSS that's dynamic, you can actually do that in React by passing it as a 'style' object. So on any different component in your JSX, you can actually append custom styles by giving it this 'style' field. This style, if you'll takes an object where the key is the CSS property that you want to modify. So in our particular case, I want backgroundImage. So with background image, the value that we need to pass it is going to be a string of URL and in the brackets is the actual URL string value. So here I'm going to use object structuring. So I want to use the back ticks. And with the object structuring I'm going to pass in image URL. If you're unfamiliar with de structuring, all this is really doing is it's just allowing us to use a string variable inside of another string. And this essentially what will happen is that we will apply a custom style onto this specific HTML element.*/}  
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} 
            />
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;