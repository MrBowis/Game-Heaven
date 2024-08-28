import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "../Styles/Games.module.css";
import { isAuthenticated } from "../utils/auth";

function Games() {
    const games = [
        {
            id: 1,
            name: "Super Mario Bros",
            image: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
            description: "Super Mario Bros. is a platform game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., it was released in Japan in 1985 for the Famicom, and in North America and Europe for the Nintendo Entertainment System (NES) in 1985 and 1987 respectively. Players control Mario, or his brother Luigi in the multiplayer mode, as they travel the Mushroom Kingdom to rescue Princess Toadstool from Bowser. They must traverse side-scrolling stages while avoiding hazards such as enemies and pits with the aid of power-ups such as the Super Mushroom, Fire Flower, and Starman.",
        },
        {
            id: 2,
            name: "The Legend of Zelda",
            image: "https://es.web.img2.acsta.net/pictures/16/08/26/12/22/561127.jpg",
            description: "The Legend of Zelda is a high-fantasy action-adventure video game series created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo. The series' gameplay incorporates elements of action, adventure, and puzzle-solving games.",
        },
        {
            id: 3,
            name: "Tetris",
            image: "https://m.media-amazon.com/images/M/MV5BMjFkNjk3MjktMmU2Ny00MDlmLWE5ZTctM2Y4ZDU4YzkwMjFiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
            description: "Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a war of the late 1980s. After a significant period of publication by Nintendo, the rights reverted to Pajitnov in 1996, who co-founded The Tetris Company with Henk Rogers to manage licensing. The game has been published by many companies on many gaming platforms.",
        },

    ];

    if (!isAuthenticated()) {
        return (
            <div>
                <Header />
                <div className={styles.message}>Debes iniciar sesión para ver los juegos</div>
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className={styles.content}>
                {games.map((game) => (
                    <div className={styles.card}>
                        <img src={game.image} alt={game.name} className={styles.image} />
                        <h2 className={styles.card_header}>{game.name}</h2>
                        <p className={styles.card_content}>{game.description}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Games
