
import pin from "../images/location-pin-svgrepo-com.svg"

export default function Tile(props){
  console.log(props.id)
  return (
    <div className="flex justify-center p-6">
      <div className="pr-8">
        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={props.imageUrl} alt=""/>
      </div>
      <div className="w-[650px] py-6">
        <div className="flex">
          <img src={pin} width="19px"/>
          <h6 className="pl-2 pr-4 tracking-wide">{props.location}</h6>
          <div className="flex items-end"> 
            <a href={props.googleMapsUrl} className="text-gray-400 underline text-sm">View on google amps</a>
          </div>
        </div>
        <div className="text-5xl font-bold pt-2 pb-4">
          {props.title}
        </div>
        <div className="font-semibold pb-2">
          <span>{props.startDate}</span> - <span>{props.endDate}</span>
        </div>
        <div>
          <p>
          {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}