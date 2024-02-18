import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addtocart } from "../../Features/CartSlice";
const NewArrivals = () => {
  const dispatch = useDispatch();

  const newArrival = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 301,
      price: 999,
      name: "White T-shirt",
      category: "men's clothing",
      stock: 120,
      rating: 4.5,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae, illo quos ad eius perspiciatis nisi in culpa beatae dolor dolores magni alias explicabo placeat est voluptatibus? Esse numquam blanditiis nostrum assumenda deserunt ipsa veritatis possimus sequi culpa cum modi nesciunt dolorem quibusdam laboriosam nihil ex laborum accusamus, sint debitis soluta dolorum officiis! Ea doloribus veritatis possimus dolorem et sunt hic voluptas distinctio ducimus quos quam esse eaque culpa nisi quae, inventore ratione earum. Recusandae cum error blanditiis, ipsum eaque laborum. Illum labore consequatur eaque quos! Quis, nostrum ea officia, iure dolorum expedita enim, quo illum dignissimos nam commodi doloremque! Suscipit soluta eos, quisquam nisi pariatur eligendi voluptatem animi eveniet ad? Fuga, eaque excepturi, dolore mollitia quas ad vitae repellat voluptas, iste veritatis cum nemo neque est minus adipisci et necessitatibus enim at in perferendis cumque harum praesentium unde aliquid. Error ab cum, omnis autem dolorem ",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 303,
      price: 999,
      name: "iphone 8",
      stock: 120,
      rating: 4.5,
      category: "electronics",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae, illo quos ad eius perspiciatis nisi in culpa beatae dolor dolores magni alias explicabo placeat est voluptatibus? Esse numquam blanditiis nostrum assumenda deserunt ipsa veritatis possimus sequi culpa cum modi nesciunt dolorem quibusdam laboriosam nihil ex laborum accusamus, sint debitis soluta dolorum officiis! Ea doloribus veritatis possimus dolorem et sunt hic voluptas distinctio ducimus quos quam esse eaque culpa nisi quae, inventore ratione earum. Recusandae cum error blanditiis, ipsum eaque laborum. Illum labore consequatur eaque quos! Quis, nostrum ea officia, iure dolorum expedita enim, quo illum dignissimos nam commodi doloremque! Suscipit soluta eos, quisquam nisi pariatur eligendi voluptatem animi eveniet ad? Fuga, eaque excepturi, dolore mollitia quas ad vitae repellat voluptas, iste veritatis cum nemo neque est minus adipisci et necessitatibus enim at in perferendis cumque harum praesentium unde aliquid. Error ab cum, omnis autem dolorem ",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 302,
      price: 999,
      name: "women clothing",
      category: "women's clothing",
      rating: 4.5,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae, illo quos ad eius perspiciatis nisi in culpa beatae dolor dolores magni alias explicabo placeat est voluptatibus? Esse numquam blanditiis nostrum assumenda deserunt ipsa veritatis possimus sequi culpa cum modi nesciunt dolorem quibusdam laboriosam nihil ex laborum accusamus, sint debitis soluta dolorum officiis! Ea doloribus veritatis possimus dolorem et sunt hic voluptas distinctio ducimus quos quam esse eaque culpa nisi quae, inventore ratione earum. Recusandae cum error blanditiis, ipsum eaque laborum. Illum labore consequatur eaque quos! Quis, nostrum ea officia, iure dolorum expedita enim, quo illum dignissimos nam commodi doloremque! Suscipit soluta eos, quisquam nisi pariatur eligendi voluptatem animi eveniet ad? Fuga, eaque excepturi, dolore mollitia quas ad vitae repellat voluptas, iste veritatis cum nemo neque est minus adipisci et necessitatibus enim at in perferendis cumque harum praesentium unde aliquid. Error ab cum, omnis autem dolorem ",
    },
  ];
  const handleclick = (item) => {
    console.log(item);
    dispatch(
      addtocart({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        imageSrc: item.imageSrc,
        description: item.description,
        rating: item.rating,
        stock: item.stock,
      })
    );
  };

  return (
    <div className="p-1 mt-4">
  <div className="flex flex-wrap justify-center items-center">
    {newArrival.map((item) => {
      return (
        <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-2">
          <div className="card bg-base-100 shadow-xl ">
            <figure className="p-4">
              <img
                src={item.imageSrc}
                alt="image"
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center ">
              <h2 className="card-title text-center mx-auto">{item.category}</h2>
              <div className="card-actions">
                <button
                  className="text-md text-center mx-auto bg-gray-900 text-white p-2 rounded-xl"
                  onClick={() => {
                    handleclick(item);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

      
  );
};

export default NewArrivals;
