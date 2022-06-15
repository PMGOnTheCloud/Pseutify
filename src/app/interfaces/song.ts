import { Artist } from './artist';
import { Album } from './album';

export interface Song {
  id: Number,
  title: String,
  title_short: String,
  link: String,
  artist: Artist,
  album: Album
}
