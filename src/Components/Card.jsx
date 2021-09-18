import React from "react";
import { useSelector } from "react-redux";

function Card() {
  const placeData = useSelector((state) => state.placeData);
  return (
    <>
      {placeData ? (
        <>
          <div className="Card">
            <div className="upper">
              <div className="first">
                <h1>{placeData.location && placeData.location.name}</h1>
                <p className="para-1">
                  {placeData.location && placeData.location.localtime}
                </p>
                <img
                  src={placeData.current && placeData.current.condition.icon}
                  alt=""
                />
                <p className="para-2">
                  {placeData.current && placeData.current.condition.text}
                </p>
              </div>
              <div className="second">
                <p className="para-3">
                  {placeData.current && placeData.current.temp_c} °C
                  <p className="para-4">
                    /{placeData.current && placeData.current.temp_f} °F
                  </p>
                </p>
              </div>
            </div>
            <div className="lower">
              <div className="details">
                <section className="items">
                  <h6 className="details-para">NOW</h6>
                  <img
                    src={placeData.current && placeData.current.condition.icon}
                    alt=""
                  />
                  <h6 className="details-para">
                    {placeData.current && placeData.current.temp_c} °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">11AM</h6>
                  <img
                    src={
                      placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[11].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[11].temp_c}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">12PM</h6>
                  <img
                    src={
                      placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[12].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[12].temp_c}{" "}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">1PM</h6>
                  <img
                    src={
                      placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[13].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[13].temp_c}{" "}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">2PM</h6>
                  <img
                    src={
                      placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[14].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[14].temp_c}{" "}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">3PM</h6>
                  <img
                    src={
                      placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[15].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {placeData.forecast &&
                      placeData.forecast.forecastday[0].hour[15].temp_c}{" "}
                    °C
                  </h6>
                </section>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Card;
