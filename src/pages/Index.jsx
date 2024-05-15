import { Container, Text, VStack, Box, Heading, Button, IconButton, Image } from "@chakra-ui/react";
import { FaWater, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="red.500" color="white">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Водоканал
          </Heading>
          <Text fontSize="xl">Обеспечение чистой водой вашего дома</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1541941392960-652036ca567e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHN1cHBseXxlbnwwfHx8fDE3MTU3OTA3MTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Water Supply" borderRadius="md" />
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={2}>
            Контакты
          </Heading>
          <VStack spacing={2}>
            <Button leftIcon={<FaPhone />} colorScheme="whiteAlpha" variant="outline">
              +7 (123) 456-78-90
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="whiteAlpha" variant="outline">
              info@vodokanal.ru
            </Button>
          </VStack>
        </Box>
        <Box textAlign="center">
          <IconButton aria-label="Water Icon" icon={<FaWater />} size="lg" isRound colorScheme="whiteAlpha" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
