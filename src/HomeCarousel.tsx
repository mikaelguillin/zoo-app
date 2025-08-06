import { Carousel } from "@ark-ui/react/carousel";
import { Badge, Card, HStack, Image, Skeleton, Switch } from "@chakra-ui/react";
import { BsBell, BsClock } from "react-icons/bs";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "The Penguins Dance",
    img: "https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Lions Feeding Time",
    img: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Giraffes",
    img: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HomeCarousel() {
  const [imageLoaded, setImageLoaded] = useState(
    Array(slides.length).fill(false)
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
    <Carousel.Root
      defaultPage={1}
      slideCount={slides.length}
      allowMouseDrag
      loop
      spacing="20px"
      padding="40px"
    >
      <Carousel.ItemGroup>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} index={index}>
            <Card.Root overflow="hidden" size="sm">
              <Skeleton loading={!imageLoaded[index]} height="200px">
                <Image
                  src={slide.img}
                  maxHeight="200px"
                  width="100%"
                  objectFit="cover"
                  alt=""
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                />
              </Skeleton>
              <Card.Body>
                <Card.Title mb="2">{slide.title}</Card.Title>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Animation</Badge>
                  <Badge>
                    <BsClock /> 10 min.
                  </Badge>
                </HStack>
              </Card.Body>
              <Card.Footer>
                <Switch.Root size="lg" colorPalette="green">
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb>
                      <Switch.ThumbIndicator
                        fallback={<BsBell color="black" />}
                      >
                        <BsBell />
                      </Switch.ThumbIndicator>
                    </Switch.Thumb>
                  </Switch.Control>
                  <Switch.Label>Notify me</Switch.Label>
                </Switch.Root>
              </Card.Footer>
            </Card.Root>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}