import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <FaTwitter className="logo" />

        <div className="sidebarOption active">
          <FaHome className="icon" />
          <h2 className="sidebarMenu">Home</h2>
        </div>
        <div className="sidebarOption ">
          <FaSearch className="icon" />
          <h2 className="sidebarMenu">Explore</h2>
        </div>
        <div className="sidebarOption ">
          <FaRegBell className="icon" />
          <h2 className="sidebarMenu">Notifications</h2>
        </div>
        <div className="sidebarOption ">
          <FaEnvelope className="icon" />
          <h2 className="sidebarMenu">Messages</h2>
        </div>
        <div className="sidebarOption ">
          <FaRegBookmark className="icon" />
          <h2 className="sidebarMenu">Bookmarks</h2>
        </div>
        <div className="sidebarOption ">
          <FaStackExchange className="icon" />
          <h2 className="sidebarMenu">Lists</h2>
        </div>
        <div className="sidebarOption ">
          <FaUserAlt className="icon" />
          <h2 className="sidebarMenu">Profile</h2>
        </div>
        <div className="sidebarOption ">
          <FaEllipsisH className="icon" />
          <h2 className="sidebarMenu">More</h2>
        </div>
        <button className="sidebar__tweet">Tweet</button>
      </div>

      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
              <img src="./assets/profile.png" alt="profile picture" />
              <input type="text" placeholder="What's happening?" />
            </div>
            <button className="tweetBox__tweetButton">Tweet</button>
          </form>
        </div>

        <div className="post">
          <div className="post__avatar">
            <img src="./assets/1.JPG" alt="post piscture" />
          </div>

          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  Arbenit Bytyçi
                  <span className="post__headerSpecial">
                    <FaCheckCircle className="checkmark-icon" />
                    @arbenitbytyçi
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>The new tesla is SIIIICKKKK!!!!</p>
              </div>
            </div>

            <img src="./assets/car.jpg" alt="post piscture" />

            <div className="post__footer">
              <FaRetweet className="post-icons" />
              <FaHeart className="post-icons" />
              <FaShare className="post-icons" />
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post__avatar">
            <img src="./assets/nico.jpg" alt="post piscture" />
          </div>

          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  Nicolas Marcora
                  <span className="post__headerSpecial">
                    <FaCheckCircle className="checkmark-icon" />
                    @nico
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>Quick JavaScript tutorial!</p>
              </div>
            </div>

            <img src="./assets/js.jpeg" alt="post piscture" />

            <div className="post__footer">
              <FaRetweet className="post-icons" />
              <FaHeart className="post-icons" />
              <FaShare className="post-icons" />
            </div>
          </div>
        </div>
      </div>

      <div className="widgets">
        <div className="widgets__input">
          <FaSearchDollar className="widgets__searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
        </div>

        <div className="post">
          <div className="post__avatar">
            <img src="./assets/elon.jpg" alt="post piscture" />
          </div>

          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  Elon Musk
                  <span className="post__headerSpecial">
                    <FaCheckCircle className="checkmark-icon" />
                    @aelonmusk
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>THIS IS THE NEW TESLA</p>
              </div>
            </div>

            <img src="./assets/car.jpg" alt="post piscture" />

            <div className="post__footer">
              <FaRetweet className="post-icons" />
              <FaHeart className="post-icons" />
              <FaShare className="post-icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
