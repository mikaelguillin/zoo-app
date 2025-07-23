import { Badge, Box, Button, Card, Heading, HStack, IconButton, Image, Switch, useDisclosure, VStack } from "@chakra-ui/react";
import { BsBell, BsCarFront, BsClock, BsFacebook, BsInfo, BsInstagram, BsTicket, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";
import { OpeningHoursDialog } from "./OpeningHoursDialog";
import { UsefulInformationDialog } from "./UsefulInformationDialog";
import { ZooAccessDialog } from "./ZooAccessDialog";

export function Home() {
    const {
        open: isOpeningHoursOpen,
        onOpen: onOpeningHoursOpen,
        setOpen: setOpeningHoursOpen
    } = useDisclosure();
    const {
        open: isUsefulInformationOpen,
        onOpen: onUsefulInformationOpen,
        setOpen: setUsefulInformationOpen
    } = useDisclosure();
    const {
        open: isZooAccessOpen,
        onOpen: onZooAccessOpen,
        setOpen: setZooAccessOpen
    } = useDisclosure();

    return (
        <Box className="container">
            <Box as="section" mb={5}>
                <Heading mt={3} mb={4}>Upcoming shows</Heading>

                <Card.Root overflow="hidden" size="sm">
                    <Image
                        src="https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
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
                </Card.Root>
            </Box>
            <Box as="section" mt={5} mb={5}>
                <Heading mb={4}>I prepare my visit</Heading>

                <VStack>
                    <Button onClick={onOpeningHoursOpen}>
                        <BsClock />
                        Opening hours
                    </Button>
                    <Button asChild>
                        <Link to="/tickets">
                            <BsTicket />
                            Buy my tickets
                        </Link>
                    </Button>
                    <Button onClick={onUsefulInformationOpen}>
                        <BsInfo />
                        Useful information
                    </Button>
                    <Button onClick={onZooAccessOpen}>
                        <BsCarFront />
                        Access to the Zoo
                    </Button>
                </VStack>
            </Box>
            <Box as="section" mt={5} mb={5}>
                <Heading mb={4}>I book a guided tour</Heading>
            </Box>
            <Box as="section" mt={5} mb={5}>
                <Heading mb={4}>Stay in touch</Heading>

                <HStack justifyContent="center">
                    <IconButton>
                        <BsFacebook />
                    </IconButton>
                    <IconButton>
                        <BsTwitterX />
                    </IconButton>
                    <IconButton>
                        <BsYoutube />
                    </IconButton>
                    <IconButton>
                        <BsInstagram />
                    </IconButton>
                    <IconButton>
                        <BsTiktok />
                    </IconButton>
                </HStack>

                <Button asChild mt={3}>
                    <Link to="/feedback">
                        Give us a feedback!
                    </Link>
                </Button>
            </Box>

            <OpeningHoursDialog
                isOpen={isOpeningHoursOpen}
                onOpenChange={(e) => setOpeningHoursOpen(e.open)}
            />
            <UsefulInformationDialog
                isOpen={isUsefulInformationOpen}
                onOpenChange={(e) => setUsefulInformationOpen(e.open)}
            />
            <ZooAccessDialog
                isOpen={isZooAccessOpen}
                onOpenChange={(e) => setZooAccessOpen(e.open)}
            />
        </Box>
    )
}