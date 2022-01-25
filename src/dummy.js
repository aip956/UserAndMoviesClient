const [fetchMovie, {data: movieSearchedData, error: movieError },
] = useQuery();



<input type="text" placeholder="Interstellar..." onChange={(event) => {setMovieSearched(event.target.value);
                }} />
                <div></div>
                <button 
                    onClick={() => {
                        fetchMovie({
                            variables: {
                                name: movieSearched, 
                            },
                        });
                    }}
                > 
                    {" "}
                    Fetch Data 
                </button>

                <div>
                    {movieSearchedData && (
                    <div>
                        {" "} 
                        <h1>MovieName: {movieSearchedData.movie.name}</h1>{" "}
                        <h1>Year Publication: {movieSearchedData.movie.yearOfPublication}</h1>{" "}
                    </div>
                    )}
                </div>