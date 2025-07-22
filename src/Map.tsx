import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { MapFiltersDialog } from "./MapFiltersDialog";



export function Map() {
    const {open: filtersOpen, onOpen: onFiltersOpen, setOpen: setFiltersOpen} = useDisclosure();
    const customIcon = new L.Icon({
        iconUrl: 'https://images.unsplash.com/photo-1581486179957-f7c9fb3a0050?q=60&w=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor,
        className: 'custom-marker',
    });
    return (
        <>
            <MapContainer
                center={[40.8501455,-73.8792966]}
                zoom={16}
                minZoom={15}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.8501455,-73.8792966]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[40.8511455,-73.8802966]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[40.8511455,-73.8782966]} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
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