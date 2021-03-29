import React from "react";
import { Button } from "shards-react";
import { useAuth } from "../../../../context/UserContext";

export default function Logout() {
  const { signOut } = useAuth();

  return <Button onClick={e => signOut()}>Voltar a seleção de usuários</Button>;
}
