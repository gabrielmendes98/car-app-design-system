import { Icon } from '@iconify/react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import { useAppSelector } from 'store/hooks';
import {
  hideModal,
  selectModalVisible,
  selectModalContent,
} from 'store/slices/modal';
import { IconButton } from 'components/Button';
import { ButtonContainer, Container, Wrapper } from './styles';

const Modal = () => {
  const ref = useRef(null);
  const visible = useAppSelector(selectModalVisible);
  const content = useAppSelector(selectModalContent);
  const dispatch = useDispatch();

  useOnClickOutside(ref, () => dispatch(hideModal()));

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [visible]);

  if (visible) {
    return createPortal(
      <Wrapper id="modal-container">
        <Container ref={ref} role="dialog" aria-modal="true">
          <ButtonContainer>
            <IconButton
              title="fechar modal"
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
