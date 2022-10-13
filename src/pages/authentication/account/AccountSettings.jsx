import { useParams } from 'react-router-dom';
import ChangeAccountData from './changeAccountData/ChangeAccountData';

export default function AccountSettings() {
  const { settings } = useParams();

  switch (settings) {
    case 'userdata':
      return <ChangeAccountData />;
  }
}
