import { ImageOverlay, MapContainer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { MapFiltersDialog } from "./MapFiltersDialog";



export function Map() {
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
    return (
        <>
            <MapContainer
                minZoom={-2}
                maxZoom={2}
                bounds={[[0, 0], [1591, 2500]]}
                maxBounds={[[-200, -200], [1791, 2700]]}
                scrollWheelZoom={false}
                crs={L.CRS.Simple}
            >
                <ImageOverlay url="/map-1.jpg" bounds={[[0, 0], [1591, 2500]]}  />
                <Marker position={[850,500]} icon={giraffesIcon}>
                    <Popup>
                        Giraffes
                    </Popup>
                </Marker>
                <Marker position={[1000,1700]} icon={lionsIcon}>
                    <Popup>
                        Lions
                    </Popup>
                </Marker>
                <Marker position={[500,500]} icon={penguinsIcon}>
                    <Popup>
                        Penguins
                    </Popup>
                </Marker>
                <IconButton zIndex={999} position="absolute" left="10px" top="85px">
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