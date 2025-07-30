import { Box, Button, Card, DataList, Heading, HStack, Text, useDisclosure } from "@chakra-ui/react";
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
                My Account
            </Heading>

            <Box as="section" mb={8}>
                <Heading fontSize="2xl" mb={4}>Information</Heading>

                <DataList.Root orientation="horizontal" divideY="1px">
                <DataList.Item pt="4">
                    <DataList.ItemLabel>Last Name</DataList.ItemLabel>
                    <DataList.ItemValue>Guillin</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt="4">
                    <DataList.ItemLabel>First Name</DataList.ItemLabel>
                    <DataList.ItemValue>Mikael</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt="4">
                    <DataList.ItemLabel>E-mail</DataList.ItemLabel>
                    <DataList.ItemValue>mikael.guillin@gmail.com</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt="4">
                    <DataList.ItemLabel>Phone Number</DataList.ItemLabel>
                    <DataList.ItemValue>734-876-8096</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root>
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
                <Heading fontSize="2xl" mb={3}>Settings</Heading>
            </Box>

            <TicketDialog
                isOpen={isTicketOpen}
                onOpenChange={(e) => setTicketOpen(e.open)}
            />
        </Box>
    )
}