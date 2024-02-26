import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { latLng } from "leaflet";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Map/Map.scss"
import Markers from "../Markers";
import Posts from "../Posts";
import { updatePosts } from "../../store/postsInAreaReducer";
import { getCoords } from "../../store/coordsReducer";

function MapControl() {
  const dispatch = useDispatch();
  const currentPosts = useSelector((state) => state.currentPosts.currentPosts);
  const map = useMap();

  const onMove = useCallback(() => {
    const bounds = map.getBounds();
    const inArea = [];
    currentPosts.forEach((post) => {
      const pos = latLng(post.coord[0], post.coord[1]);
      if (bounds.contains(pos)) {
        inArea.push(post);
      }
    });
    dispatch(updatePosts(inArea));
  }, [map, currentPosts]);

  const onClick = useCallback((e) => {
    let newCoord = [e.latlng.lat, e.latlng.lng];
    dispatch(getCoords(newCoord));
  }, []);

  useEffect(() => {
    map.on("move", onMove);
    map.on("click", onClick);
    return () => {
      map.off("move", onMove);
      map.off("click", onClick);
    };
  }, [map, onMove]);
}

function Map() {
  const position = [50.444, 30.581];
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
        <MapControl />
      </MapContainer>
      <Posts />
    </div>
  );
}

export default Map;
