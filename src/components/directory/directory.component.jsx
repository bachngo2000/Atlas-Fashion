import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20.jpg",
    "route": 'shop/hats'
  },
  {
    "id": 2,
    "title": "Coats & Jackets",
    "imageUrl": "https://suitaddict.com/wp-content/uploads/2018/01/E1E82A31-6B9A-4062-9FDC-21D692AA1A04.jpeg",
    "route": 'shop/jackets'
  },
  {
    "id": 3,
    "title": "Shoes",
    "imageUrl": "https://m.media-amazon.com/images/G/01/2022/mens-shoes/MENS-FALL-BOOTS-NEW-ARRIVALS-OCTOBER-HERO-1440x700.jpg",
    "route": 'shop/sneakers'

  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://thestateofwomen.com/wp-content/uploads/2016/03/women-shopping.jpg",
    "route": 'shop/womens'

  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://www.dmarge.com/wp-content/uploads/2020/12/mens-clothing-sale-feature.jpg",
    "route": 'shop/mens'

  },
];

const Directory = () => {
  
    return (
        <div className="directory-container">
        {/* So we know that inside of our categories container, we're going to map over the categories. So remember, wrap it in your squiggly brackets, then say categories map and you're going to pass at a function where you get the category.  */}
        {/*destructure off title, id, imageUrl*/}  
          {categories.map((category) => (
            <DirectoryItem key={category.id} category={category}  />
          ))}
        </div>
    )
}

export default Directory