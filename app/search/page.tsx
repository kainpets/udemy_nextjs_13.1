import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";


const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true
}

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany({select});

  return  prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      },
    },
    select,
  })
}

const  fetchLocations = async () => {
  return prisma.location.findMany();
  
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
}

export default async function Search({searchParams}: {searchParams: {city?: string, cuisine?: string, price?: PRICE}}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  
  return (
    <>
    <Header />
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      <SearchSidebar searchParams={searchParams}  locations={location} cuisines={cuisine}/>
    <div className="w-5/6">
      {restaurants.length ? (
        <>
          {restaurants.map(restaurant => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
          ))}
        </>)
        : <p>No restaurants found</p>}
      
    </div>
    </div>
    </>
  )
}