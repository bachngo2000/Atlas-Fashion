import './categories.styles.scss';

const App = () => {

  //So instead of hardcoding out these 4 other div sections, we're going to initialize some variable array. And this is going to be an array that contains objects that reflect what it is that we have in here.
  //array of json objects
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
];

  return (
    <div className="categories-container">
      {/* So we know that inside of our categories container, we're going to map over the categories. So remember, wrap it in your squiggly brackets, then say categories map and you're going to pass at a function where you get the category.  */}
      {/*destructure off title, id, imageUrl*/}  
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}  />
        ))}
    </div>
  );
};

export default App;
