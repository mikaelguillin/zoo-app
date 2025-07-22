import { Box, Button, Heading, HStack, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import { BsCarFront, BsClock, BsFacebook, BsInfo, BsInstagram, BsTicket, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs";
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
            <Box as="section" mt={5} mb={5}>
                <Heading mb={4}>Upcoming shows</Heading>
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