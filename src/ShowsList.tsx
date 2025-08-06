import { Badge, Box, Card, Heading, HStack, Image, Skeleton, Switch } from "@chakra-ui/react";
import { useState } from "react";
import { BsBell, BsClock } from "react-icons/bs";

const shows = [
    {
      id: 1,
      title: "Penguins",
      img: "https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Cheetahs",
      img: "https://images.unsplash.com/photo-1700145326965-9d8e1c54dddc?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Giant Pandas",
      img: "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function ShowsList() {
    const [imageLoaded, setImageLoaded] = useState(
        Array(shows.length).fill(false)
      );
    
      const handleImageLoad = (index: number) => {
        setImageLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    
      const handleImageError = (index: number) => {
        // Optionally handle error state
        setImageLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true; // Mark as loaded to hide skeleton
          return updated;
        });
      };
    return (
        <>
            <Box className="container">
                <Heading as="h1" mt={3} mb={4}>List of shows and animations</Heading>
            </Box>

            {shows.map((show, index) => (
                <Card.Root flexDirection="row" overflow="hidden" size="sm">
                    <Skeleton loading={!imageLoaded[index]} asChild height="100px" width="100px">
                        <Image
                            objectFit="cover"
                            width="100px"
                            height="100px"
                            mt={5}
                            ml={5}
                            src={show.img}
                            alt=""
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                        />
                    </Skeleton>
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2">{show.title}</Card.Title>
                            <Card.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Description>
                            <HStack mt="4">
                                <Badge>Animation</Badge>
                                <Badge><BsClock /> 10 min.</Badge>
                            </HStack>
                        </Card.Body>
                        <Card.Footer>
                            <Switch.Root size="lg" colorPalette="green">
                                <Switch.HiddenInput />
                                <Switch.Control>
                                    <Switch.Thumb>
                                    <Switch.ThumbIndicator fallback={<BsBell color="black" />}>
                                        <BsBell />
                                    </Switch.ThumbIndicator>
                                    </Switch.Thumb>
                                </Switch.Control>
                                <Switch.Label>Notify me</Switch.Label>
                            </Switch.Root>
                        </Card.Footer>
                    </Box>
                </Card.Root>
            ))}
        </>
    )
}