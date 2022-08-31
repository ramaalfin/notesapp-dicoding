const Search = ({ cari }) => {
    return (
        <div>
            <input className="cari-note" type='text' placeholder="cari judul..." onChange={(event) => cari(event)} />
        </div>
    )
}

export default Search;