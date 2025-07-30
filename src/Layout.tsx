import type { ReactNode } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router";
import { Box, Circle, Float, HStack, Text } from "@chakra-ui/react";
import { BsHouseFill, BsMapFill, BsPersonFill } from "react-icons/bs";
import { BiSolidBell, BiSolidMicrophoneAlt } from "react-icons/bi";

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
            <Box
                as="nav"
                className="main-navigation"
                position="fixed"
                bottom={0}
                left={0}
                right={0}
                pl={5}
                pr={5}
                zIndex={9999}
                fontSize={15}
            >
                <HStack as="ul" justifyContent="center" textAlign="center" gap={0}>
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
                        <NavLink to="/notifications" className={getClassName}>
                            <Box pos="relative">
                                <>
                                    <Box asChild margin="0 auto">
                                        <BiSolidBell size={22} />
                                    </Box>
                                    <Float offsetY="0" offsetX="4">
                                        <Circle size="4" bg="red" color="white" fontSize={10}>
                                            1
                                        </Circle>
                                    </Float>
                                </>
                            </Box>
                            <Text fontSize="10px">
                                Notifications
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