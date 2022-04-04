// Não é necessário tipar tudo q vem da api, somente aquilo q será utilizado na aplicação.
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

// dizer oq espera receber no parametro pra quem utilizar essa função saiba exatamente oq passar para ele.
export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li> 
          {/* ?? 'default' é utilizado caso queira utilizar um valor padrão */}
          <strong>{props.repository?.name }</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>
            Acessar repositórios
          </a>
    </li>
  )
}