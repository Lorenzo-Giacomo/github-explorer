import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
// https://api.github.com/orgs/rocketseat/repos
// apagamos pq essas variáveis vêm de forma dinâmica
// const repository = {
//   name: 'uniform',
//   description: 'Forms in React',
//   link: 'https://github.com/unform/unform'
// }

interface Repository {
  name:string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  // criar estado para armazenar a listagem de repositórios
  const [repositories, setRepositories] = useState<Repository[]>([])
  // Quando temos um state com array, precisamos definir os tipos referenciando o type criado e indicando que será um array

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  // console.log(repositories) | percebemos q será executado dnv toda vez q houver alteração na propriedade de um componente, todo o componente será renderizado novamente

  return (
    <section className="repository-list" >
      <h1>Lista de repositórios</h1>
      <ul>
        {/* <RepositoryItem repository="unform2" description="" link=""/> */}
        {/* ao invés de passarmos todas as props na tag, passamos por um objeto */}
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository}/>
            
          )
        })}

      </ul>
    </section>
  )
}