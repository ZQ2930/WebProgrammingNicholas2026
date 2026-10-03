import { Component } from "react";

class CardClass extends Component {
    render() {
        return (
            <div className="card">
                <h3>Profil Pengguna</h3>
                <p>Tampilan menggunakan Class Component terpisah.</p>
                <p>Nama: {this.props.nama}</p>
                <p>Pekerjaan: {this.props.pekerjaan}</p>
            </div>
        );
    }
}

export default CardClass;