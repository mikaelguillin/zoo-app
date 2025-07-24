import { CloseButton, Dialog, Portal, QrCode } from "@chakra-ui/react";

export function TicketDialog({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: (e: any) => void}) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange} size="xl">
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Ticket</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <QrCode.Root value="https://www.google.com" size="full">
                                <QrCode.Frame>
                                    <QrCode.Pattern />
                                </QrCode.Frame>
                            </QrCode.Root>
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