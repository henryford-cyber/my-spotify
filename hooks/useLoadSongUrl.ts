
import { Song } from "@/type";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return '';
  }

  const { data: data } = supabaseClient
  .storage
  .from('songs')
  .getPublicUrl(song.song_path);
  
  return data.publicUrl;
};

export default useLoadSongUrl;