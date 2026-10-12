function TombolAksi(){
    const handleClick = () => {
        alert("Tombol Berhasil diklik!");
    };
    return(
        <button onClick={handleClick} className="btn-primary">
            Klik Saya
        </button>
    );
}
export default TombolAksi;