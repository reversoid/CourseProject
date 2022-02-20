import React from "react"
import { ReviewContentScore } from "./ReviewContentScore"

export const ReviewContent = () => {
    return (
        <div className="reviewContent px-5">
            <h2 className="title text-center py-3 mb-0">AMAZING SPIDER MAN IS NOT MY HERO ANYMORE...</h2>
            <div className="description pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam nesciunt labore ratione atque dolorem aliquam hic placeat. Deleniti ipsum aliquid cum suscipit illum repudiandae vitae nobis voluptatum molestiae repellendus?
                Qui nisi harum numquam eum, vel aut totam corrupti, error eligendi labore in id doloribus amet laboriosam recusandae suscipit aliquam porro consequatur velit consequuntur. Neque pariatur quae assumenda quo atque!
                Repudiandae itaque, fugiat atque debitis tempore facere hic esse excepturi ea obcaecati rem mollitia et odit, consectetur quam maxime, quos ab. Quos vitae ex dolores excepturi a omnis neque laborum?
                Sit quidem incidunt error unde quae eos voluptatum ad, a perferendis exercitationem, culpa eius autem dolores doloribus aliquid eaque explicabo voluptatibus minus. Autem consectetur asperiores, dolorem commodi aspernatur dicta repudiandae.
                Deserunt sint ducimus, pariatur, maxime aspernatur earum ab ipsum nesciunt voluptatem culpa eius nam assumenda quis ad inventore necessitatibus deleniti quibusdam qui optio. Architecto aut dicta itaque culpa soluta amet?
            </div>
            {/* PICTURES HERE MAYBE CENTERED SLIDER */}
            <ReviewContentScore />
        </div>
    )
}