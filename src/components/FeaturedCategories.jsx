import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 1,
    title: "Bracelets ⋆౨ৎ˚⟡",
    imageUrl: "https://i.pinimg.com/1200x/85/d4/68/85d468199d0ba37b15c597e17439939e.jpg",
    link: "Bracelets"
  },



  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 3,
    title: "Earrings ⋆˚꩜｡",
    imageUrl: "https://i.pinimg.com/1200x/28/10/02/2810028923797ce6c0e3b7aee535a455.jpg",
      link: "Earrings"
  },

        {
    id: 5,
    title: "Nails 𝜗ৎ",
    imageUrl:"https://i.pinimg.com/1200x/d6/26/2d/d6262d67aedfa6e15a0665fd67b43d9f.jpg",
     link: "Nails"
  },

  {
      id: 6,
    title: "Anklets⋆˚࿔",
    imageUrl:"https://i.pinimg.com/1200x/90/72/7a/90727a07000d08b1036b83c9fe0e2cbb.jpg",
     link: "Anklets"
  },
    {
      id: 7,
    title: "Cuffs ✮ ⋆ ˚｡",
    imageUrl:"https://i.pinimg.com/1200x/04/33/84/043384af6363e7937e5b792a698eec72.jpg",
     link: "Cuffs"
  },
      {
      id: 7,
    title: "Rings  🌷⋆｡‧˚ ",
    imageUrl:"https://i.pinimg.com/1200x/6b/93/01/6b9301733ccc998dedb91ae7d8e9a64d.jpg",
     link: "Rings"
  },
        {
    id: 4,
    title: "Jhumkay ｡°✩",
    imageUrl:"https://i.pinimg.com/1200x/10/82/f8/1082f80ad21674a537f8175ae7778c18.jpg",
     link: "Jhumkay"
  },
      {
    id: 2,
    title: "Necklaces ✧˖°.",
    imageUrl: "https://i.pinimg.com/1200x/1f/7f/6f/1f7f6f2cfa4055919e10c0c05f3a8708.jpg",
      link: "Necklaces",
  },
  //     {
  //     id: 7,
  //   title: "3 piece sets⭒˚.⋆",
  //   imageUrl:"https://i.postimg.cc/9Q4s0FGQ/image.png",
  //    link: "3 piece sets"
  // },
  //       {
  //     id: 7,
  //   title: "Charms⭒˚.⋆",
  //   imageUrl:"https://i.postimg.cc/pXS1wbgb/image.png",
  //    link: "charms"
  // },
  //       {
  //   id: 6,
  //   title: "Bag charms",
  //   imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/520244288_1267810474939004_9048492148598199566_n.png?stp=dst-png_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=neIk5TZGFm4Q7kNvwEuXfQ_&_nc_oc=AdmxJ4KDwZ-uqPdqouvocGIJ_PMCJuOMaF7ERpOXqSlLAudbRPv9J7oqkY8r3siKLZI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFMPcWh2mt2rXhc_FNIMeleWIzjCbZQawAV-wDep1F7MQ&oe=68A70F62"
  // },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;
