import { ChangeEvent, FormEvent, ReactNode, useRef, useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import {
  DataPart,
  Form,
  ImagePart,
  ImagePreview,
  ContentWrapper,
  ActionsWrapper,
} from './styles';

export interface FormSubmitFields extends FormFields {
  image: Blob | string;
}

interface FormFields {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('image', image.file);
    formData.append('imageUrl', image.preview); // como nao tem backend, fiz isso pra depois ser possivel resgatar a imagem na edição

    const fieldValues = Object.fromEntries(
      formData.entries(),
    ) as unknown as FormSubmitFields;
    onSubmit(fieldValues, formData, e);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <ContentWrapper>
        <ImagePart>
          <ImagePreview>
            {image.preview && (
              <img src={image.preview} alt="preview da imagem do carro" />
            )}
          </ImagePreview>
          <input
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
          <Input initialValue={initialValues.year} name="year" label="Ano" />
          <Input
            initialValue={initialValues.maxSpeed}
            name="maxSpeed"
            label="Velocidade Máxima Km/h"
          />
          <Input
            initialValue={initialValues.economyRate}
            name="economyRate"
            label="Nota economia"
          />
          <Input
            initialValue={initialValues.usersRate}
            name="usersRate"
            label="Nota usuários"
          />
          <Input
            initialValue={initialValues.link}
            name="link"
            label="Link produto"
          />
        </DataPart>
      </ContentWrapper>

      <ActionsWrapper>{children}</ActionsWrapper>
    </Form>
  );
};

export default CarForm;
