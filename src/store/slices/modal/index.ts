import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { RootState } from 'store';

interface ModalState {
  visible: boolean;
  content: ReactElement | null;
}

const initialState: ModalState = {
  visible: false,
  content: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<ReactElement>) => {
      state.visible = true;
      state.content = action.payload;
    },
    hide: state => {
      state.visible = false;
    },
  },
});

export const { show: showModal, hide: hideModal } = modalSlice.actions;

export const selectModalVisible = (state: RootState) => state.modal.visible;
export const selectModalContent = (state: RootState) => state.modal.content;

export default modalSlice.reducer;
