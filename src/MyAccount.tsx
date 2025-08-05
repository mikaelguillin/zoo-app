import { Box, Button, Card, createListCollection, DataList, Heading, HStack, Portal, Select, Switch, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { TicketDialog } from "./TicketDialog";
import { BsBell, BsTicket } from "react-icons/bs";

const languages = createListCollection({
    items: [
      { label: "🇺🇸 English", value: "english" },
      { label: "🇫🇷 French", value: "french" },
      { label: "🇪🇸 Spanish", value: "spanish" },
      { label: "🇩🇪 German", value: "german" },
      { label: "🇨🇳 Chinese", value: "chinese" },
    ],
  })

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
                <Heading fontSize="2xl" mb={4}>Tickets</Heading>

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
                <Heading fontSize="2xl" mb={4}>Settings</Heading>

                <VStack gap={5} alignItems="flex-start">
                    <Switch.Root defaultChecked>
                        <Switch.HiddenInput />
                        <Switch.Label>Enable notifications</Switch.Label>
                        <Switch.Control>
                            <Switch.Thumb>
                                <Switch.ThumbIndicator fallback={<BsBell />}>
                                    <BsBell />
                                </Switch.ThumbIndicator>
                            </Switch.Thumb>
                        </Switch.Control>
                    </Switch.Root>

                    <Select.Root
                        collection={languages}
                        defaultValue={[languages.items[0].value]}
                        width="300px"
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Select.HiddenSelect />
                        <Select.Label>Select language</Select.Label>
                        <Select.Control flexGrow={1}>
                            <Select.Trigger>
                                <Select.ValueText />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                                <Select.Indicator />
                            </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                            <Select.Positioner>
                                <Select.Content>
                                {languages.items.map((language) => (
                                    <Select.Item item={language} key={language.value}>
                                        {language.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>
                </VStack>
            </Box>

            <TicketDialog
                isOpen={isTicketOpen}
                onOpenChange={(e) => setTicketOpen(e.open)}
            />
        </Box>
    )
}