import { useLoaderData, useParams } from "react-router-dom";


export default function CareerDetails() {
   // const { id } = useParams();
   const career = useLoaderData();

   return (
      <div className="career-details">
         <h2>Career Details for {career.title}</h2>
         <p>Starting salary: {career.salary}</p>
         <p>Location: {career.location}</p>

         <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore reiciendis eaque ullam perspiciatis nesciunt, iusto dicta corrupti eveniet reprehenderit.</p>
         </div>
      </div>
   );
}


// loader function, fetch data from API here
export const careerDetailsLoader = async ({ params }) => {
   const { id } = params;

   const res = await fetch('http://localhost:4000/careers/' + id);

   return res.json();
}