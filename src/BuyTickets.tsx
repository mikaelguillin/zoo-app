import { Button, Field, HStack, Input, Box, Heading, Checkbox, VStack, Steps, EmptyState, DataList, NumberInput } from "@chakra-ui/react";
import { useState } from "react";
import { BsCheck, BsChevronLeft, BsChevronRight, BsCreditCard, BsPaypal, BsTicket } from "react-icons/bs";
import { IoLogoVenmo } from "react-icons/io5";
import { Link } from "react-router";

export default function BuyTickets() {
    const [step, setStep] = useState(0)
    return (
        <Box className="container">
            <Heading as="h1" size="3xl" mb={4}>Buy tickets</Heading>

            <Steps.Root
                step={step}
                onStepChange={(e) => setStep(e.step)}
                count={3}
            >
                <Steps.List>
                    <Steps.Item index={0}>
                        <Steps.Trigger>
                            <VStack>
                                <Steps.Indicator />
                                <Steps.Title fontSize={12}>Information</Steps.Title>
                            </VStack>
                        </Steps.Trigger>
                        {/* <Steps.Separator /> */}
                    </Steps.Item>
                    <Steps.Item index={1}>
                        <Steps.Trigger>
                            <VStack>
                                <Steps.Indicator />
                                <Steps.Title fontSize={12}>Payment</Steps.Title>
                            </VStack>
                        </Steps.Trigger>
                        {/* <Steps.Separator /> */}
                    </Steps.Item>
                    <Steps.Item index={2}>
                        <Steps.Trigger>
                            <VStack>
                                <Steps.Indicator />
                                <Steps.Title fontSize={12}>Review</Steps.Title>
                            </VStack>
                        </Steps.Trigger>
                        {/* <Steps.Separator /> */}
                    </Steps.Item>
                </Steps.List>
                <Steps.Content index={0} flexGrow={1}>
                    <Heading mb={3}>Information</Heading>
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
                            <Field.Root>
                                <Field.Label>
                                    <Field.RequiredIndicator />
                                    Date and time of the visit:
                                </Field.Label>
                                <Input placeholder="MM/DD/YYYY 12:00" />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>
                                    <Field.RequiredIndicator />
                                    Number of tickets:
                                </Field.Label>
                                <NumberInput.Root defaultValue="2" width="200px">
                                    <NumberInput.Control />
                                    <NumberInput.Input />
                                </NumberInput.Root>
                            </Field.Root>
                            <Checkbox.Root mt={3}>
                                <Checkbox.HiddenInput />
                                <Checkbox.Control />
                                <Checkbox.Label>Include a guided tour</Checkbox.Label>
                            </Checkbox.Root>
                        </VStack>

                        <HStack mt={8} mb={5}>
                            <Button ml="auto" onClick={() => setStep(1)}>
                                Next Step
                                <BsChevronRight />
                            </Button>
                        </HStack>
                    </form>
                </Steps.Content>
                <Steps.Content index={1} flexGrow={1}>
                    <Heading mb={3}>Payment method</Heading>
                    <HStack>
                        <Button>
                            <BsCreditCard />
                            Credit Card
                        </Button>
                        <Button backgroundColor="blue.700">
                            <BsPaypal />
                            Paypal
                        </Button>
                        <Button backgroundColor="blue.500">
                            <IoLogoVenmo />
                            Venmo
                        </Button>
                    </HStack>

                    <VStack mt={5} gap={3} alignItems="normal">
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
                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Save my card details</Checkbox.Label>
                        </Checkbox.Root>
                    </VStack>

                    <HStack mt={8} mb={5} justifyContent="space-between">
                        <Button mt={5} mb={5} onClick={() => setStep(1)}>
                            <BsChevronLeft />
                            Previous Step
                        </Button>
                        <Button mt={5} mb={5} onClick={() => setStep(2)}>
                            Next Step
                            <BsChevronRight />
                        </Button>
                    </HStack>
                </Steps.Content>
                <Steps.Content index={2} flexGrow={1}>
                    <Heading mb={3}>Review</Heading>

                    <DataList.Root orientation="horizontal" divideY="1px">
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">Last Name</DataList.ItemLabel>
                            <DataList.ItemValue>Guillin</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">First Name</DataList.ItemLabel>
                            <DataList.ItemValue>Mikael</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">E-mail</DataList.ItemLabel>
                            <DataList.ItemValue>mikael.guillin@baruchmail.cuny.edu</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">Phone Number</DataList.ItemLabel>
                            <DataList.ItemValue>734-876-8096</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">Date and time of visit</DataList.ItemLabel>
                            <DataList.ItemValue>08/04/2025 at 5:30pm</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">Number of tickets</DataList.ItemLabel>
                            <DataList.ItemValue>2</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item pt="4">
                            <DataList.ItemLabel flexBasis="150px">Total order amount</DataList.ItemLabel>
                            <DataList.ItemValue>$50</DataList.ItemValue>
                        </DataList.Item>
                    </DataList.Root>

                    <Button mt={8} mb={5} onClick={() => setStep(3)}>
                        Checkout
                        <BsCheck />
                    </Button>
                </Steps.Content>
                <Steps.CompletedContent>
                    <EmptyState.Root size="lg">
                        <EmptyState.Content>
                            <EmptyState.Indicator>
                                <BsTicket />
                            </EmptyState.Indicator>
                            <VStack textAlign="center">
                                <EmptyState.Title>You're all set!</EmptyState.Title>
                                <EmptyState.Description>
                                    Your tickets are now available in your wallet and a confirmation e-mail has been sent to your e-mail address.
                                </EmptyState.Description>
                                <Button asChild mt={5}>
                                    <Link to="/">Back to home screen</Link>
                                </Button>
                            </VStack>
                        </EmptyState.Content>
                    </EmptyState.Root>
                </Steps.CompletedContent>
            </Steps.Root>
        </Box>
    )
}