import { Song } from "../../songs/models/song.model";

export class Album {
    id!: string;
    title!: string;
    artist!: string;
    year!: number;
    songs: Song[]=[];   
 
}
