import { Dialog, Input, InputGroup, Portal } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export function MapSearchDialog({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: (e: any) => void}) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange} size="xs" placement="top">
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <InputGroup startElement={<BsSearch />}>
                            <Input
                                placeholder="Search for an animal, a show ..."
                            />
                        </InputGroup>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}