import Directory from '../../components/directory/directory.component';

const Home = () => {

    //So instead of hardcoding out these 4 other div sections, we're going to initialize some variable array. And this is going to be an array that contains objects that reflect what it is that we have in here.
    //array of json objects
    const categories = [
      {
        "id": 1,
        "title": "Hats",
        "imageUrl": "https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20.jpg"
      },
      {
        "id": 2,
        "title": "Coats & Jackets",
        "imageUrl": "https://suitaddict.com/wp-content/uploads/2018/01/E1E82A31-6B9A-4062-9FDC-21D692AA1A04.jpeg"
      },
      {
        "id": 3,
        "title": "Shoes",
        "imageUrl": "https://m.media-amazon.com/images/G/01/2022/mens-shoes/MENS-FALL-BOOTS-NEW-ARRIVALS-OCTOBER-HERO-1440x700.jpg"
      },
      {
        "id": 4,
        "title": "Womens",
        "imageUrl": "https://thestateofwomen.com/wp-content/uploads/2016/03/women-shopping.jpg"
      },
      {
        "id": 5,
        "title": "Mens",
        "imageUrl": "https://www.dmarge.com/wp-content/uploads/2020/12/mens-clothing-sale-feature.jpg"
      }
  ];
  
    return (
      <Directory categories={categories} />
    );
};

export default Home;