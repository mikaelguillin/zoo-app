import { Box, Button, Card, Heading, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { TicketDialog } from "./TicketDialog";
import { BsTicket } from "react-icons/bs";

export default function MyAccount() {
    const {
        open: isTicketOpen,
        onOpen: onTicketOpen,
        setOpen: setTicketOpen
    } = useDisclosure();

    return (
        <Box className="container">
            <Heading fontSize="3xl" mt={3} mb={6}>
                {/* <BsPersonFill /> */}
                My Account
            </Heading>

            <Box as="section" mb={8}>
                <Heading fontSize="2xl" mb={3}>Information</Heading>

                <p><b>Last Name:</b> Guillin</p>
                <p><b>First Name:</b> Mikael</p>
                <p><b>Email:</b> mikael.guillin@baruchmail.cuny.edu</p>
                <p><b>Phone Number:</b> 734-876-8096</p>
            </Box>

            <Box as="section" mb={8}>
                <Heading fontSize="2xl" mb={3}>Tickets</Heading>

                <ul>
                    <li>
                        <Card.Root size="sm">
                            <Card.Header>
                                <Heading size="sm">Ticket 1</Heading>
                            </Card.Header>
                            <Card.Body color="fg.muted">
                                <HStack gap={3} alignItems="start">
                                    <Text flexGrow={1}>
                                        This is the card body. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </Text>
                                    <Button onClick={onTicketOpen} size="xs">
                                        <BsTicket />
                                        View Ticket
                                    </Button>
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    </li>
                    <li>
                        <Card.Root size="sm">
                            <Card.Header>
                                <Heading size="sm">Ticket 2</Heading>
                            </Card.Header>
                            <Card.Body color="fg.muted">
                                <HStack gap={3} alignItems="start">
                                    <Text flexGrow={1}>
                                        This is the card body. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </Text>
                                    <Button onClick={onTicketOpen} size="xs">
                                        <BsTicket />
                                        View Ticket
                                    </Button>
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    </li>
                </ul>
            </Box>

            <Box as="section" mb={8}>
                <Heading fontSize="2xl" mb={3}>Tours</Heading>
            </Box>

            <TicketDialog
                isOpen={isTicketOpen}
                onOpenChange={(e) => setTicketOpen(e.open)}
            />
        </Box>
    )
}