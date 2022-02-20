import React from 'react'
import './styles.css'
function App() {
  return (
    <div className="App">
      <nav className='container-xxl bg-dark'>
        <div className="logo" />
        <input type="text" className='form-control' placeholder='Search for reviews' />
        <div className='text-light'>
          <span className="category-item fs-5">Films</span>
          <span className="category-item fs-5">Games</span>
          <span className="category-item fs-5">Books</span>
          <span className="category-item fs-5">Music</span>
        </div>
        <button className='btn btn-primary'>Sign in</button>
      </nav>
      <section className='container-xxl text-light main-section'>
        <div className="row">
          <div className="col-9">
            <div className="review-container mb-5">
              <div className="review px-5">
                <h2 className="title text-center py-3 mb-0">AMAZING SPIDER MAN IS NOT MY HERO ANYMORE...</h2>
                <div className="description pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam nesciunt labore ratione atque dolorem aliquam hic placeat. Deleniti ipsum aliquid cum suscipit illum repudiandae vitae nobis voluptatum molestiae repellendus?
                  Qui nisi harum numquam eum, vel aut totam corrupti, error eligendi labore in id doloribus amet laboriosam recusandae suscipit aliquam porro consequatur velit consequuntur. Neque pariatur quae assumenda quo atque!
                  Repudiandae itaque, fugiat atque debitis tempore facere hic esse excepturi ea obcaecati rem mollitia et odit, consectetur quam maxime, quos ab. Quos vitae ex dolores excepturi a omnis neque laborum?
                  Sit quidem incidunt error unde quae eos voluptatum ad, a perferendis exercitationem, culpa eius autem dolores doloribus aliquid eaque explicabo voluptatibus minus. Autem consectetur asperiores, dolorem commodi aspernatur dicta repudiandae.
                  Deserunt sint ducimus, pariatur, maxime aspernatur earum ab ipsum nesciunt voluptatem culpa eius nam assumenda quis ad inventore necessitatibus deleniti quibusdam qui optio. Architecto aut dicta itaque culpa soluta amet?</div>
                <div className="score pb-3" title='Very bad'>
                  <div className="star bg-danger"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
              </div>
              <div className="feedback">
                <div className="comments-panel">
                  <span className='fw-bold ms-5'>Comments&nbsp;</span>
                  <span>(10)</span>
                  <div className="down-arrow ms-3"></div>
                </div>

                <div className="like-panel">
                  <div className="likes-count me-3 fw-bold">999</div>
                  <div className="like me-5"></div>
                </div>

              </div>
            </div>
            <div className="review-container mb-5">
              <div className="review px-5">
                <h2 className="title text-center py-3 mb-0">AMAZING SPIDER MAN IS NOT MY HERO ANYMORE...</h2>
                <div className="description pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam nesciunt labore ratione atque dolorem aliquam hic placeat. Deleniti ipsum aliquid cum suscipit illum repudiandae vitae nobis voluptatum molestiae repellendus?
                  Qui nisi harum numquam eum, vel aut totam corrupti, error eligendi labore in id doloribus amet laboriosam recusandae suscipit aliquam porro consequatur velit consequuntur. Neque pariatur quae assumenda quo atque!
                  Repudiandae itaque, fugiat atque debitis tempore facere hic esse excepturi ea obcaecati rem mollitia et odit, consectetur quam maxime, quos ab. Quos vitae ex dolores excepturi a omnis neque laborum?
                  Sit quidem incidunt error unde quae eos voluptatum ad, a perferendis exercitationem, culpa eius autem dolores doloribus aliquid eaque explicabo voluptatibus minus. Autem consectetur asperiores, dolorem commodi aspernatur dicta repudiandae.
                  Deserunt sint ducimus, pariatur, maxime aspernatur earum ab ipsum nesciunt voluptatem culpa eius nam assumenda quis ad inventore necessitatibus deleniti quibusdam qui optio. Architecto aut dicta itaque culpa soluta amet?</div>
                <div className="score pb-3" title='Very bad'>
                  <div className="star bg-danger"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
              </div>
              <div className="feedback">
                <div className="comments-panel">
                  <span className='fw-bold ms-5'>Comments&nbsp;</span>
                  <span>(10)</span>
                  <div className="down-arrow ms-3"></div>
                </div>

                <div className="like-panel">
                  <div className="likes-count me-3 fw-bold">999</div>
                  <div className="like me-5"></div>
                </div>

              </div>
            </div>
            



          </div>
          <div className="col-3">
            <div className="filters">
              <h4 className="text-center py-3 pb-4">Filters</h4>

              <div className="toolbar">
                {/* <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
