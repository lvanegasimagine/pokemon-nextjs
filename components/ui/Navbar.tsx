import React from 'react'
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { styled } from "@nextui-org/react"
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Box = styled("div", {
    boxSizing: "border-box",
});


export const NavbarPage = () => {
    const { asPath } = useRouter();

    const { theme } = useTheme();

    return (
        <Box
            css={{
                maxW: "100%"
            }}
        >
            <Navbar isBordered variant="static">
                <Navbar.Brand>
                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                        alt="icono de la app"
                        width={70}
                        height={70}
                    />
                    <Link href='/'>
                        <Text color={theme?.colors.blue700.value} h2>P</Text>
                        <Text color={theme?.colors.blue700.value} h3>okemon</Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="highlight-rounded">
                    <Navbar.Link isActive={asPath === '/favorites'} href="/favorites">Favoritos</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </Box>
    )
}
