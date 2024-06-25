import { credentialsLogout } from '@/src/actions/actions';

function LogoutBtn() {
  return (
    <form action={credentialsLogout}>
      <button type="submit">Logout</button>
    </form>
  );
}

export default LogoutBtn;

// Temporary -----------
