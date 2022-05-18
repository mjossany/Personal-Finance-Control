import logoImg from '../../assets/$.svg';
import { Container, Content, LogoAndTitle } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return(
    <Container>
      <Content>
        <LogoAndTitle>
          <img src={logoImg} alt="save me" />
          <h1>Save me!</h1>
        </LogoAndTitle>
        <button
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          New Transaction
        </button>
      </Content>
    </Container>
  )
}