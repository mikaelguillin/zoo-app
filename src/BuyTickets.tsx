import { Button, Field, HStack, IconButton, Input, Box, Heading, Checkbox, VStack } from "@chakra-ui/react";
import { BsCheck, BsCreditCard, BsPaypal } from "react-icons/bs";
import { SiVenmo } from "react-icons/si";

export default function BuyTickets() {
    return (
        <Box className="container">
            <Heading as="h1" size="3xl" mb={4}>Buy a ticket</Heading>

            <form>
                <VStack alignItems="start" gap={3}>
                    <Field.Root>
                        <Field.Label>
                            <Field.RequiredIndicator />
                            Last Name:
                        </Field.Label>
                        <Input />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>
                            <Field.RequiredIndicator />
                            First Name:
                        </Field.Label>
                        <Input />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>
                            <Field.RequiredIndicator />
                            Email Address:
                        </Field.Label>
                        <Input />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>
                            <Field.RequiredIndicator />
                            Address:
                        </Field.Label>
                        <Input />
                    </Field.Root>
                    <Checkbox.Root>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>Include a guided tour</Checkbox.Label>
                    </Checkbox.Root>
                </VStack>

                <Heading mt={5} mb={3}>Payment method</Heading>
                <HStack>
                    <Button>
                        <BsCreditCard />
                        Credit Card
                    </Button>
                    <Button>
                        <BsPaypal />
                        Paypal
                    </Button>
                    <IconButton>
                        <SiVenmo />
                    </IconButton>
                </HStack>

                <VStack mt={4} gap={3} alignItems="normal">
                    <Field.Root>
                        <Field.Label>
                            <Field.RequiredIndicator />
                            Full Name:
                        </Field.Label>
                        <Input />
                        <Field.HelperText />
                        <Field.ErrorText />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>
                            <Field.RequiredIndicator />
                            Card Number:
                        </Field.Label>
                        <Input />
                        <Field.HelperText />
                        <Field.ErrorText />
                    </Field.Root>
                    <HStack gap={3}>
                        <Field.Root>
                            <Field.Label>
                                <Field.RequiredIndicator />
                                Exp Date:
                            </Field.Label>
                            <Input />
                            <Field.HelperText />
                            <Field.ErrorText />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>
                                <Field.RequiredIndicator />
                                CVV:
                            </Field.Label>
                            <Input />
                            <Field.HelperText />
                            <Field.ErrorText />
                        </Field.Root>
                    </HStack>
                </VStack>

                <Button mt={3}>
                    <BsCheck />
                    Submit
                </Button>
            </form>
        </Box>
    )
}