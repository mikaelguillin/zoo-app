import { CloseButton, Dialog, Portal } from "@chakra-ui/react";

export function ZooAccessDialog({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: (e: any) => void}) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Access to the Zoo</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
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