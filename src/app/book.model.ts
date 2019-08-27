
import { Comment } from './comment';

export class Book
{
  titolo: string;
  prezzo: number;
  descrizione: string;
  nomeUtente1: string;
  nomeutente2: string;
  commenti: Comment[];
}