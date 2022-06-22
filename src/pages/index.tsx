import {
  Button,
  Center,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";

const Index = () => (
  <VStack>
    <Heading>UBICE Rekognition</Heading>
    <Text>
      Aplicación de reconocimiento en fotos a través de Inteligencia Artificial
    </Text>
    <Wrap>
      <WrapItem>
        <Link href="/number-rekognition">
          <Center w="180px" h="80px" bg="red.200">
            Reconocer y etiquetar numeros de corredores en fotos
          </Center>
        </Link>
      </WrapItem>
    </Wrap>
  </VStack>
);

export default Index;
