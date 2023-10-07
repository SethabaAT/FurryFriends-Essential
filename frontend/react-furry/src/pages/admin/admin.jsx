import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { React, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "./admin.css";

export const Admin = () => {
  const { userType, token } = useContext(ShopContext);
  return (
    <>
      {token === null && userType !== 1 ? (
        <div className="unAuth">
          <h4> UnAuthorised Access, Please Sign In. </h4>
        </div>
      ) : (
        <div className="admin">
          {/* <Button text={"Add Product"} onClickAdd={() => navigate('/addProducts')}/>
        <Button text={"Remove Product"} onClickAdd={() => navigate('/removeProducts')}/>
        <Button text={"Update Product"} onClickAdd={() => navigate('/updateProducts')}/> */}
<<<<<<< HEAD
        
      <h3>Welcome Admin </h3>
       

    </div> )} </>
  )
}
=======
          <h4>Admin Dashboard</h4>
          <PowerBIEmbed
            embedConfig={{
              type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
              id: "85b26cf3-e303-44dc-95bd-0641ebf0c8a2",
              embedUrl:
                "https://app.powerbi.com/reportEmbed?reportId=85b26cf3-e303-44dc-95bd-0641ebf0c8a2&groupId=47799f1e-15cb-4d76-98dd-a88a18e9a27e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
              accessToken:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDhiZjdjMTgtNTcyNS00YjllLWIxMTgtMTMzODhmNTJlNDRlLyIsImlhdCI6MTY5NjY3ODMxMywibmJmIjoxNjk2Njc4MzEzLCJleHAiOjE2OTY2ODM0MTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VUFBQUE3b2I0dmh6YTdXSjlXbGlXZ1BweXFzK0NDQ1BSejZSMGxhczVxQVY5VU5YVFY2MC9vZkRUVXBLK2p5MjFsbS9EM2t0Vy9raTRzRlZYYXFtRDY1eWxwdHZTVDJ1bWdId2xzd0xiWG1saTlqND0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNQUNISSIsImdpdmVuX25hbWUiOiJOVEFORE9ZRU5LT1NJIiwiaXBhZGRyIjoiMTUyLjEwNi45OS4xNDgiLCJuYW1lIjoiTlRBTkRPWUVOS09TSSBNQUNISSIsIm9pZCI6ImM5MTYzODRmLWFhOTAtNGU5NS04ZDJmLWU4ZjE4MzBmNmMzOSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xMDY3MTI0NjQ3LTEzMzgyMjM4MjMtMTY4MTc5OTE3Mi01MTY5NzciLCJwdWlkIjoiMTAwMzIwMDFEMkFBOEIwOSIsInJoIjoiMC5BVG9BR0h5XzJDVlhua3V4R0JNNGoxTGtUZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQTZBUGcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiN0M2TjlUeWlyeGtHdmlNRlU1V202cDRsR1l5MzUtbFNobUNuVWJEZFdvTSIsInRpZCI6ImQ4YmY3YzE4LTU3MjUtNGI5ZS1iMTE4LTEzMzg4ZjUyZTQ0ZSIsInVuaXF1ZV9uYW1lIjoiMjIyMTAxODU0QHN0dWRlbnQudWouYWMuemEiLCJ1cG4iOiIyMjIxMDE4NTRAc3R1ZGVudC51ai5hYy56YSIsInV0aSI6InZRcmRfZGhScTBpQzZWWUZhR3BvQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.jkU7J7ikGmVQ_g3duizqkLTRSjwwO3S6M5RIlcPEsAJb7mC1PrXKUqAzrM3B_W9FYJ1SXppSN-F676O5xOU3J9eJ4NOx1CXPtYigd7fzzQgUxQNtdP8JKnj1-osjsLUsNh7epzRXyL8M6L5gwMWM_BfhzwrSQexseFZiGoBGcbMi2usog5bTRyM2VJoukWWhCKvBPK5YBTVuyDzf8WG8OfpQVoQdW9VFR1jexUQLcUz_MwA0J4z6PjIirrQwhPtSFVGP6gWpq0mfsCHdEa9I-r55KNYGrOUq-zulJNbFYbKosVPZMgZAsN_aY6cUtzSVCWVbMBp1UrtczgFaSfZAcA",
              tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: true,
                  },
                },
                //background: models.BackgroundType.Transparent,
              },
            }}
            eventHandlers={
              new Map([
                [
                  "loaded",
                  function () {
                    console.log("Report loaded");
                  },
                ],
                [
                  "rendered",
                  function () {
                    console.log("Report rendered");
                  },
                ],
                [
                  "error",
                  function (event) {
                    console.log(event.detail);
                  },
                ],
                ["visualClicked", () => console.log("visual clicked")],
                ["pageChanged", (event) => console.log(event)],
              ])
            }
            cssClassName={"Embed-container"}
            getEmbeddedComponent={(embeddedReport) => {
              window.report = embeddedReport;
            }}
          />
        </div>
      )}
    </>
  );
};
>>>>>>> 66d23e0484d94bc8edf5770b17cff98aeb8507ae
