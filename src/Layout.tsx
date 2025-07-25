import type { ReactNode } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router";
import { Box, HStack, Text } from "@chakra-ui/react";
import { BsHouseFill, BsMapFill, BsPersonFill } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";

export function Layout({children}: {children: ReactNode}) {
    const getClassName = ({ isActive, isPending }: NavLinkRenderProps) =>
        isActive
            ? "active"
            : isPending
            ? "pending"
            : "";

    return (
        <>
            <main>
                {children}
            </main>
            <Box as="nav" className="main-navigation" position="fixed" bottom={0} left={0} right={0} pl={5} pr={5} zIndex={9999} fontSize={15}>
                <HStack as="ul" justifyContent="center" textAlign="center">
                    <li>
                        <NavLink to="/" className={getClassName}>
                            <Box asChild margin="0 auto">
                                <BsHouseFill size={22} />
                            </Box>
                            <Text fontSize="10px">
                                Home
                            </Text>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/map" className={getClassName}>
                            <Box asChild margin="0 auto">
                                <BsMapFill size={22} />
                            </Box>
                            <Text fontSize="10px">
                                Map
                            </Text>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shows" className={getClassName}>
                            <Box asChild margin="0 auto">
                                <BiSolidMicrophoneAlt size={22} />
                            </Box>
                            <Text fontSize="10px">
                                Shows
                            </Text>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myaccount" className={getClassName}>
                            <Box asChild margin="0 auto">
                                <BsPersonFill size={22} />
                            </Box>
                            <Text fontSize="10px">
                                My Account
                            </Text>
                        </NavLink>
                    </li>
                </HStack>
            </Box>
        </>
    )
}