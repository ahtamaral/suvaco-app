import React from "react";
import { renderTitleSubtitle } from "../functions";
import { Link } from "react-router-dom";
import './Divinas.css'
import { rightRender } from "../functions";

function PageDivinas(props){
    return(
    <section>
        <div className="section-container">
            {renderTitleSubtitle(props.title, props.subtitle)}
            <main>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nostrum impedit eligendi autem earum reprehenderit eveniet deserunt incidunt et reiciendis vel deleniti ad similique necessitatibus nisi non, laboriosam tenetur eos.
                Maiores, nisi sed! Eum, nesciunt? Distinctio provident obcaecati molestiae natus cum officiis numquam, eligendi in excepturi, accusamus dolor. Veritatis iusto aliquam perspiciatis dolore tempore voluptas suscipit corporis officiis vitae animi!
                Laborum alias enim modi autem! Laboriosam non atque maiores quibusdam labore aliquid placeat illum quia, ad modi enim ullam, similique dolore impedit molestiae consectetur! Aliquid labore tempore totam amet excepturi?
                Eveniet molestias nam mollitia vitae, dicta nihil fugit error. Accusantium nulla, deserunt eligendi obcaecati repudiandae atque? Ipsum praesentium sed assumenda veritatis consequuntur, aut sit ullam a, dolorem voluptatibus ea necessitatibus.
                Ullam culpa unde adipisci totam voluptas quo debitis distinctio recusandae. Quo quod, repudiandae harum magni praesentium rerum eveniet, quasi voluptatum corporis corrupti deserunt doloribus eum eius cupiditate facilis non quisquam.
                Placeat aut dolorem dolorum libero facilis maxime quibusdam necessitatibus unde, adipisci ullam labore, impedit mollitia sit exercitationem perspiciatis iste est cupiditate suscipit delectus, recusandae ex amet sed? Cupiditate, libero quae!
                Sapiente aliquam magnam perferendis asperiores recusandae libero nemo minima! Corrupti sequi ipsam placeat impedit adipisci quisquam aliquam deserunt eveniet ex. Veritatis pariatur quis, libero tempora fuga ab itaque? Ad, error.
                Quibusdam sunt veniam laborum. Laudantium explicabo pariatur perspiciatis voluptate, illum minima beatae facilis ipsam, hic odio perferendis, eaque eius! Accusantium, eaque impedit? Distinctio doloremque nam amet rem earum nihil aspernatur.
                Ducimus quod voluptatem molestiae in laborum vel. Excepturi omnis, magni maiores praesentium at quisquam dolorem cumque numquam quos incidunt in deserunt obcaecati iure veniam et nihil tenetur sapiente laboriosam commodi?
                Nesciunt fuga quo mollitia perspiciatis nihil culpa error quam delectus, atque nostrum, non aspernatur iure. Dicta dolores amet quisquam provident eum iste facilis nisi rerum! Debitis deserunt veniam assumenda unde.

                    </p>
                <img className= "img-divinas-ong" src="img/327061573_573006838013992_1583039500011356462_n 1.png" alt="" />

                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nostrum impedit eligendi autem earum reprehenderit eveniet deserunt incidunt et reiciendis vel deleniti ad similique necessitatibus nisi non, laboriosam tenetur eos.
                Maiores, nisi sed! Eum, nesciunt? Distinctio provident obcaecati molestiae natus cum officiis numquam, eligendi in excepturi, accusamus dolor. Veritatis iusto aliquam perspiciatis dolore tempore voluptas suscipit corporis officiis vitae animi!
                Laborum alias enim modi autem! Laboriosam non atque maiores quibusdam labore aliquid placeat illum quia, ad modi enim ullam, similique dolore impedit molestiae consectetur! Aliquid labore tempore totam amet excepturi?
                Eveniet molestias nam mollitia vitae, dicta nihil fugit error.

                </p>
                {rightRender("Redes Sociais da ONG", "FIQUE CONECTADO COM O PROJETO", "True")}

                <div className="links-ong">

                    <Link src="#"><i className="ri-instagram-line"></i> Instagram</Link>
                    <Link src="#"><i className="ri-youtube-line"></i> Youtube</Link>
                    <Link src="#"><i className="ri-facebook-box-line"></i> Facebook</Link>
                    <Link src="#"><i className="ri-mail-line"></i> Email</Link>
                </div>

            </main>
            <div className="footer-section">
                        <Link id="link-txt" to="/">VOLTAR</Link>
                        <div className="line"></div>
            </div>
        </div>

        



    </section>)
}

export default PageDivinas;