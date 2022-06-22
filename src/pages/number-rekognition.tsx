import { Container, Heading, Text } from "@chakra-ui/react";
import DirectoryPicker from "../components/directory-picker";

export default function NumberRekognitionPage() {
  return (
    <Container>
      <Heading>Reconocer numeros en fotos y etiquetarlas</Heading>
      <Text>Las imagenes deben estar en formato jpg, jpeg o png</Text>
      <DirectoryPicker />
    </Container>
  );
}
