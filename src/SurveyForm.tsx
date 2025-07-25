import { Box, Button, Field, Heading, Input, RatingGroup, Textarea, VStack } from "@chakra-ui/react";

export default function SurveyForm() {
    return (
        <Box className="container">
            <Heading as="h1" mb={4}>Give us a feedback!</Heading>
            <VStack as="form" gap={3}>
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
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        How was your experience today?:
                    </Field.Label>
                    <Textarea />
                    <Field.HelperText />
                    <Field.ErrorText />
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        <Field.RequiredIndicator />
                        Rate your experience:
                    </Field.Label>
                    <RatingGroup.Root count={5} defaultValue={3} size="lg">
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                    </RatingGroup.Root>

                    <Field.HelperText />
                    <Field.ErrorText />
                </Field.Root>
                <Button>Submit</Button>
            </VStack>
        </Box>
    )
}