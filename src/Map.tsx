import { ImageOverlay, MapContainer, Marker, Polyline, Popup } from "react-leaflet";
import L, { LatLng, type LatLngExpression, type LeafletEventHandlerFnMap } from 'leaflet';
import { Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { MapFiltersDialog } from "./MapFiltersDialog";
import { useState } from "react";


const geolocationsPositions: LatLngExpression[] = [[700,1700], [300,1700], [700,1000], [300,300], [300,1000]];

export default function Map() {
    const [currentPos, setCurrentPos] = useState(geolocationsPositions[0]);
    const [isPosMarkerVisible, setPosMarkerVisibility] = useState(false);
    const [clickedMarkerPos, setClickedMarkerPos] = useState<LatLng | null>(null);
    const [isRouteVisible, setRouteVisibility] = useState(false);
    const {open: filtersOpen, onOpen: onFiltersOpen, setOpen: setFiltersOpen} = useDisclosure();
    const icons = {
        penguins: 'https://images.unsplash.com/photo-1581486179957-f7c9fb3a0050?q=60&w=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        giraffes: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=60&w=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        lions: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=60&w=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

    const penguinsIcon = new L.Icon({
        iconUrl: icons.penguins,
        iconSize: [50, 50], // size of the icon
        iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor,
        className: 'custom-marker',
    });
    const giraffesIcon = new L.Icon({
        iconUrl: icons.giraffes,
        iconSize: [50, 50], // size of the icon
        iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor,
        className: 'custom-marker',
    });
    const lionsIcon = new L.Icon({
        iconUrl: icons.lions,
        iconSize: [50, 50], // size of the icon
        iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor,
        className: 'custom-marker',
    });

    const onGeolocationClick = () => {
        setCurrentPos(geolocationsPositions[Math.round(Math.random() * (geolocationsPositions.length - 1))]);
        setPosMarkerVisibility(true);
    }

    const markerEvents: LeafletEventHandlerFnMap = {
        click: (e) => {
            setClickedMarkerPos(e.latlng)
        },
        popupclose: () => {
            setRouteVisibility(false)
        }
    }

    const onShowRouteClick = () => {
        setRouteVisibility(true);
        setPosMarkerVisibility(true);
    }

    return (
        <>
            <MapContainer
                minZoom={-2}
                maxZoom={2}
                bounds={[[0, 0], [1591, 2500]]}
                maxBounds={[[-400, -400], [1991, 2900]]}
                scrollWheelZoom={false}
                crs={L.CRS.Simple}
            >
                <ImageOverlay url="/map-1.jpg" bounds={[[0, 0], [1591, 2500]]}  />
                <Marker position={[850,500]} icon={giraffesIcon} eventHandlers={markerEvents}>
                    <Popup>
                        <p>Giraffes</p>
                        <Button size="xs" onClick={onShowRouteClick}>Show route</Button>
                    </Popup>
                </Marker>
                <Marker position={[1000,1700]} icon={lionsIcon} eventHandlers={markerEvents}>
                    <Popup>
                        <p>Lions</p>
                        <Button size="xs" onClick={onShowRouteClick}>Show route</Button>
                    </Popup>
                </Marker>
                <Marker position={[500,500]} icon={penguinsIcon} eventHandlers={markerEvents}>
                    <Popup>
                        <p>Penguins</p>
                        <Button size="xs" onClick={onShowRouteClick}>Show route</Button>
                    </Popup>
                </Marker>
                
                <Marker position={currentPos} opacity={isPosMarkerVisible ? 1 : 0}></Marker>

                {isRouteVisible && clickedMarkerPos && (
                    <Polyline pathOptions={{ color: 'red', weight: 6 }} positions={[
                        currentPos,
                        Object.values(clickedMarkerPos) as LatLngExpression
                    ]} />
                )}

                <IconButton zIndex={999} position="absolute" left="10px" top="85px" onClick={onGeolocationClick}>
                    <FaLocationCrosshairs />
                </IconButton>
                <IconButton zIndex={999} position="absolute" left="10px" top="135px" onClick={onFiltersOpen}>
                    <LuSettings2 />
                </IconButton>
            </MapContainer>
            <MapFiltersDialog isOpen={filtersOpen} onOpenChange={(e) => setFiltersOpen(e.open)} />
        </>
    )
}