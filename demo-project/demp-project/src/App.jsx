import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <h1>
        3 Days in Ratnagiri & Chiplun{" "}
        <img src="images/mountain.png" alt="Mountain Icon" />
      </h1>
      <p class="subtitle">
        Trip Duration: 14th June - 18th June (3 Days & 4 Nights)
      </p>

      <section class="timeline">
        <article class="timeline-item">
          <div class="content">
            <div class="date-header">14–15th June: Departure & Arrival</div>
            <div class="content-body">
              <div class="content-img">
                <img
                  src="images/01-ratnagiri.jfif"
                  alt="Ratnagiri train station"
                />
              </div>
              <div class="content-text">
                <ul>
                  <li>
                    Train departure at <span class="time">8:00 PM</span>
                  </li>
                  <li>
                    Arrive at Ratnagiri by <span class="time">6:00 AM</span>
                  </li>
                  <li>Transfer to Chiplun by local train</li>
                  <li>Reach Nirmal Vadi</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="timeline-item">
          <div class="content">
            <div class="date-header">
              15th June: Rest & Explore Village (Day-1)
            </div>
            <div class="content-body">
              <div class="content-img">
                <img
                  src="images/02-chiplun.jfif"
                  alt="Exploring Chiplun village"
                />
              </div>
              <div class="content-text">
                <ul>
                  <li>Relax</li>
                  <li>Explore village areas</li>
                  <li>Visit river</li>
                  <li>Play cricket</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="timeline-item">
          <div class="content">
            <div class="date-header">16th June: Nageshwar Trek (Day-2)</div>
            <div class="content-body">
              <div class="content-img">
                <img src="images/03.nageshwar" alt="Nageshwar trek trail" />
              </div>
              <div class="content-text">
                <ul>
                  <li>
                    Start between <span class="time">6:00 AM</span> –{" "}
                    <span class="time">7:00 AM</span>
                  </li>
                  <li>Duration: 6–8 hours</li>
                  <li>Carry food, snacks & 6–7 liters of water</li>
                  <li>Eat light breakfast before start</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="timeline-item">
          <div class="content">
            <div class="date-header">
              17th June: Ganpatiphule & Beaches (Day-3)
            </div>
            <div class="content-body">
              <div class="content-img">
                <img
                  src="images/04-ganpatiphule.jfif"
                  alt="Ganpatiphule Temple"
                />
              </div>
              <div class="content-text">
                <ul>
                  <li>Visit Ganpatiphule Temple in the morning</li>
                  <li>Explore Aare Ware Beach</li>
                  <li>Relax at Kasheli Beach</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="timeline-item">
          <div class="content">
            <div class="date-header">
              18th June: Explore Some Place & Return
            </div>
            <div class="content-body">
              <div class="content-img">
                <img src="images/05-chiplun.jfif" alt="Ratnagiri landscape" />
              </div>
              <div class="content-text">
                <ul>
                  <li>Explore Ratnagiri during the day</li>
                  <li>Travel back to Chiplun station</li>
                  <li>
                    Return train at <span class="time">8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="packing-section">
        <h2>Packing Checklist</h2>
        <fieldset>
          <legend>What to Bring 🧳</legend>
          <form id="packing-form">
            <label>
              <input type="checkbox" data-item="clothes" />
              👕 Clothes
            </label>
            <label>
              <input type="checkbox" data-item="shoes" />
              🥾 Trekking Shoes
            </label>
            <label>
              <input type="checkbox" data-item="bottle" />
              💧 Water Bottle
            </label>
            <label>
              <input type="checkbox" data-item="snacks" />
              🍫 Snacks
            </label>
            <label>
              <input type="checkbox" data-item="charger" />
              🔌 Mobile Charger
            </label>
            <label>
              <input type="checkbox" data-item="camera" />
              📷 Camera
            </label>
            <label>
              <input type="checkbox" data-item="sunscreen" />
              🧴 Facewash
            </label>
            <label>
              <input type="checkbox" data-item="toiletries" /> 🧥 Raicoat
            </label>
          </form>
        </fieldset>
      </section>

      <footer>- Life Hai Bidu Moj Karle</footer>

      {/* <script>
    // Persist checkbox state using localStorage
    const checkboxes = document.querySelectorAll('#packing-form input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
      const key = `packing_${checkbox.dataset.item}`;
      checkbox.checked = localStorage.getItem(key) === "true";

      checkbox.addEventListener("change", () => {
        localStorage.setItem(key, checkbox.checked);
      });
    });
  </script> */}
    </>
  );
}

export default App;
