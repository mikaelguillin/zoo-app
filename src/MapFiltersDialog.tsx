import { CheckboxCard, CloseButton, Dialog, Icon, Portal } from "@chakra-ui/react";
import { BsGift, BsInfoCircle } from "react-icons/bs";
import { FaRestroom } from "react-icons/fa6";

export function MapFiltersDialog({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: (e: any) => void}) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange} size="full">
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Map Filters</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <CheckboxCard.Root mb={3}>
                                <CheckboxCard.HiddenInput />
                                <CheckboxCard.Control>
                                    <CheckboxCard.Content>
                                    <CheckboxCard.Label>
                                        <Icon size="lg">
                                            <BsInfoCircle />
                                        </Icon>
                                        <span>Information Kiosks</span>
                                    </CheckboxCard.Label>
                                    </CheckboxCard.Content>
                                    <CheckboxCard.Indicator />
                                </CheckboxCard.Control>
                            </CheckboxCard.Root>
                            <CheckboxCard.Root mb={3}>
                                <CheckboxCard.HiddenInput />
                                <CheckboxCard.Control>
                                    <CheckboxCard.Content>
                                    <CheckboxCard.Label>
                                        <Icon size="lg">
                                            <BsGift />
                                        </Icon>
                                        <span>Souvenir Shops</span>
                                    </CheckboxCard.Label>
                                    </CheckboxCard.Content>
                                    <CheckboxCard.Indicator />
                                </CheckboxCard.Control>
                            </CheckboxCard.Root>
                            <CheckboxCard.Root mb={3}>
                                <CheckboxCard.HiddenInput />
                                <CheckboxCard.Control>
                                    <CheckboxCard.Content>
                                    <CheckboxCard.Label>
                                      <Icon size="lg">
                                        <FaRestroom />
                                        </Icon>
                                        <span>Restrooms</span>
                                    </CheckboxCard.Label>
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