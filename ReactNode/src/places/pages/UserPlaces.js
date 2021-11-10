import React from "react";
import { useParams } from "react-router";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "one of the most famous sky scrapers in world",
    imageUrl: `https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg`,
    address: "20 W 34th st",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "one of the most famous sky scrapers in world",
    imageUrl: `https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg`,
    address: "20 W 34th st",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  console.log(userId);
  const loadPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};

export default UserPlaces;
