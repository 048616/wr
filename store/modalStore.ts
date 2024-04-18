import { defineStore } from 'pinia'

interface activeModal {
  name: string
  travelUid: string
}

export const useModalStore = defineStore({
  id: 'ModalStore',
  state: () => {
    return {
      activeModal: {
        name: '',
        travelUid: '',
      } as activeModal,
    }
  },
  actions: {
    setActiveModal(payload: object): void {
      console.log(payload)
      this.activeModal.name = payload.name
      this.activeModal.travelUid = payload.travelUid
    },
    closeModal(): void {
      this.activeModal.name = ''
      this.activeModal.travelUid = ''
    },
  },
})
