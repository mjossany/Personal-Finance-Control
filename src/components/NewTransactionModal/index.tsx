import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState('deposit');

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Close Modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Title' />
        <input placeholder='Valor' />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setTransactionType('deposit') }}
            isActive={transactionType === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => { setTransactionType('withdraw') }}
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Income" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder='Category' />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}