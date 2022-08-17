import { ChangeEvent, FormEvent, ReactNode, useRef, useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Text from 'components/Text';
import {
  DataPart,
  Form,
  ImagePart,
  ImagePreview,
  ContentWrapper,
  ActionsWrapper,
} from './styles';
import { validations } from './utils';

export interface FormSubmitFields extends FormFields {
  image: Blob | string;
}

export interface FormFields {
  imageUrl: string;
  name: string;
  year: string;
  maxSpeed: string;
  economyRate: string;
  usersRate: string;
  link: string;
}

interface Props {
  initialValues: FormFields;
  children: ReactNode;
  onSubmit: (
    values: FormSubmitFields,
    formData: FormData,
    e: React.FormEvent<HTMLFormElement>,
  ) => void;
}

const CarForm = ({ initialValues, children, onSubmit }: Props) => {
  const [valid, setValid] = useState(true);
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<{ preview: string; file: Blob | string }>({
    preview: '',
    file: '',
  });

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      });

      e.target.value = '';
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('image', image.file);
    formData.append('imageUrl', image.preview || initialValues.imageUrl); // como nao tem backend, fiz isso pra depois ser possivel resgatar a imagem na edição

    const fieldValues = Object.fromEntries(
      formData.entries(),
    ) as unknown as FormSubmitFields;

    const isValid = await validations.isValid(fieldValues);

    if (!isValid) {
      setValid(false);
      return;
    }

    onSubmit(fieldValues, formData, e);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <ContentWrapper>
        <ImagePart>
          <ImagePreview>
            {(image.preview || initialValues.imageUrl) && (
              <img
                src={image.preview || initialValues.imageUrl}
                alt="preview da imagem do carro"
              />
            )}
          </ImagePreview>
          <input
            id="image-input"
            type="file"
            name="image"
            ref={imageRef}
            hidden
            onChange={onImageChange}
          />
          <Button
            variant="text"
            marginTop={1}
            onClick={() => imageRef.current?.click()}
          >
            Selecionar imagem
          </Button>
        </ImagePart>

        <DataPart>
          <Input initialValue={initialValues.name} name="name" label="Nome" />
          <Input
            initialValue={initialValues.year}
            name="year"
            label="Ano"
            type="number"
          />
          <Input
            initialValue={initialValues.maxSpeed}
            name="maxSpeed"
            label="Velocidade Máxima Km/h"
            type="number"
          />
          <Input
            initialValue={initialValues.economyRate}
            name="economyRate"
            label="Nota economia"
            type="number"
          />
          <Input
            initialValue={initialValues.usersRate}
            name="usersRate"
            label="Nota usuários"
            type="number"
          />
          <Input
            initialValue={initialValues.link}
            name="link"
            label="Link produto"
          />
        </DataPart>
      </ContentWrapper>

      {!valid && (
        <Text textAlign="end" marginTop={2} color="red">
          Formulário inválido!
        </Text>
      )}

      <ActionsWrapper>{children}</ActionsWrapper>
    </Form>
  );
};

export default CarForm;
