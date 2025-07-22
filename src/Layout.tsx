import type { ReactNode } from "react";
import { Link } from "react-router";
import { Box, HStack } from "@chakra-ui/react";
import { BsHouse, BsMap, BsPerson } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";

export function Layout({children}: {children: ReactNode}) {
    return (
        <>
            <main>
                {children}
            </main>
            <Box as="nav" position="fixed" bottom={0} left={0} right={0} p={5} background="white" zIndex={9999} borderTop="1px solid black">
                <HStack as="ul" gap={5} justifyContent="center" textAlign="center">
                    <li>
                        <Link to="/">
                            <Box asChild margin="0 auto">
                                <BsHouse />
                            </Box>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                            <Box asChild margin="0 auto">
                                <BsMap />
                            </Box>
                            Map
                        </Link>
                    </li>
                    <li>
                        <Link to="/shows">
                            <Box asChild margin="0 auto">
                                <BiSolidMicrophoneAlt />
                            </Box>
                            Shows
                        </Link>
                    </li>
                    <li>
                        <Link to="/myaccount">
                            <Box asChild margin="0 auto">
                                <BsPerson />
                            </Box>
                            My Account
                        </Link>
                    </li>
                </HStack>
            </Box>
        </>
    )
}