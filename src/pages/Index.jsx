import { Container, VStack, Heading, Text, Box, Image, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10} bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("black", "white")}>
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
        <Box textAlign="center">
          <Button as={RouterLink} to="/new-post" colorScheme="blue">
            Add New Post
          </Button>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Recent Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
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