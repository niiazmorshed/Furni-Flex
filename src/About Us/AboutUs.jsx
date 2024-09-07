import { Helmet } from "react-helmet";


const AboutUs = () => {
    return (
<div className="mt-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>We|Furni Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex justify-center items-center my-44">
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className=" card w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              style={{ height: "400px", width: "400px" }}
              src={"https://i.ibb.co/4PffJnR/photo-2023-02-28-19-26-32-2.jpg"}
            />
          </figure>
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Niaz Morshed</h1>
            <p className="text-base font-semibold text-start">
              As the CEO of our esteemed establishment, I am thrilled to extend
              a warm and heartfelt greeting to each and every guest who graces
              our website. Thank you for considering Furni Flex for your Choice.<br /> Warm regards,
            </p>
          </div>
        </div>

      </div>
    </div>
    );
};

export default AboutUs;