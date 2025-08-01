import { Carousel } from '@ark-ui/react/carousel'
import { Badge, Card, HStack, Image, Switch } from '@chakra-ui/react';
import { BsBell, BsClock } from 'react-icons/bs';

const slides = [
    {
        id: 1,
        title: 'The Penguins Dance',
        img: 'https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        title: 'Lions Feeding Time',
        img: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        title: 'Giraffes',
        img: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default function HomeCarousel() {
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
                            <Image
                                src={slide.img}
                                alt=""
                                maxHeight="200px"
                                objectFit="cover"
                            />
                            <Card.Body>
                                <Card.Title mb="2">{slide.title}</Card.Title>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Description>
                                <HStack mt="4">
                                    <Badge>Animation</Badge>
                                    <Badge><BsClock /> 10 min.</Badge>
                                </HStack>
                            </Card.Body>
                            <Card.Footer>
                                <Switch.Root size="lg">
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
                        </Card.Root>
                    </Carousel.Item>
                ))}
            </Carousel.ItemGroup>
        </Carousel.Root>
    )
}