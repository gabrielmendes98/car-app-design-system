import { Icon } from '@iconify/react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import {
  hideModal,
  selectModalVisible,
  selectModalContent,
} from 'store/slices/modal';
import { IconButton } from 'components/Button';
import { ButtonContainer, Container, Wrapper } from './styles';

const Modal = () => {
  const visible = useAppSelector(selectModalVisible);
  const content = useAppSelector(selectModalContent);
  const dispatch = useDispatch();

  if (visible) {
    return createPortal(
      <Wrapper>
        <Container>
          <ButtonContainer>
            <IconButton
              title="close modal"
              onClick={() => dispatch(hideModal())}
              size={1.3125}
            >
              <Icon icon="ant-design:close-circle-outlined" />
            </IconButton>
          </ButtonContainer>

          {content}
        </Container>
      </Wrapper>,
      document.getElementById('modal-root')!,
    );
  } else return null;
};

export default Modal;
