import { Container, Heading, Text } from "@chakra-ui/react";
import DirectoryPicker from "../components/directory-picker";
import FilesPicker from "../components/files-picker";

export default function NumberRekognitionPage() {
  async function filesSelectedHandler(event) {
    const files = event.target.files;
    const data = new FormData();
    for (var x = 0; x < files.length; x++) {
      data.append("file", files[x]);
    }
    fetch("/api/rekognition", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        console.log("yay!", response);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <Container>
      <Heading>Reconocer numeros en fotos y etiquetarlas</Heading>
      <Text>Las imagenes deben estar en formato jpg, jpeg o png</Text>
      <DirectoryPicker changeHandler={filesSelectedHandler} />
      <FilesPicker changeHandler={filesSelectedHandler}></FilesPicker>
    </Container>
  );
}
