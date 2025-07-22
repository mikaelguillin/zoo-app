import { CheckboxCard, CloseButton, Dialog, Portal } from "@chakra-ui/react";

export function MapFiltersDialog({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: (e: any) => void}) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange} size="full">
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Filters</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <CheckboxCard.Root mb={3}>
                                <CheckboxCard.HiddenInput />
                                <CheckboxCard.Control>
                                    <CheckboxCard.Content>
                                    <CheckboxCard.Label>Information Kiosks</CheckboxCard.Label>
                                    </CheckboxCard.Content>
                                    <CheckboxCard.Indicator />
                                </CheckboxCard.Control>
                            </CheckboxCard.Root>
                            <CheckboxCard.Root mb={3}>
                                <CheckboxCard.HiddenInput />
                                <CheckboxCard.Control>
                                    <CheckboxCard.Content>
                                    <CheckboxCard.Label>Souvenir Shops</CheckboxCard.Label>
                                    </CheckboxCard.Content>
                                    <CheckboxCard.Indicator />
                                </CheckboxCard.Control>
                            </CheckboxCard.Root>
                            <CheckboxCard.Root mb={3}>
                                <CheckboxCard.HiddenInput />
                                <CheckboxCard.Control>
                                    <CheckboxCard.Content>
                                    <CheckboxCard.Label>Restrooms</CheckboxCard.Label>
                                    </CheckboxCard.Content>
                                    <CheckboxCard.Indicator />
                                </CheckboxCard.Control>
                            </CheckboxCard.Root>
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}