import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
        {/* So we know that inside of our categories container, we're going to map over the categories. So remember, wrap it in your squiggly brackets, then say categories map and you're going to pass at a function where you get the category.  */}
        {/*destructure off title, id, imageUrl*/}  
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category}  />
          ))}
        </div>
    )
}

export default Directory