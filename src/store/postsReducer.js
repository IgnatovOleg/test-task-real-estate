const defaultState = {
  posts: [
    {
      id: 1,
      disc: "Будинок на Видубичах",
      category: "house",
      img: "https://klike.net/uploads/posts/2020-01/1579858769_1.jpg",
      coord: [50.424, 30.551],
      price: 12500,
      showed: false,
    },
    {
      id: 2,
      disc: "Здається квартира в центрі міста",
      category: "flat",
      img: "https://www.pufikhomes.com/wp-content/uploads/2019/06/sovremennaya-belaya-kvartira-dlya-devushki-v-starom-dome-moskvy-pufikhomes-1.jpg",
      coord: [50.46, 30.472],
      price: 5500,
      showed: false,
    },
    {
      id: 3,
      disc: "Апартаменти на Олімпійській",
      category: "apartment",
      img: "https://8news.com.ua/wp-content/uploads/2021/03/apartamenty12.jpg",
      coord: [50.455, 30.458],
      price: 2500,
      showed: false,
    },
    {
      id: 4,
      disc: "Кімната на Борщагівці",
      category: "room",
      img: "https://www.volynpost.com/img/modules/news/0/48/0f20fa7d3d37cca93c04b228256f0480/rss-photo.jpg",
      coord: [50.435, 30.458],
      price: 900,
      showed: false,
    },
    {
      id: 5,
      disc: "Офіс на Хрещатику",
      category: "commercial",
      img: "https://cdn.riastatic.com/photosnewr/ria/dom_news_logo/kak-prodat-kommercheskuyu-nedvizhimost__211750-620x0.jpg",
      coord: [50.535, 30.458],
      price: 25500,
      showed: false,
    },
  ],
};

const ADD_POST = "ADD_POST";

export const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export const add_Post = (payload) => ({ type: ADD_POST, payload });
