import axios from 'axios';
import './HomePage.css';
import { useState } from 'react';
function HomePage({ setPageTab, userId}) {
  
  const HeartComponent = () => {
    const [filled, setFilled] = useState(false);
  const handleHeartClick = async () => {
    try {
      // Toggle the filled state
      setFilled(!filled);

      // Update the backend
      await axios.post('/heart', { filled: !filled });
    } catch (err) {
      console.error(err);
    }
  };
  }
  return (
    <>
      <header>
        <div id="container">
          <div className="logo">
            <img src="./images.png" />
          </div>
          <div>
            <i className="fa-regular fa-heart" />
          </div>
            <i className="fa-brands fa-facebook-messenger" onClick={() =>setPageTab("chat")}/>
        </div>
      </header>
      <section>
        <div className="storyarea">
          <div className="circle1">
            <div className="cirimg1" />
            <p id="story1">your story</p>
          </div>
          <div className="circle2">
            <div className="cirimg2" />
            <p id="story2">freak_24</p>
          </div>
          <div className="circle3">
            <div className="cirimg3" />
            <p id="story3">its_shabana</p>
          </div>
          <div className="circle4">
            <div className="cirimg4" />
            <p id="story4">abc</p>
          </div>
        </div>
      </section>
      {/* <div> */}
      {/* <div className="postshow"> */}
      <div className="profile">
        <div className="profilemy"></div>
        <div className="instaid-1">
          <b>sam_dood1</b>
        </div>
        <div>
          <i
            className="fa-solid fa-ellipsis-vertical"
            id="fa-ellipsis-vertical-1"
          />
        </div>
      </div>
      {/* <div className="other-insta-post"> */}
      <div className="status-box" id="box1"></div>
      <div className="img-icons">
        <div>
           <i className={`fa-regular fa-heart${filled ? ' active' : ''}`} onClick={handleHeartClick}></i>
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 2 code(photos or videos) */}
      <div className="profile">
        <div className="nature"></div>
        <div className="instaid-2">
          <b>natureonspoon</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-2"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box2"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 3 code(photos or videos) */}
      <div className="profile">
        <div className="sun"></div>
        <div className="instaid-3">
          <b>sun_pic</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-3"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box3"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 4 code(photos or videos) */}
      <div className="profile">
        <div className="mobile"></div>
        <div className="instaid-4">
          <b>bala_mobiles</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-4"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box4"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 5 code(photos or videos) */}
      <div className="profile">
        <div className="malavika"></div>
        <div className="instaid-5">
          <b>malavika_manoj</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-5"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box5"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 6 code(photos or videos) */}
      <div className="profile">
        <div className="betta"></div>
        <div className="instaid-6">
          <b>betta_fish</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-6"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box6"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 7 code(photos or videos) */}
      <div className="profile">
        <div className="fullmoon"></div>
        <div className="instaid-7">
          <b>betta_farm</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-7"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box7"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 8 code(photos or videos) */}
      <div className="profile">
        <div className="flower"></div>
        <div className="instaid-8">
          <b>flowers</b>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-8"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box8"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 9 code(photos or videos) */}
      <div className="profile">
        <div className="rose"></div>
        <div className="instaid-9">
          <b>lovely_rose</b>
        </div>
        <div>

          <i
            className="fa-solid fa-ellipsis-vertical"
            id="fa-ellipsis-vertical-9"
          />

        </div>
      </div>
      <div className="status-box" id="box9"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* box 10 code(photos or videos) */}
      <div className="profile">
        <div className="car"></div>
        <div>
          <p className="instaid-10">
            <b>car_world</b>
          </p>
        </div>
        <div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              id="fa-ellipsis-vertical-10"
            />
          </div>
        </div>
      </div>
      <div className="status-box" id="box10"></div>
      <div className="img-icons">
        <div>
          <i className="fa-regular fa-heart" id="heart" />
        </div>
        <div>
          <i className="fa-regular fa-comment" id="comment" />
        </div>
        <div>
          <i className="fa-solid fa-location-arrow" id="share" />
        </div>
        <div>
          <i className="fa-regular fa-bookmark" id="bookmark" />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      <footer>
        <div className="footer-area">
          <div>
            <i class="fa-solid fa-house " />
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div>
            <i className="fa-regular fa-square-plus" />
          </div>
          <div>
            <i className="fa-brands fa-youtube" />
          </div>
          <div className="smallcircle" onClick={() =>setPageTab("about")} />
        </div>
      </footer>
    </>

  );
}
export default HomePage;