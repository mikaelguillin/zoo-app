import { ImageOverlay, MapContainer, Marker, Polyline } from "react-leaflet";
import L, { LatLng, type LatLngExpression, type LeafletEventHandlerFnMap } from 'leaflet';
import { Box, Button, CloseButton, Drawer, Heading, HStack, IconButton, Image, Text, useDisclosure, VStack, type DrawerOpenChangeDetails } from "@chakra-ui/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { MapFiltersDialog } from "./MapFiltersDialog";
import { useState } from "react";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { BsSearch } from "react-icons/bs";
import { MapSearchDialog } from "./MapSearchDialog";

import 'leaflet/dist/leaflet.css'

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


const geolocationsPositions: LatLngExpression[] = [[700,1700], [300,1700], [700,1000], [300,300], [300,1000]];

const animalDetails = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1581486179957-f7c9fb3a0050?q=100&w=50&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Penguins",
        desc: "Description of the animal",
        markerPos: [500,500]
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=60&w=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Giraffes",
        desc: "Description of the animal",
        markerPos: [850,500]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=60&w=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lions",
        desc: "Description of the animal",
        markerPos: [1000,1700]
    }
];

export default function Map() {
    const [currentPos, setCurrentPos] = useState(geolocationsPositions[0]);
    const [isPosMarkerVisible, setPosMarkerVisibility] = useState(false);
    const [clickedMarkerPos, setClickedMarkerPos] = useState<LatLng | null>(null);
    const [isRouteVisible, setRouteVisibility] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState<typeof animalDetails[number] | null>(null);
    const {open: filtersOpen, onOpen: onFiltersOpen, setOpen: setFiltersOpen} = useDisclosure();
    const {open: searchOpen, onOpen: onSearchOpen, setOpen: setSearchOpen} = useDisclosure();
    const {open: descriptionOpen, onOpen: onDescriptionOpen, setOpen: setDescriptionOpen} = useDisclosure();

    const penguinsIcon = new L.Icon({
        iconUrl: animalDetails[0].image,
        iconSize: [50, 50], // size of the icon
        iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor,
        className: 'custom-marker',
    });
    const giraffesIcon = new L.Icon({
        iconUrl: animalDetails[1].image,
        iconSize: [50, 50], // size of the icon
        iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor,
        className: 'custom-marker',
    });
    const lionsIcon = new L.Icon({
        iconUrl: animalDetails[2].image,
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
            setRouteVisibility(false)
            onDescriptionOpen();
            setSelectedAnimal(
                animalDetails.find(
                    (animal) => JSON.stringify(animal.markerPos) === JSON.stringify(Object.values(e.latlng)
                )
            ) || null)
        }
    }

    const onShowRouteClick = () => {
        setRouteVisibility(true);
        setPosMarkerVisibility(true);
    }

    const onDrawerOpenChange = (e: DrawerOpenChangeDetails) => {
        setDescriptionOpen(e.open);
        setRouteVisibility(false);
    };

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
                <ImageOverlay url="/map.webp" bounds={[[0, 0], [1591, 2500]]}  />
                <Marker data-id={1} position={[850,500]} icon={giraffesIcon} eventHandlers={markerEvents}></Marker>
                <Marker data-id={2} position={[1000,1700]} icon={lionsIcon} eventHandlers={markerEvents}></Marker>
                <Marker data-id={3} position={[500,500]} icon={penguinsIcon} eventHandlers={markerEvents}></Marker>
                
                <Marker position={currentPos} opacity={isPosMarkerVisible ? 1 : 0}></Marker>

                {isRouteVisible && clickedMarkerPos && (
                    <Polyline pathOptions={{ color: 'red', weight: 6 }} positions={[
                        currentPos,
                        Object.values(clickedMarkerPos) as LatLngExpression
                    ]} />
                )}

                <VStack zIndex={999} position="absolute" left="6px" bottom="20px">
                    <IconButton
                        variant="plain"
                        onClick={onGeolocationClick}
                        borderRadius="full"
                        backgroundColor="#fff"
                    >
                        <FaLocationCrosshairs />
                    </IconButton>
                    <IconButton
                        variant="plain"
                        onClick={onFiltersOpen}
                        borderRadius="full"
                        backgroundColor="#fff"
                    >
                        <LuSettings2 />
                    </IconButton>
                    <IconButton
                        variant="plain"
                        onClick={onSearchOpen}
                        borderRadius="full"
                        backgroundColor="#fff"
                    >
                        <BsSearch />
                    </IconButton>
                </VStack>
            </MapContainer>
            <MapFiltersDialog isOpen={filtersOpen} onOpenChange={(e) => setFiltersOpen(e.open)} />
            <MapSearchDialog isOpen={searchOpen} onOpenChange={(e) => setSearchOpen(e.open)} />

            <Drawer.Root
                open={descriptionOpen}
                onOpenChange={onDrawerOpenChange}
                placement="bottom"
                modal={false}
                closeOnInteractOutside={false}
            >
                <Drawer.Positioner bottom="52px" height="auto" top="auto">
                    <Drawer.Content>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="xs" />
                        </Drawer.CloseTrigger>
                        <Drawer.Body p={5}>
                            <HStack gap={5} alignItems="start">
                                <Image
                                    src={selectedAnimal?.image}
                                    height="80px"
                                    width="80px"
                                    objectFit="cover"
                                    borderRadius="full"
                                />
                                <VStack alignItems="start">
                                    <Heading>{selectedAnimal?.title}</Heading>
                                    <Text>{selectedAnimal?.desc}</Text>
                                    <Button size="xs" onClick={onShowRouteClick} mt={3}>Show route</Button>
                                </VStack>
                            </HStack>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>
        </>
    )
}