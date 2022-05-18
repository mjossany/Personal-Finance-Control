import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      transactionType,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setTransactionType('deposit');
    onRequestClose()
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder='Title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          placeholder='Value'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
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
        <input 
          placeholder='Category'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}