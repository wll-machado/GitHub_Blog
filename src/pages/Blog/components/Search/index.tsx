import { zodResolver } from "@hookform/resolvers/zod";
import { SearchContainer } from "./styles"
import * as z from 'zod';
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
}) 

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number;
  getPosts: (query?: string) => Promise<void>
}

function SearchInput({getPosts, postsLength}:SearchInputProps) {

  const {register, handleSubmit} = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data:SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicaçoes</h3>
        <span>{postsLength} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteudo" {...register('query')}/>
    </SearchContainer>
  )
}

export default SearchInput
