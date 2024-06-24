import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Blog
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Sharing my thoughts on web development, programming, and technology.
          </Text>
        </Box>
        <Box>
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Recent Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Understanding React Hooks</Heading>
              <Text mt={4}>A deep dive into the world of React Hooks and how they can simplify your code.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">JavaScript ES2021 Features</Heading>
              <Text mt={4}>An overview of the latest features introduced in JavaScript ES2021.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">CSS Grid Layout</Heading>
              <Text mt={4}>Learn how to create complex layouts easily with CSS Grid.</Text>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;