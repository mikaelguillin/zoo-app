import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";

export default function Notifications() {
    return (
        <>
            <Card.Root flexDirection="row" overflow="hidden" size="sm">
                <Image
                    objectFit="cover"
                    width="50px"
                    height="50px"
                    mt={5}
                    ml={5}
                    src="https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Penguins"
                />
                <Box>
                    <Card.Body>
                        <Card.Title mb="1">Penguins show</Card.Title>
                        <Card.Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Description>
                        <HStack mt="2">
                            <Badge>Animation</Badge>
                            <Badge><BsClock /> Starts in 10 min.</Badge>
                        </HStack>
                    </Card.Body>
                </Box>
            </Card.Root>   
        </>
    )
}