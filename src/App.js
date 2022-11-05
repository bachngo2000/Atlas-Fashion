import './categories.styles.scss';

const App = () => {

  //So instead of hardcoding out these 4 other div sections, we're going to initialize some variable array. And this is going to be an array that contains objects that reflect what it is that we have in here.
  const categories = [
    {
      id: 1,
      title: 'Hats',
      //Every single one of our different categories is also going to say Shop now. So technically, you don't actually need to pass this. This value can actually be hardcoded. So you actually don't even need a subtitle because you know that shop now is going to be present in every single one of your categories. So that's a good way to determine what values you need in your object versus which ones you don't. I'm also going to initialize an ID just so that it's more clear.
      /*subtitle: ''*/
    },

    {
      id: 2,
      title: 'Coats & Jackets',
      //Every single one of our different categories is also going to say Shop now. So technically, you don't actually need to pass this. This value can actually be hardcoded. So you actually don't even need a subtitle because you know that shop now is going to be present in every single one of your categories. So that's a good way to determine what values you need in your object versus which ones you don't. I'm also going to initialize an ID just so that it's more clear.
      /*subtitle: ''*/
    },

    {
      id: 3,
      title: 'Shoes',
      //Every single one of our different categories is also going to say Shop now. So technically, you don't actually need to pass this. This value can actually be hardcoded. So you actually don't even need a subtitle because you know that shop now is going to be present in every single one of your categories. So that's a good way to determine what values you need in your object versus which ones you don't. I'm also going to initialize an ID just so that it's more clear.
      /*subtitle: ''*/
    },

    {
      id: 4,
      title: 'Womens',
      //Every single one of our different categories is also going to say Shop now. So technically, you don't actually need to pass this. This value can actually be hardcoded. So you actually don't even need a subtitle because you know that shop now is going to be present in every single one of your categories. So that's a good way to determine what values you need in your object versus which ones you don't. I'm also going to initialize an ID just so that it's more clear.
      /*subtitle: ''*/
    },

    {
      id: 5,
      title: 'Mens',
      //Every single one of our different categories is also going to say Shop now. So technically, you don't actually need to pass this. This value can actually be hardcoded. So you actually don't even need a subtitle because you know that shop now is going to be present in every single one of your categories. So that's a good way to determine what values you need in your object versus which ones you don't. I'm also going to initialize an ID just so that it's more clear.
      /*subtitle: ''*/
    },

  ];

  return (
    <div className="categories-container">
      {/* So we know that inside of our categories container, we're going to map over the categories. So remember, wrap it in your squiggly brackets, then say categories map and you're going to pass at a function where you get the category.  */}
        {categories.map(({title}) => (
          <div className="category-container">
          <div className='background-image' />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}

    {/* We hardcoded this at first because it was the easier thing to do, but as we scale, this definitely doesn't make sense. Essentially we're repeating the same code here where these values, where it's pretty much just the <h2>...<h2>s are the only places where it's essentially different. Maybe the image is different, but we haven't even tackled that yet. But we can already tell that this value is going to be repeated just using a different value. So this is a good place for us to actually start optimizing a little bit. So instead of hard coding out these for other sections, what we can do is we can actually initialize some variable array and I want to call this thing the directories or the categories. And this is going to be an array that contains objects that reflect what it is that we have in here.  */}
    {/* <div className="category-container">
          <img></img>
          <div className="category-body-container">
            <h2>Headwear</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          <img></img>
          <div className="category-body-container">
            <h2>Coats and Jackets</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          <img></img>
          <div className="category-body-container">
            <h2>Shoes, Sneakers, and Boots</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          <img></img>
          <div className="category-body-container">
            <h2>Women's</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          <img></img>
          <div className="category-body-container">
            <h2>Men's</h2>
            <p>Shop Now</p>
          </div>
        </div> */}
    </div>
  );
};

export default App;
