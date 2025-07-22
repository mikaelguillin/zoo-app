import { Box, Button, Field, Heading, Input, RatingGroup, Textarea } from "@chakra-ui/react";

export function SurveyForm() {
    return (
        <Box className="container">
            <Heading as="h1">Give us a feedback!</Heading>
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
                    <RatingGroup.Root count={5} defaultValue={3} size="sm">
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                    </RatingGroup.Root>

                    <Field.HelperText />
                    <Field.ErrorText />
                </Field.Root>
                <Button>Submit</Button>
            </form>
        </Box>
    )
}