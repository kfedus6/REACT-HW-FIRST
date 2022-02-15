const apiKey = 'e4Uct2oRTLf0COnSvSGWvWtRd4vxrvfuGZfw5zs5';

class Cars extends React.Component {

   getIds = async () => {
      const response = await fetch(`https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1`);
      const data = await response.json();
      return data;
   }

   getCars = async () => {
      let CarIds = await this.getIds();
      let ids = CarIds.result.search_result.ids;
      for (let i = 0; i < ids.length; i++) {
         let cars = ids[i];
         const response = await fetch(`https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${cars}`);
         const data = await response.json();
         return data
      }
   }


   render() {
      return this.getCars();
   }
}


ReactDOM.render(
   <Cars />,
   document.getElementById('app')
) 