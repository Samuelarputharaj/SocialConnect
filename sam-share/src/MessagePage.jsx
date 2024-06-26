import './MessagePage.css';
function MessagePage({ setPageTab, userId}) {
    return(
        <>
            <header>
          <div className="header-area">
            <div>
              <i className="fa-solid fa-arrow-left" onClick={() =>setPageTab("home")}/>
            </div>
            <span className="id-name">
              <b>sam_dood1</b>
              <i className="fa-solid fa-chevron-down" />
            </span>
            <span />
            <div>
              <i className="fa-regular fa-pen-to-square" />
            </div>
          </div>
        </header>
        <section>
          <div className="search-box">
          <input type="text" />
          </div>
          <div className="storyarea">
            <div className="mes-circle1">
              <div className="cirimg1" />
              <p id="story1">your story</p>
            </div>
            <div className="mes-circle2">
              <div className="cirimg2" />
              <p id="story2">fortuner</p>
            </div>
            <div className="mes-circle3">
              <div className="cirimg3" />
              <p id="story3">crysta</p>
            </div>
            <div className="mes-circle4">
              <div className="cirimg4" />
              <p id="story4">scorbio</p>
            </div>
          </div>
          <div className="sentence">
            <div className="msg">
              <p>
                <b>Messages</b>
              </p>
            </div>
            <div className="req">
              <p>
                <b>Requests</b>
              </p>
            </div>
          </div>
        </section>
        <main>
          <div />
        </main>
      </>
      
    );
}
export default MessagePage;