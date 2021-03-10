import { AppState } from '../Appstate'
import { sandboxApi } from './AxiosService'

class HousesService {
  async getHouses() {
    try {
      const res = await sandboxApi.get('houses')
      AppState.houses = res.data
    } catch (error) {
      console.error(error)
    }
  }

  //   async getCar(id) {
  //     try {
  //       const res = await sandboxApi.get('cars/' + id)
  //       AppState.activeCar = res.data
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   async createCar(rawCar) {
  //     try {
  //       const res = await sandboxApi.post('cars', rawCar)
  //       AppState.cars.push(res.data)
  //       return res.data._id
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   async bid(id) {
  //     const car = AppState.cars.find(c => c.id === id)
  //     car.price += 100
  //     try {
  //       await sandboxApi.put('cars/' + id, car)
  //     } catch (error) {

  //     }
  //   }

//   async deleteCar(id) {
//     try {
//       await sandboxApi.delete(`cars/${id}`)
//       this.getCars()
//     } catch (error) {
//       console.error(error)
//     }
//   }
}

export const housesService = new HousesService()
