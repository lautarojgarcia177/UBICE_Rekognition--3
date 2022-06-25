import { Container, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import DirectoryPicker from "../components/directory-picker";
import FilesPicker from "../components/files-picker";
import { File } from "../../interfaces";
import {
  filterFilesBySupportedImageExtension,
  toBase64,
} from "../../lib/utils";
import axios from "axios";

export default function NumberRekognitionPage() {
  async function filesSelectedHandler(event) {
    const files = event.target.files[0];
    const data = new FormData();
    // for (var x = 0; x < files.length; x++) {
    //   data.append("file", files[x]);
    // }
    data.append('file', files);
    axios
      .post(
        "/api/rekognition",
        {
          data,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // let filesArray: File[] = [];
    // for (let file of files) {
    //   filesArray.push(file);
    // }
    // filesArray = filterFilesBySupportedImageExtension(filesArray);
    // let base64Images = [];
    // for (let image of files) {
    //   const baseImg = await toBase64(image);
    //   base64Images.push(baseImg);
    // }
    // console.log("so far", base64Images);
    // axios
    //   .post("/api/rekognition", {
    //     base64Images
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  useEffect(() => {}, []);
  return (
    <Container>
      <Heading>Reconocer numeros en fotos y etiquetarlas</Heading>
      <Text>Las imagenes deben estar en formato jpg, jpeg o png</Text>
      <DirectoryPicker changeHandler={filesSelectedHandler} />
      <FilesPicker changeHandler={filesSelectedHandler}></FilesPicker>
    </Container>
  );
}
