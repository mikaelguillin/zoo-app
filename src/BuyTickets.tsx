import { Button, Field, HStack, IconButton, Input, Box, Heading } from "@chakra-ui/react";
import { BsCreditCard, BsPaypal } from "react-icons/bs";
import { SiVenmo } from "react-icons/si";

export default function BuyTickets() {
    return (
        <Box className="container">
            <Heading as="h1" mb={4}>Buy a ticket</Heading>

            <form>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Last Name:
                    </Field.Label>
                    <Input />
                    <Field.HelperText />
                    <Field.ErrorText />
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        First Name:
                    </Field.Label>
                    <Input />
                    <Field.HelperText />
                    <Field.ErrorText />
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Email Address:
                    </Field.Label>
                    <Input />
                    <Field.HelperText />
                    <Field.ErrorText />
                </Field.Root>

                <p>Payment method:</p>
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

                <Button>Submit</Button>
            </form>
        </Box>
    )
}