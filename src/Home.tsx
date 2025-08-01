import { Box, Button, Heading, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { BsCarFront, BsClock, BsFacebook, BsInfo, BsInstagram, BsTicket, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";
import { OpeningHoursDialog } from "./OpeningHoursDialog";
import { UsefulInformationDialog } from "./UsefulInformationDialog";
import { ZooAccessDialog } from "./ZooAccessDialog";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
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
                <HomeCarousel />
            </Box>
            <Box as="section" mt={5} mb={5}>
                <Heading mb={4}>I prepare my visit</Heading>

                <HStack flexWrap="wrap" gap={2}>
                    <Button
                        asChild
                        flexBasis="calc(50% - var(--chakra-spacing-2) / 2)"
                        backgroundColor="orange.600"
                    >
                        <Link to="/tickets">
                            <BsTicket />
                            Buy my tickets
                        </Link>
                    </Button>
                    <Button
                        onClick={onOpeningHoursOpen}
                        flexBasis="calc(50% - var(--chakra-spacing-2) / 2)"
                        backgroundColor="orange.600"
                    >
                        <BsClock />
                        Opening hours
                    </Button>
                    <Button
                        onClick={onUsefulInformationOpen}
                        flexBasis="calc(50% - var(--chakra-spacing-2) / 2)"
                        backgroundColor="orange.600"
                    >
                        <BsInfo />
                        Useful information
                    </Button>
                    <Button
                        onClick={onZooAccessOpen}
                        flexBasis="calc(50% - var(--chakra-spacing-2) / 2)"
                        backgroundColor="orange.600"
                    >
                        <BsCarFront />
                        Access to the Zoo
                    </Button>
                </HStack>
            </Box>
            <Box as="section" mt={5} mb={5}>
                <Heading mb={4}>Stay in touch</Heading>

                <HStack justifyContent="center">
                    <IconButton borderRadius="full" backgroundColor="blue.700">
                        <BsFacebook />
                    </IconButton>
                    <IconButton borderRadius="full">
                        <BsTwitterX />
                    </IconButton>
                    <IconButton borderRadius="full" backgroundColor="red.600">
                        <BsYoutube />
                    </IconButton>
                    <IconButton borderRadius="full" backgroundColor="purple.700">
                        <BsInstagram />
                    </IconButton>
                    <IconButton borderRadius="full">
                        <BsTiktok />
                    </IconButton>
                </HStack>

                <Box textAlign="center">
                    <Button asChild mt={3}>
                        <Link to="/feedback">
                            Give us a feedback!
                        </Link>
                    </Button>
                </Box>
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