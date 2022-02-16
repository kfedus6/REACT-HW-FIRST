const apiKey = 'e4Uct2oRTLf0COnSvSGWvWtRd4vxrvfuGZfw5zs5';

class Cars extends React.Component {
   constructor(props) {
      super(props)
      this.state = { cars: [] }
      this.counr_render = 0
   }

   getIds = async () => {
      const response = await fetch(`https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1`);
      const data = await response.json();
      return data;
   }

   getCars = async () => {
      let CarIds = await this.getIds();
      let ids = CarIds.result.search_result.ids;
      const cars_obj = []
      for (let i = 0; i < ids.length; i++) {
         let cars = ids[i];
         const response = await fetch(`https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${cars}`);
         const data = await response.json();
         cars_obj.push(data);
      }
      this.setState({ cars: cars_obj })
      this.counr_render += 1
   }

   render() {
      if (this.counr_render == 0) {
         this.getCars();
      }

      let cars = this.state.cars.map(car => {
         return (
            <div className="block__car">
               <div>
                  <img src={car.photoData.seoLinkB} />
               </div>
               <span style={styleSpan}>Model: {car.title}</span>
               <span style={styleSpan}>Price: {car.USD}</span>
            </div>
         )
      })

      return cars
   }
}

const styleBlock = {
   display: "flex",
}

const styleSpan = {
   display: "block",
}

ReactDOM.render(
   <>
      <div style={styleBlock}>
         <Cars />
      </div>
   </>,
   document.getElementById('app')
)

