import { genres } from "../assets/constants";
import { SongCard } from "../components";
const Discover = () => {

    let cover = "POP"
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-between flex-col sm:flex-row items-center mt-4 mb-10">
          <h3 className="text-2xl text-white  mb-2 sm:mb-0 px">Discover {cover}</h3>
          <select
            className="outline-none bg-black text-indigo-400 p-3 text-sm focus:outline-indigo-400 rounded-lg"
            value=""
            onChange={() => {}}
          >
            {genres.map((gen) => (
              <option key={gen.value} value={gen.value}>
                {gen.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex sm:justify-start justify-center gap-8 flex-wrap">
            {[0,1,2,3,4,5,6,7,8,9].map((song,i)=>(
                    <SongCard
                    key={song.key}
                    i={i}
                    song={song}
                    />
            ))}


        </div>
      </div>
    </>
  );
};

export default Discover;
