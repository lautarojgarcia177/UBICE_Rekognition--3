import { Container, Heading, Text } from "@chakra-ui/react";
import DirectoryPicker from "../components/directory-picker";
import FilesPicker from "../components/files-picker";
import axios from "axios";

export default function NumberRekognitionPage() {
  async function filesSelectedHandler(event) {
    const files = event.target.files;
    const data = new FormData();
    for (var x = 0; x < files.length; x++) {
      data.append("file", files[x]);
    }
    axios
      .post(
        "/api/rekognition",
        {
          data,
        },
        {
          headers: {
            "Transfer-Encoding": "multipart/form-data",
            "Content-Type": "multipart/form-data"
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
