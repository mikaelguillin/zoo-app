import { Badge, Box, Card, Heading, HStack, Image, Switch } from "@chakra-ui/react";
import { BsBell, BsClock } from "react-icons/bs";

export function ShowsList() {
    return (
        <>
            <Heading as="h1" mt={3} mb={4}>List of shows and animations</Heading>
            <Card.Root flexDirection="row" overflow="hidden" size="sm">
                <Image
                    objectFit="cover"
                    width="100px"
                    height="100px"
                    mt={5}
                    ml={5}
                    src="https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Penguins"
                />
                <Box>
                    <Card.Body>
                        <Card.Title mb="2">Penguins</Card.Title>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                </Box>
            </Card.Root>
        </>
    )
}