import { Badge, Box, Button, Card, Heading, HStack, Image } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";

export function ShowsList() {
    return (
        <>
            <Heading as="h1" mb={4}>List of shows and animations</Heading>
            <Card.Root flexDirection="row" overflow="hidden" size="sm">
                <Image
                    objectFit="cover"
                    width="100px"
                    height="100px"
                    mt={5}
                    ml={5}
                    src="https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Caffe Latte"
                />
                <Box>
                <Card.Body>
                    <Card.Title mb="2">Penguins</Card.Title>
                    <Card.Description>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                    </Card.Description>
                    <HStack mt="4">
                        <Badge>Animation</Badge>
                        <Badge><BsClock /> 10 min.</Badge>
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Button>Buy Latte</Button>
                </Card.Footer>
                </Box>
            </Card.Root>
            <Card.Root flexDirection="row" overflow="hidden" size="sm">
                <Image
                    objectFit="cover"
                    width="100px"
                    height="100px"
                    mt={5}
                    ml={5}
                    src="https://images.unsplash.com/photo-1700145326965-9d8e1c54dddc?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Caffe Latte"
                />
                <Box>
                <Card.Body>
                    <Card.Title mb="2">Cheetahs</Card.Title>
                    <Card.Description>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                    </Card.Description>
                    <HStack mt="4">
                    <Badge>Animation</Badge>
                    <Badge><BsClock /> 10 min.</Badge>
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Button>Buy Latte</Button>
                </Card.Footer>
                </Box>
            </Card.Root>
            <Card.Root flexDirection="row" overflow="hidden" size="sm">
                <Image
                    objectFit="cover"
                    width="100px"
                    height="100px"
                    mt={5}
                    ml={5}
                    src="https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Caffe Latte"
                />
                <Box>
                <Card.Body>
                    <Card.Title mb="2">Giant pandas</Card.Title>
                    <Card.Description>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                    </Card.Description>
                    <HStack mt="4">
                    <Badge>Animation</Badge>
                    <Badge><BsClock /> 10 min.</Badge>
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Button>Buy Latte</Button>
                </Card.Footer>
                </Box>
            </Card.Root>
        </>
    )
}