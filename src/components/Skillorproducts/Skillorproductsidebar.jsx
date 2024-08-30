import React from "react";
import { Link } from "react-router-dom";
import "../../components/Skillorproducts/Skillorproductsidebar.css";

const Skillorproductsidebar = ({ activepage }) => {
  return (
    <>
      <div className="skillandproductsidebar">
        {activepage === "tailors" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
              alt="Tailoring Services"
            />
          </div>
        ) : (
          <Link to="/productsandservices/tailors">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/1465634394/photo/african-dressmaking-entrepreneur.jpg?s=612x612&w=is&k=20&c=l6oByiOnw8U_T5Y6lcoWe7Zb-a7wWr_p_2IzSkWmUzk="
                alt="Tailoring Services"
              />
            </div>
          </Link>
        )}

        {activepage === "autotechnicians" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/1892182257/photo/male-mechanic-working-on-car-engine-in-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=fHi1Fheh3-ByUS6MdlQXJgrN3InZq28Efhp_eeLp2Ks="
              alt="Auto Repair"
            />
          </div>
        ) : (
          <Link to="/productsandservices/autotechnicians">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/1892182257/photo/male-mechanic-working-on-car-engine-in-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=fHi1Fheh3-ByUS6MdlQXJgrN3InZq28Efhp_eeLp2Ks="
                alt="Auto Repair"
              />
            </div>
          </Link>
        )}

        {activepage === "electricians" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU="
              alt="Electrical Services"
            />
          </div>
        ) : (
          <Link to="/productsandservices/electricians">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.jpg?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU="
                alt="Electrical Services"
              />
            </div>
          </Link>
        )}

        {activepage === "plumbers" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/1440019701/photo/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=2048x2048&w=is&k=20&c=5m-JfCrZBaSidsv4kUo5my6keChi4e5wIsaF832h-88="
              alt="Plumbing Services"
            />
          </div>
        ) : (
          <Link to="/productsandservices/plumbers">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/1440019701/photo/close-up-of-plumber-repairing-sink-with-tool-in-bathroom.jpg?s=2048x2048&w=is&k=20&c=5m-JfCrZBaSidsv4kUo5my6keChi4e5wIsaF832h-88="
                alt="Plumbing Services"
              />
            </div>
          </Link>
        )}

        {activepage === "caterers" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=2048x2048&w=is&k=20&c=yhcsWsT9BEO09L9Zhtbjo8BegTaQh69i-nRBeTH9SfY="
              alt="Catering Services"
            />
          </div>
        ) : (
          <Link to="/productsandservices/caterers">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?s=2048x2048&w=is&k=20&c=yhcsWsT9BEO09L9Zhtbjo8BegTaQh69i-nRBeTH9SfY="
                alt="Catering Services"
              />
            </div>
          </Link>
        )}

        {activepage === "buildersandconstructors" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
              alt="Building/Construction"
            />
          </div>
        ) : (
          <Link to="/productsandservices/buildersandconstructors">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
                alt="Building/Construction"
              />
            </div>
          </Link>
        )}

        {activepage === "arts" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/1125625188/photo/girl-painting-on-canvas.jpg?s=612x612&w=is&k=20&c=5ZdMo5yfsCh-gkmOpD4Jo6UkYX0-ociq0uLEZz_VA5Y="
              alt="Arts"
            />
          </div>
        ) : (
          <Link to="/productsandservices/arts">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/1125625188/photo/girl-painting-on-canvas.jpg?s=612x612&w=is&k=20&c=5ZdMo5yfsCh-gkmOpD4Jo6UkYX0-ociq0uLEZz_VA5Y="
                alt="Arts"
              />
            </div>
          </Link>
        )}

        {activepage === "otherservices" ? (
          <div className="column2">
            <img
              src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
              alt="Otherservicesn"
            />
          </div>
        ) : (
          <Link to="/productsandservices/otherservices">
            <div className="column1">
              <img
                src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=is&k=20&c=JHirA3ujFnq7GsWBALmxyzPDpNUX9OIfxDzGwpE6LX8="
                alt="Otherservices"
              />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Skillorproductsidebar;
