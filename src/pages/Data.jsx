import { useLoaderData, useNavigation } from 'react-router-dom';

import './Data.css';

export default function Data() {
   const dogUrl = useLoaderData();
   console.log(dogUrl);

   const navigation = useNavigation();

   if (navigation.state === 'loading') {
      return <h1>Loading....</h1>;
   }

   return (
      <div className="img_Container">
         <img src={dogUrl} alt="A DOG" />
      </div>
   );
}

export const dataLoader = async () => {
   const res = await fetch('https://random.dog/woof.json');
   const dog = await res.json();

   return dog.url;
};
